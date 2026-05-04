import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ALL_CUSTOMERS, ALL_PROGRESS, ALL_EXCERCISE, ALL_DIET } from '../../endPoints';
import { toast } from 'react-toastify';
import './TrainerReports.css';

const TrainerReports = () => {
  const [reportType, setReportType] = useState('assigned-members');
  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [diets, setDiets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);
  const token = localStorage.getItem('token');
  const trainerId = localStorage.getItem('trainerId');

  useEffect(() => {
    fetchTrainerData();
  }, []);

  const fetchTrainerData = async () => {
    try {
      setLoading(true);
      const [customersRes, progressRes, exercisesRes, dietsRes] = await Promise.all([
        axios.get(BASE_URL + ALL_CUSTOMERS, { headers: { Authorization: token } }),
        axios.get(BASE_URL + ALL_PROGRESS, { headers: { Authorization: token } }),
        axios.get(BASE_URL + ALL_EXCERCISE, { headers: { Authorization: token } }),
        axios.get(BASE_URL + ALL_DIET, { headers: { Authorization: token } })
      ]);

      setCustomers(customersRes.data?.data || []);
      setProgress(progressRes.data?.data || []);
      setExercises(exercisesRes.data?.data || []);
      setDiets(dietsRes.data?.data || []);
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const generateAssignedMembersReport = () => {
    setReportData({
      type: 'Assigned Members Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalAssignedMembers: customers.length,
        activeMembers: customers.filter(c => c.status === 'active').length,
      },
      details: customers.map(c => ({
        name: c.name,
        email: c.email,
        phone: c.phone,
        joinDate: c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'N/A',
        status: c.status || 'active'
      }))
    });
  };

  const generateMemberProgressReport = () => {
    const memberProgress = {};
    progress.forEach(p => {
      if (!memberProgress[p.customerId]) {
        memberProgress[p.customerId] = [];
      }
      memberProgress[p.customerId].push({
        date: p.createdAt ? new Date(p.createdAt).toLocaleDateString() : 'N/A',
        weight: p.weight,
        bodyFat: p.bodyFat,
        muscleGain: p.muscleGain,
        notes: p.notes
      });
    });

    setReportData({
      type: 'Member Progress Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalProgressRecords: progress.length,
        membersTracked: Object.keys(memberProgress).length,
      },
      memberProgress
    });
  };

  const generateExerciseProgramReport = () => {
    setReportData({
      type: 'Exercise Program Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalExercisesCreated: exercises.length,
        exerciseVariety: new Set(exercises.map(e => e.type)).size,
      },
      details: exercises.map(e => ({
        name: e.name,
        type: e.type,
        sets: e.sets,
        reps: e.reps,
        duration: e.duration,
        targetArea: e.targetArea
      }))
    });
  };

  const generateDietPlanReport = () => {
    setReportData({
      type: 'Diet Plan Report',
      timestamp: new Date().toLocaleDateString(),
      summary: {
        totalDietPlansCreated: diets.length,
        avgCalories: (diets.reduce((sum, d) => sum + (d.calories || 0), 0) / diets.length).toFixed(0),
      },
      details: diets.map(d => ({
        name: d.name,
        calories: d.calories,
        protein: d.protein,
        carbs: d.carbs,
        fat: d.fat,
        mealType: d.mealType
      }))
    });
  };

  const handleGenerateReport = () => {
    switch (reportType) {
      case 'assigned-members':
        generateAssignedMembersReport();
        break;
      case 'member-progress':
        generateMemberProgressReport();
        break;
      case 'exercise-program':
        generateExerciseProgramReport();
        break;
      case 'diet-plan':
        generateDietPlanReport();
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
    <div className="trainer-reports-container">
      <div className="reports-header">
        <h1>Trainer Reports</h1>
        <p>Track member progress and manage fitness programs</p>
      </div>

      <div className="reports-main">
        <div className="report-selector">
          <h2>Select Report Type</h2>
          <div className="report-options">
            <div 
              className={`report-option ${reportType === 'assigned-members' ? 'active' : ''}`}
              onClick={() => setReportType('assigned-members')}
            >
              <div className="icon">👥</div>
              <h3>Assigned Members</h3>
              <p>Your members list</p>
            </div>

            <div 
              className={`report-option ${reportType === 'member-progress' ? 'active' : ''}`}
              onClick={() => setReportType('member-progress')}
            >
              <div className="icon">📈</div>
              <h3>Member Progress</h3>
              <p>Track improvements</p>
            </div>

            <div 
              className={`report-option ${reportType === 'exercise-program' ? 'active' : ''}`}
              onClick={() => setReportType('exercise-program')}
            >
              <div className="icon">💪</div>
              <h3>Exercise Programs</h3>
              <p>Your exercise plans</p>
            </div>

            <div 
              className={`report-option ${reportType === 'diet-plan' ? 'active' : ''}`}
              onClick={() => setReportType('diet-plan')}
            >
              <div className="icon">🥗</div>
              <h3>Diet Plans</h3>
              <p>Nutrition programs</p>
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

            {reportData.details && Array.isArray(reportData.details) && reportData.details.length > 0 && (
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

export default TrainerReports;
