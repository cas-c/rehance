import React from 'react';

const Experience = ({ data }) => (
    <div>
        <hr />
        { data.position } at { data.organization } <br />
        { data.location }
    </div>
);


export default Experience;
