import React from 'react';

function Jobform({ jobRoles, handleJobChange, handleAddJob, handleRemoveJob, isMinimized, toggleMinimize }) {
  return (
    <div>
      <button type="button" onClick={toggleMinimize}>
        {isMinimized ? 'Expand Job Form' : 'Minimize Job Form'}
      </button>
      {!isMinimized && (
        <>
          {jobRoles.map((jobRole, index) => (
            <div key={index}>
              <label>Job:</label>
              <input
                type="text"
                name="job"
                value={jobRole.job}
                onChange={(e) => handleJobChange(index, e)}
              />
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={jobRole.date}
                onChange={(e) => handleJobChange(index, e)}
              />
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={jobRole.role}
                onChange={(e) => handleJobChange(index, e)}
              />
              <button type="button" onClick={() => handleRemoveJob(index)}>Remove Job</button>
            </div>
          ))}
          <button type="button" onClick={handleAddJob}>Add Job</button>
        </>
      )}
    </div>
  );
}

export default Jobform;
