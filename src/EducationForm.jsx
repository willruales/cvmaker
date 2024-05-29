import React from 'react';

function EducationForm({ educationDetails, handleEducationChange, handleAddEducation, handleRemoveEducation, isMinimized, toggleMinimize }) {
  return (
    <div>
      <button type="button" onClick={toggleMinimize}>
        {isMinimized ? 'Expand Education Form' : 'Minimize Education Form'}
      </button>
      {!isMinimized && (
        <>
          {educationDetails.map((education, index) => (
            <div key={index}>
              <label>School:</label>
              <input
                type="text"
                name="school"
                value={education.school}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label>Qualification/Grade:</label>
              <input
                type="text"
                name="qualgrade"
                value={education.qualgrade}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <button type="button" onClick={() => handleRemoveEducation(index)}>Remove Education</button>
            </div>
          ))}
          <button type="button" onClick={handleAddEducation}>Add Education</button>
        </>
      )}
    </div>
  );
}

export default EducationForm;
