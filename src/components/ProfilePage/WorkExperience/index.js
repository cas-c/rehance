import React from 'react';
import Experience from './Experience';
import './WorkExperience.css';

const WorkExperience = ({ experience }) => (
    <div className='work-experience'>
        <strong>Work Experience</strong>
        {
            experience.length > 0 ?
                experience.map((ex, i) => <Experience data={ex} key={`ex-${i}`}/>) :
                <div><span>This user nas not added any work experience information.</span></div>
        }
    </div>
);

WorkExperience.defaultProps = {
    experience: []
}

export default WorkExperience;
