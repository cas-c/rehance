import React from 'react';
import ProjectsColumn from './ProjectsColumn';
import Project from './Project';
import './Projects.css';

class Projects extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.projects[0] === undefined) return;
        if (prevProps.projects[0] === undefined || prevProps.projects[0].covers.original !== this.props.projects[0].covers.original) {
            this.props.setBackground(this.props.projects[0].covers.original);
        }
    }
    render() {
        return (
            <div>
                <div className='profile-page-header'>
                    <strong className='is-size-1'>Projects</strong>
                </div>
                <ProjectsColumn projects={this.props.projects} />
            </div>
        );
    }
}

Projects.defaultProps = {
    projects: []
}

export default Projects;
