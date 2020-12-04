import React from 'react'
import {GiMailbox} from 'react-icons/gi'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

export const HeroLinks = () => {
    return (
        <div className="hero-links">
            <a href="mailto:juadgarciagom@outlook.com" target="_blank"><GiMailbox /></a>
            <a href="https://github.com/juadgarciagom" target="_blank"><FiGithub /></a>
            <a href="https://linkedin.com/in/juan-david-garc%C3%ADa-g%C3%B3mez-0665a4151/" target="_blank"><FaLinkedinIn /></a>
        </div>
    )
}
