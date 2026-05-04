import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_BATCH, BASE_URL, ADD_BATCH_REGISTRATION } from '../../endPoints';
import { toast } from 'react-toastify';
import './JoinBatch.css';

const JoinBatch = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [registering, setRegistering] = useState(false);
  const customerId = localStorage.getItem('customerId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + ALL_BATCH, {
        headers: { Authorization: token }
      });
      setBatches(response.data?.data || []);
    } catch (error) {
      toast.error('Failed to load batches');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinBatch = async (batchId) => {
    if (!customerId) {
      toast.error('Please login first');
      return;
    }

    try {
      setRegistering(true);
      const response = await axios.post(
        BASE_URL + ADD_BATCH_REGISTRATION,
        { customerId, batchId },
        { headers: { Authorization: token } }
      );

      if (response.data?.success) {
        toast.success('Successfully registered for the batch!');
        setSelectedBatch(null);
      } else {
        toast.error(response.data?.message || 'Failed to register');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to register for batch');
      }
      console.error(error);
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="join-batch-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading batches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="join-batch-container">
      <div className="join-batch-header">
        <h1>Join a Batch</h1>
        <p>Select a batch and register to start your fitness journey</p>
      </div>

      {batches.length === 0 ? (
        <div className="no-batches">
          <p>No batches available at the moment</p>
        </div>
      ) : (
        <div className="batches-grid">
          {batches.map((batch) => (
            <div key={batch._id} className="batch-card">
              <div className="batch-header">
                <h3>{batch.batchName}</h3>
                <span className="batch-status">Active</span>
              </div>

              <div className="batch-details">
                {batch.trainerName && (
                  <div className="detail-item">
                    <span className="label">Trainer:</span>
                    <span className="value">{batch.trainerName}</span>
                  </div>
                )}
                {batch.schedule && (
                  <div className="detail-item">
                    <span className="label">Schedule:</span>
                    <span className="value">{batch.schedule}</span>
                  </div>
                )}
                {batch.maxMembers && (
                  <div className="detail-item">
                    <span className="label">Capacity:</span>
                    <span className="value">{batch.maxMembers} members</span>
                  </div>
                )}
                {batch.price && (
                  <div className="detail-item">
                    <span className="label">Price:</span>
                    <span className="price">₹{batch.price}</span>
                  </div>
                )}
                {batch.description && (
                  <div className="batch-description">
                    <p>{batch.description}</p>
                  </div>
                )}
              </div>

              <button
                className="join-btn"
                onClick={() => handleJoinBatch(batch._id)}
                disabled={registering}
              >
                {registering ? 'Registering...' : 'Register Now'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinBatch;
