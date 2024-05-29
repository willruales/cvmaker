import React, { useState } from 'react';
import './index.css';
import './App.css';

function FinalOne({ name, dob, email, job, date, role }) {
  return (
    <div className="FinalCV">
      <h2>CV</h2>
      <div>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div>
        <h3>Work Experience</h3>
        <p><strong>Job:</strong> {job}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
}

function CVTemplate() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit}>
        {!isMinimized && (
          <>
            <div>
              <label>Job:</label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </>
        )}
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="button" onClick={toggleMinimize}>
          {isMinimized ? 'Expand' : 'Minimize'}
        </button>
      </form>

      <FinalOne name={name} dob={dob} email={email} job={job} date={date} role={role} />
    </div>
  );
}

export default CVTemplate;
