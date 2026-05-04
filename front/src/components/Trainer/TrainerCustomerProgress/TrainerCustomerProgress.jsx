import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { allBatchRequestsTrainer } from '../../services/batchRegistrationService';
import './TrainerCustomerProgress.css';
import { allBatchRequestsTrainer } from '../../../services/batchRegistrationService';

const TrainerCustomerProgress = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const navigate = useNavigate();
  const trainerId = localStorage.getItem('trainerId');

  useEffect(() => {
    if (trainerId) {
      fetchAssignedCustomers();
    }
  }, [trainerId]);

  const fetchAssignedCustomers = () => {
    setLoading(true);
    allBatchRequestsTrainer({ trainerId })
      .then(res => {
        if (res.data.success) {
          setCustomers(res.data.data);
        } else {
          toast.error(res.data.message || 'Failed to load customers');
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Failed to load customers');
      })
      .finally(() => setLoading(false));
  };

  const handleAddDiet = (batchRegistrationId, customerId) => {
    navigate(`/trainer/diet/add/${batchRegistrationId}/${customerId}`);
  };

  const handleAddExercise = (batchRegistrationId, customerId) => {
    navigate(`/trainer/excercise/add/${batchRegistrationId}/${customerId}`);
  };

  const handleViewProgress = (customerId) => {
    navigate(`/trainer/customer/progress/${customerId}`);
  };

  if (loading) {
    return (
      <div className="trainer-progress-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading assigned customers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="trainer-progress-container">
      <div className="progress-header">
        <h1>My Assigned Members</h1>
        <p>Manage diet, exercises, and track progress for your members</p>
      </div>

      {customers.length === 0 ? (
        <div className="no-customers">
          <p>No members assigned yet</p>
        </div>
      ) : (
        <div className="customers-grid">
          {customers.map((batchReq) => {
            const customer = batchReq.memberId;
            return (
              <div key={batchReq._id} className="customer-card">
                <div className="card-header">
                  <div className="customer-avatar">
                    {customer?.profileImage ? (
                      <img src={customer.profileImage} alt={customer.name} />
                    ) : (
                      <div className="avatar-placeholder">
                        {customer?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="customer-info">
                    <h3>{customer?.name}</h3>
                    <p className="email">{customer?.email}</p>
                  </div>
                </div>

                <div className="customer-details">
                  {customer?.phone && (
                    <div className="detail-row">
                      <span className="label">Phone:</span>
                      <span className="value">{customer.phone}</span>
                    </div>
                  )}
                  {customer?.age && (
                    <div className="detail-row">
                      <span className="label">Age:</span>
                      <span className="value">{customer.age}</span>
                    </div>
                  )}
                  <div className="detail-row">
                    <span className="label">Status:</span>
                    {/* <span className={`status ${batchReq.status?.toLowerCase()}`}>
                      {batchReq.status || 'Active'}
                    </span> */}
                  </div>
                </div>

                <div className="action-buttons">
                  <Link
                    className="btn btn-primary"
                    // onClick={() => handleAddDiet(batchReq._id, customer._id)}
                    to={"/trainer/diet/manage"}
                    title="Add Diet Plan"
                    >
                    🥗 Add Diet
                  </Link>
                  <Link
                    className="btn btn-success"
                    to={"/trainer/excercise/manage"}
                    // onClick={() => handleAddExercise(batchReq._id, customer._id)}
                    title="Add Exercise"
                  >
                    💪 Add Exercise
                  </Link>
                  <button
                    className="btn btn-info"
                    onClick={() => handleViewProgress(customer._id)}
                    title="View Progress"
                  >
                    📈 Progress
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TrainerCustomerProgress;
