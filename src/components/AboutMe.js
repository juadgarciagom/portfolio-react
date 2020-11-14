import React from 'react'
import { ResumeButton } from './ResumeButton'

export const AboutMe = () => {
    return (
        <div className="aboutText">
            <h3>Juan David Garcia</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book.</p>
            <ResumeButton />
        </div>
    )
}
