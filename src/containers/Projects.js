import React from 'react'
import { ProjectsCard } from '../components/ProjectsCard'
import { ProjectTitle } from '../components/ProjectTitle'

export const Projects = () => {
    return (
        <div className="sectionBack">
            <ProjectTitle />
            <ProjectsCard />
        </div>
    )
}
