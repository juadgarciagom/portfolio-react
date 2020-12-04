import React from 'react'
import { ContactInputs } from '../components/ContactInputs'
import { ContactTitle } from '../components/ContactTitle'

export const Contact = () => {
    return (
        <div className="sectionBack" id="contactSection">
            <ContactTitle />
            <ContactInputs />
        </div>
    )
}
