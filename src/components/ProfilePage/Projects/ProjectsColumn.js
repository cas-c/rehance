import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

//todo: Can probably make 'Column' a more generic component (see MiniProfilesColumn)

const ProjectsColumn = ({ projects }) => (
    <div>
        <div className='columns'>
            {
                projects.length > 0 ?
                    projects.slice(0, 5).map((p, i) =>
                        <div className='column' key={`project-${i}-wrapper`}>
                            <Project data={p} key={`project-${i}`}/>
                        </div>
                    ) :
                    <div className='has-text-centered'> This user does not have any projects. </div>
            }
        </div>
        { projects.length > 5 && <div className='has-text-right'><a>View all...</a></div> }
    </div>
);

ProjectsColumn.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

ProjectsColumn.defaultProps = {
    projects: []
};

export default ProjectsColumn;
