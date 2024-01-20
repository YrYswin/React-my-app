import React from 'react'
import { ways } from './Data'


function WayToTeach({ title, description }) {
    return (
        <li>
            <p>
                <strong>{title}</strong>{description}
            </p>
        </li>
    )
}

function TeachingSection() {
    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {ways.map(way => (
                    <WayToTeach {...way} key={way.title} />
                ))}
            </ul>
        </section>
    )
}

export default TeachingSection