import React from 'react';
import Project from './Project';
import './Projects.css';

class Projects extends React.Component {
    componentDidUpdate(prevProps) {
        console.log(this.props.projects);
        if (this.props.projects[0] === undefined) return;
        console.log('not undefined');
        if (prevProps.projects[0] === undefined || prevProps.projects[0].covers.original !== this.props.projects[0].covers.original) {
            console.log('new');
            this.props.setBackground(this.props.projects[0].covers.original);
            console.log('setting bg?');
        }
    }
    render() {
        return (
            <div>
                <div className='profile-page-header'>
                    <strong className='is-size-1'>Projects</strong>
                </div>
                <div className='columns'>
                    {
                        this.props.projects.length > 0 ?
                            this.props.projects.slice(0, 5).map((p, i) =>
                                <div className='column' key={`project-${i}-wrapper`}>
                                    <Project data={p} key={`project-${i}`}/>
                                </div>
                            ) :
                            <div className='has-text-centered'> This user does not have any projects. </div>
                    }
                </div>
                { this.props.projects.length > 5 && <div className='has-text-right'><a>View all...</a></div> }
            </div>
        );
    }
}

Projects.defaultProps = {
    projects: []
}

export default Projects;
