import React from 'react';

function Jobform({ jobRoles, handleJobChange, handleAddJob, handleRemoveJob, isMinimized, toggleMinimize }) {
  return (
    <form>
      {jobRoles.map((jobRole, index) => (
        <div key={index}>
          {!isMinimized && (
            <>
              <div>
                <label>Job:</label>
                <input
                  type="text"
                  name="job"
                  value={jobRole.job}
                  onChange={(event) => handleJobChange(index, event)}
                />
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={jobRole.date}
                  onChange={(event) => handleJobChange(index, event)}
                />
              </div>
            </>
          )}
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={jobRole.role}
              onChange={(event) => handleJobChange(index, event)}
            />
          </div>
          <button type="button" onClick={() => handleRemoveJob(index)}>
            Remove Job
          </button>
        </div>
      ))}
   
      <button type="button" onClick={toggleMinimize}>
        {isMinimized ? 'Expand' : 'Minimize'}
      </button>
      <button type="button" onClick={handleAddJob}>
        Add Job
      </button>
    </form>
  );
}

export default Jobform;
