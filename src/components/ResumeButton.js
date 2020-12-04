import React from 'react'
import { Button } from 'react-bootstrap'
import cv from '../assets/HVJuanGarcia.pdf'

export const ResumeButton = () => {
    return (
        <div className="resumeCV">
            <Button
            type="button"
            rel="noopener norefererr"
            target="_blank"
            href={cv}>Obten mi CV</Button>
        </div>
    )
}
