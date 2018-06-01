import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StatText = ({ children, label, icon }) => (
    <div className='stat-text' title={label || 'Statistic information'}>
        { icon && <FontAwesomeIcon icon={icon} /> }
        { label && <span className='stat-text-label'> {label}: </span> }
        <span className='stat-text-value'>{children}</span>
    </div>
);

StatText.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    icon: PropTypes.string
}

StatText.defaultProps = {
    icon: '',
    label: ''
}

export default StatText;