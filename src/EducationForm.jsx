import React from 'react';

function EducationForm({ educationDetails, handleEducationChange, handleAddEducation, handleRemoveEducation, isMinimized, toggleMinimize }) {
  return (
    <form>
      {educationDetails.map((education, index) => (
        <div key={index}>
          {!isMinimized && (
            <>
              <div>
                <label>School:</label>
                <input
                  type="text"
                  name="institution"
                  value={education.institution}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
              <div>
                <label>Qualification:</label>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
              <div>
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={education.startDate}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
              <div>
                <label>End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  value={education.endDate}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
            </>
          )}
          <button type="button" onClick={() => handleRemoveEducation(index)}>
            Remove Education
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
      <button type="button" onClick={toggleMinimize}>
        {isMinimized ? 'Expand' : 'Minimize'}
      </button>
    </form>
  );
}

export default EducationForm;
