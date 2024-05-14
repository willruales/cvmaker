import React, { useState } from 'react'; // Import React and useState once
import './index.css';
import './App.css';

function Foobar() {

  return (<div>
    <h3>Work Experience</h3>
    <p><strong>Job:</strong> {job}</p>
    <p><strong>Date:</strong> {date}</p>
    <p><strong>Role:</strong> {role}</p>
  </div>)
}

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can set finalCV state here if needed
  };

  return (
    <div>
      <div> Main details</div>
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
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
      <div> Education</div>

      <form onSubmit={handleSubmit}>
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
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="submit">Add Work Experience</button>
      </form>

      <FinalOne name={name} dob={dob} email={email} job={job} date={date} role={role} />
    </div>
  );
}

export default CVTemplate;
