import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../endPoints';
import { toast } from 'react-toastify';
import './AdminChangePassword.css';

const AdminChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const token = localStorage.getItem('token');
  const adminId = localStorage.getItem('adminId');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateForm = () => {
    if (!formData.currentPassword) {
      toast.error('Please enter your current password');
      return false;
    }
    if (!formData.newPassword) {
      toast.error('Please enter a new password');
      return false;
    }
    if (formData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters long');
      return false;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    if (formData.currentPassword === formData.newPassword) {
      toast.error('New password cannot be the same as current password');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        BASE_URL + 'admin/changePassword',
        {
          adminId,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        },
        { headers: { Authorization: token } }
      );

      if (response.data?.success) {
        toast.success('Password changed successfully!');
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        toast.error(response.data?.message || 'Failed to change password');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to change password');
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-wrapper">
        <div className="form-header">
          <h1>Change Password</h1>
          <p>Update your admin account password</p>
        </div>

        <form onSubmit={handleSubmit} className="password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.current ? 'text' : 'password'}
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter your current password"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => togglePasswordVisibility('current')}
              >
                {showPassword.current ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.new ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => togglePasswordVisibility('new')}
              >
                {showPassword.new ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            <div className="password-strength">
              <span className={`strength-meter ${formData.newPassword.length >= 8 ? 'strong' : formData.newPassword.length >= 6 ? 'medium' : ''}`}></span>
              <span className="strength-text">
                {formData.newPassword.length === 0 ? '' : formData.newPassword.length >= 8 ? 'Strong' : formData.newPassword.length >= 6 ? 'Medium' : 'Weak'}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.confirm ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your new password"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => togglePasswordVisibility('confirm')}
              >
                {showPassword.confirm ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {formData.newPassword && formData.confirmPassword && (
              <div className={`match-status ${formData.newPassword === formData.confirmPassword ? 'match' : 'no-match'}`}>
                {formData.newPassword === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
              </div>
            )}
          </div>

          <div className="password-requirements">
            <h4>Password Requirements:</h4>
            <ul>
              <li className={formData.newPassword.length >= 6 ? 'met' : ''}>
                At least 6 characters
              </li>
              <li className={/[A-Z]/.test(formData.newPassword) ? 'met' : ''}>
                At least one uppercase letter
              </li>
              <li className={/[a-z]/.test(formData.newPassword) ? 'met' : ''}>
                At least one lowercase letter
              </li>
              <li className={/[0-9]/.test(formData.newPassword) ? 'met' : ''}>
                At least one number
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading || !formData.currentPassword || !formData.newPassword || !formData.confirmPassword}
          >
            {loading ? 'Updating...' : 'Change Password'}
          </button>
        </form>

        <div className="security-tips">
          <h4>Security Tips:</h4>
          <ul>
            <li>Use a strong and unique password</li>
            <li>Never share your password with anyone</li>
            <li>Change your password regularly</li>
            <li>Avoid using personal information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminChangePassword;
