import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_TRAINERS, BASE_URL } from '../../endPoints';
import { toast } from 'react-toastify';
import './ViewTrainerProfile.css';

const ViewTrainerProfile = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + ALL_TRAINERS, {
        headers: { Authorization: token }
      });
      setTrainers(response.data?.data || []);
    } catch (error) {
      toast.error('Failed to load trainers');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="trainer-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading trainers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="trainer-container">
      <div className="trainer-header">
        <h1>Our Trainers</h1>
        <p>Meet our certified and experienced fitness trainers</p>
      </div>

      {selectedTrainer ? (
        <div className="trainer-detail-view">
          <button 
            className="back-btn"
            onClick={() => setSelectedTrainer(null)}
          >
            ← Back to Trainers
          </button>

          <div className="trainer-detail-card">
            <div className="trainer-detail-header">
              <div className="trainer-avatar">
                {selectedTrainer.profileImage ? (
                  <img src={selectedTrainer.profileImage} alt={selectedTrainer.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {selectedTrainer.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="trainer-info">
                <h2>{selectedTrainer.name}</h2>
                <p className="specialization">{selectedTrainer.specialization || 'Fitness Trainer'}</p>
                {selectedTrainer.experience && (
                  <p className="experience">
                    <strong>Experience:</strong> {selectedTrainer.experience} years
                  </p>
                )}
              </div>
            </div>

            <div className="trainer-details-section">
              {selectedTrainer.email && (
                <div className="detail-row">
                  <span className="label">Email:</span>
                  <span className="value">{selectedTrainer.email}</span>
                </div>
              )}
              {selectedTrainer.phone && (
                <div className="detail-row">
                  <span className="label">Phone:</span>
                  <span className="value">{selectedTrainer.phone}</span>
                </div>
              )}
              {selectedTrainer.qualification && (
                <div className="detail-row">
                  <span className="label">Qualification:</span>
                  <span className="value">{selectedTrainer.qualification}</span>
                </div>
              )}
              {selectedTrainer.certifications && (
                <div className="detail-row">
                  <span className="label">Certifications:</span>
                  <span className="value">{selectedTrainer.certifications}</span>
                </div>
              )}
            </div>

            {selectedTrainer.bio && (
              <div className="trainer-bio">
                <h3>About</h3>
                <p>{selectedTrainer.bio}</p>
              </div>
            )}

            {selectedTrainer.specialties && (
              <div className="trainer-specialties">
                <h3>Specialties</h3>
                <ul>
                  {Array.isArray(selectedTrainer.specialties) 
                    ? selectedTrainer.specialties.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))
                    : <li>{selectedTrainer.specialties}</li>
                  }
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="trainers-grid">
          {trainers.length === 0 ? (
            <div className="no-trainers">
              <p>No trainers available</p>
            </div>
          ) : (
            trainers.map((trainer) => (
              <div 
                key={trainer._id} 
                className="trainer-card"
                onClick={() => setSelectedTrainer(trainer)}
              >
                <div className="trainer-image">
                  {trainer.profileImage ? (
                    <img src={trainer.profileImage} alt={trainer.name} />
                  ) : (
                    <div className="image-placeholder">
                      {trainer.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="trainer-card-content">
                  <h3>{trainer.name}</h3>
                  <p className="spec">{trainer.specialization || 'Fitness Trainer'}</p>
                  
                  {trainer.experience && (
                    <p className="exp">
                      <span className="badge">{trainer.experience}+ Yrs</span>
                    </p>
                  )}

                  <button className="view-btn">
                    View Profile →
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ViewTrainerProfile;
