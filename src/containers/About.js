import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { AboutSkills } from '../components/AboutSkills'

export const About = () => {
    return (
        <div className="container title" id="aboutSection">
            <h1>About</h1>
            <div className="aboutSection">
                <AboutMe />
                <AboutSkills />

            </div>
        </div>
    )
}
