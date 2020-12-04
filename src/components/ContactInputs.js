import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Button, Form } from 'react-bootstrap'

export const ContactInputs = () => {

    const [loading, setLoading] = useState(false);

    const name = useRef()
    const email = useRef()
    const message = useRef()

    const sendMail = (e) => {
        e.preventDefault()
        setLoading(true)
        const parametros = {
            message: message.current.value,
            name: name.current.value,
            email: email.current.value,
        }
        emailjs.send("service_zchn7dl","template_mhczhjr", parametros, 'user_Ijqf6DcNUS1nwcSCBwyQ6')
                .then(() => {
                    alert('Mensaje enviado correctamente');
                    setLoading(false)
                })
    }

    return (
        <div className="inputsContact">

            <div className="container">

                <Form onSubmit={sendMail}>
                    <input className="inputName"
                        typeof="text"
                        placeholder="Tu nombre"
                        ref={name}
                        name="name"
                    />

                    <input className="inputMail"
                        typeof="text"
                        ref={email}
                        placeholder="Tu correo"
                        name="email"
                    />

                    <textarea placeholder="Mensaje"
                        typeof="text"
                        ref={message}
                        name="message"
                    />

                    <Button className="submitButton"
                            type="submit"
                            onSubmit={sendMail}
                            disabled={loading}>Enviar</Button>
                </Form>

            </div>

        </div>
    )
}
