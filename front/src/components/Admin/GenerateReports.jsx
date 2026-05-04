import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ALL_CUSTOMERS, ALL_PROGRESS } from '../../endPoints';
import { toast } from 'react-toastify';
import './GenerateReports.css';

const GenerateReports = () => {
  const [reportType, setReportType] = useState('member-overview');
  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [customersRes, progressRes] = await Promise.all([
        axios.get(BASE_URL + ALL_CUSTOMERS, { headers: { Authorization: token } }),
        axios.get(BASE_URL + ALL_PROGRESS, { headers: { Authorization: token } })
      ]);
      setCustomers(customersRes.data?.data || []);
      setProgress(progressRes.data?.data || []);
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const generateMemberOverviewReport = () => {
    setReportData({
      type: 'Member Overview',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalMembers: customers.length,
        activeMembers: customers.filter(c => c.status === 'active').length,
        inactiveMembers: customers.filter(c => c.status !== 'active').length,
      },
      details: customers
    });
  };

  const generateProgressReport = () => {
    const memberProgress = {};
    progress.forEach(p => {
      if (!memberProgress[p.customerId]) {
        memberProgress[p.customerId] = [];
      }
      memberProgress[p.customerId].push(p);
    });

    setReportData({
      type: 'Member Progress Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalProgressRecords: progress.length,
        membersTracked: Object.keys(memberProgress).length,
      },
      details: memberProgress
    });
  };

  const generateMembershipReport = () => {
    const membershipStats = {};
    customers.forEach(customer => {
      const plan = customer.membershipPlan || 'No Plan';
      membershipStats[plan] = (membershipStats[plan] || 0) + 1;
    });

    setReportData({
      type: 'Membership Report',
      timestamp: new Date().toLocaleDateString(),
      summary: membershipStats,
      details: customers
    });
  };

  const generateAttendanceReport = () => {
    const attendanceData = customers.map(customer => ({
      name: customer.name,
      joinDate: customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A',
      status: customer.status || 'active'
    }));

    setReportData({
      type: 'Attendance & Membership Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalMembers: customers.length,
        reportDate: new Date().toLocaleDateString()
      },
      details: attendanceData
    });
  };

  const handleGenerateReport = () => {
    switch (reportType) {
      case 'member-overview':
        generateMemberOverviewReport();
        break;
      case 'progress':
        generateProgressReport();
        break;
      case 'membership':
        generateMembershipReport();
        break;
      case 'attendance':
        generateAttendanceReport();
        break;
      default:
        toast.error('Invalid report type');
    }
  };

  const downloadReport = () => {
    if (!reportData) {
      toast.error('No report to download');
      return;
    }

    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json'
    });
    element.href = URL.createObjectURL(file);
    element.download = `${reportData.type}-${reportData.timestamp}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Report downloaded successfully');
  };

  const printReport = () => {
    if (!reportData) {
      toast.error('No report to print');
      return;
    }

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Report</title>');
    printWindow.document.write('<style>body { font-family: Arial; margin: 20px; }');
    printWindow.document.write('h1 { color: #667eea; }');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; }');
    printWindow.document.write('th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }');
    printWindow.document.write('th { background-color: #667eea; color: white; }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(`<h1>${reportData.type}</h1>`);
    printWindow.document.write(`<p><strong>Generated on:</strong> ${reportData.timestamp}</p>`);
    printWindow.document.write(`<h2>Summary</h2>`);
    printWindow.document.write(`<pre>${JSON.stringify(reportData.summary, null, 2)}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Generate Reports</h1>
        <p>Create detailed reports about your gym operations</p>
      </div>

      <div className="reports-main">
        <div className="report-selector">
          <h2>Select Report Type</h2>
          <div className="report-options">
            <div 
              className={`report-option ${reportType === 'member-overview' ? 'active' : ''}`}
              onClick={() => setReportType('member-overview')}
            >
              <div className="icon">📊</div>
              <h3>Member Overview</h3>
              <p>Total and active members</p>
            </div>

            <div 
              className={`report-option ${reportType === 'progress' ? 'active' : ''}`}
              onClick={() => setReportType('progress')}
            >
              <div className="icon">📈</div>
              <h3>Progress Report</h3>
              <p>Member fitness progress</p>
            </div>

            <div 
              className={`report-option ${reportType === 'membership' ? 'active' : ''}`}
              onClick={() => setReportType('membership')}
            >
              <div className="icon">💳</div>
              <h3>Membership Report</h3>
              <p>Membership plan distribution</p>
            </div>

            <div 
              className={`report-option ${reportType === 'attendance' ? 'active' : ''}`}
              onClick={() => setReportType('attendance')}
            >
              <div className="icon">📅</div>
              <h3>Attendance Report</h3>
              <p>Member attendance records</p>
            </div>
          </div>

          <button 
            className="generate-btn"
            onClick={handleGenerateReport}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Generate Report'}
          </button>
        </div>

        {reportData && (
          <div className="report-result">
            <div className="report-header-info">
              <h2>{reportData.type}</h2>
              <p className="timestamp">Generated: {reportData.timestamp}</p>
            </div>

            <div className="report-summary">
              <h3>Summary</h3>
              <div className="summary-stats">
                {Object.entries(reportData.summary).map(([key, value]) => (
                  <div key={key} className="stat-card">
                    <span className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="stat-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {Array.isArray(reportData.details) && reportData.details.length > 0 && (
              <div className="report-table">
                <h3>Details</h3>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        {Object.keys(reportData.details[0]).map((key) => (
                          <th key={key}>{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {reportData.details.slice(0, 10).map((row, idx) => (
                        <tr key={idx}>
                          {Object.values(row).map((val, i) => (
                            <td key={i}>{String(val).substring(0, 50)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {reportData.details.length > 10 && (
                    <p className="more-records">
                      Showing 10 of {reportData.details.length} records
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="report-actions">
              <button className="download-btn" onClick={downloadReport}>
                📥 Download Report
              </button>
              <button className="print-btn" onClick={printReport}>
                🖨️ Print Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateReports;
