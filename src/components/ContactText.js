import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { ContactInputs } from './ContactInputs'

export const ContactText = () => {
    return (
        <div className="container">
            <Form>
                <ContactInputs />
                <textarea placeholder="Mensaje"></textarea>
                <Button className="submitButton">Enviar</Button>
            </Form>
        </div>
    )
}
