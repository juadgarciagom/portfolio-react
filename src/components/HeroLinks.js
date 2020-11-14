import React from 'react'
import {GiMailbox} from 'react-icons/gi'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

export const HeroLinks = () => {
    return (
        <div className="hero-links">
            <a href="https://google.com.co" target="_blank"><GiMailbox /></a>
            <a href="https://google.com.co" target="_blank"><FiGithub /></a>
            <a href="https://google.com.co" target="_blank"><FaLinkedinIn /></a>
        </div>
    )
}
