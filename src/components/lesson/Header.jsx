import React, { useState } from 'react'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
        <div>
            <header>
                {/* <img src={Logo} alt='Logo' /> */}
                <h3>Result University</h3>

                <span>Время сейчас: {now.toLocaleString()}</span>
            </header>
        </div>
    )
}
