import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.css';
import StatText from './StatText';

const Statistics = ({ project_views, project_appreciations, project_comments, profile_views }) => (
    <div className='column'>
        <hr />
        <StatText icon='eye' label='Project Views'>{ project_views }</StatText>
        <StatText icon='thumbs-up' label='Project Appreciations'>{ project_appreciations }</StatText>
        <StatText icon='comment' label='Project Comments'>{ project_comments }</StatText>
        <StatText icon='user' label='Profile Views'>{ profile_views }</StatText>
        <hr />
    </div>
);

Statistics.propTypes = {
    project_views: PropTypes.number,
    project_appreciations: PropTypes.number,
    project_comments: PropTypes.number,
    profile_views: PropTypes.number
}

export default Statistics;