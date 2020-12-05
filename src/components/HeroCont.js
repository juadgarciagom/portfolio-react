import React from 'react'
import { HeroLinks } from './HeroLinks'

export const HeroCont = () => {
    return (
        <div className="heroCont">
            <h1>Desarrollo Web</h1> 
            
            <p>Bienvenido!!. En este espacio podrás aprender un poco sobre mi, mis proyectos realizados, tecnologías aprendidas, mi hoja de vida
                y contactarme para poder ayudarte a hacer realidad tus proyectos!!.
            </p>
            <HeroLinks />
        </div>
    )
}
