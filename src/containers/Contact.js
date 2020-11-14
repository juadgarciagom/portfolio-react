import React from 'react'
import { ContactText } from '../components/ContactText'
import { ContactTitle } from '../components/ContactTitle'

export const Contact = () => {
    return (
        <div className="sectionBack">
            <ContactTitle />
            <ContactText />
        </div>
    )
}
