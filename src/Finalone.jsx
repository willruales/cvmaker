import React from 'react';

function FinalOne({ name, dob, email, jobRoles, educationDetails }) {
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
        {jobRoles.map((jobRole, index) => (
          <div key={index}>
            <p><strong>Job:</strong> {jobRole.job}</p>
            <p><strong>Date:</strong> {jobRole.date}</p>
            <p><strong>Role:</strong> {jobRole.role}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Education</h3>
        {educationDetails.map((education, index) => (
          <div key={index}>
            <p><strong>Institution:</strong> {education.institution}</p>
            <p><strong>Degree:</strong> {education.degree}</p>
            <p><strong>Start Date:</strong> {education.startDate}</p>
            <p><strong>End Date:</strong> {education.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinalOne;
