import React from 'react';
import PropTypes from 'prop-types';
import MiniProfileList from './MiniProfileList';

const MiniProfilesColumn = ({ label, data, emptyString }) => (
    <div className='column'>
        <div className='is-size-3 profile-page-header'>
            { label }
        </div>
        {
            data.length > 0 ?
                <MiniProfileList users={data} /> :
                <div className='has-text-centered'>{ emptyString }</div>
        }
        { data.length > 5 && <div className='has-text-right'><a>View all...</a></div> }
    </div>
);

MiniProfilesColumn.propTypes = {
    label: PropTypes.string,
    emptyString: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
};

MiniProfilesColumn.defaultProps = {
    label: '',
    emptyString: 'Nothing to display.',
    data: []
};

export default MiniProfilesColumn;