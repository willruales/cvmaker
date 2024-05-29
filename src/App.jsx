import React, { useState } from 'react';
import './index.css';
import './App.css';
import Jobform from './Jobform';
import EducationForm from './EducationForm';
import FinalOne from './Finalone';
function CVTemplate() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [jobRoles, setJobRoles] = useState([{ job: '', date: '', role: '' }]);
  const [educationDetails, setEducationDetails] = useState([{ institution: '', degree: '', startDate: '', endDate: '' }]);
  const [isParentFormMinimized, setIsParentFormMinimized] = useState(false);

  const handleJobChange = (index, event) => {
    const values = [...jobRoles];
    values[index][event.target.name] = event.target.value;
    setJobRoles(values);
  };

  const handleAddJob = () => {
    setJobRoles([...jobRoles, { job: '', date: '', role: '' }]);
  };

  const handleRemoveJob = (index) => {
    const values = [...jobRoles];
    values.splice(index, 1);
    setJobRoles(values);
  };

  const handleEducationChange = (index, event) => {
    const values = [...educationDetails];
    values[index][event.target.name] = event.target.value;
    setEducationDetails(values);
  };

  const handleAddEducation = () => {
    setEducationDetails([...educationDetails, { institution: '', degree: '', startDate: '', endDate: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const values = [...educationDetails];
    values.splice(index, 1);
    setEducationDetails(values);
  };

  const toggleParentFormMinimize = () => {
    setIsParentFormMinimized(!isParentFormMinimized);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {!isParentFormMinimized && (
          <>
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
          </>
        )}
        <button type="button" onClick={toggleParentFormMinimize}>
          {isParentFormMinimized ? 'Expand' : 'Minimize'}
        </button>
        <button type="submit">Submit</button>
      </form>

      <Jobform
        jobRoles={jobRoles}
        handleJobChange={handleJobChange}
        handleAddJob={handleAddJob}
        handleRemoveJob={handleRemoveJob}
        isMinimized={isParentFormMinimized} // Ensure job form is not minimized
        toggleMinimize={() => {}}
      />
      <EducationForm
        educationDetails={educationDetails}
        handleEducationChange={handleEducationChange}
        handleAddEducation={handleAddEducation}
        handleRemoveEducation={handleRemoveEducation}
        isMinimized={isParentFormMinimized} // Ensure education form is not minimized
        toggleMinimize={() => {}}
      />
      <FinalOne
        name={name}
        dob={dob}
        email={email}
        jobRoles={jobRoles}
        educationDetails={educationDetails}
      />
    </div>
  );
}

export default CVTemplate;
