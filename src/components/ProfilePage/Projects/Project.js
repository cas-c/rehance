import React from 'react';

const Project = ({ data }) => (
    <a href={data.url} target='_blank' title={data.name} >
        <div className='card'>
            <header className='card-header'>
                <p className='card-header-title'>
                    { data.name }
                </p>
            </header>
            <div className='card-image project-cover'>
                <figure className='image is-4by3'>
                    {
                        data.covers && <img className='project-cover-img' src={data.covers.original} alt={data.name} />
                    }
                </figure>
            </div>
        </div>
    </a>
);

export default Project;
