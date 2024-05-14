import React from 'react';
import CVTemplate from './src/App';

function FinalOne({ name, dob, email, education, workExperience }) {
    return (
        <div className="FinalCV">
            <h2>CV</h2>
            <div>
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Date of Birth:</strong> {dob}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>


        </div>
    );
}

export default FinalOne;
