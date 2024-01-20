import React from 'react'

export default function Wrapper({ children, color }) {
    const style = {
        color: color,
        width: '1200px',
        padding: '20px',
        margin: '20px auto',
    }

    return (
        <div style={style}>
            <header>Logo conatct about</header>
            {children}
            <footer>Footer contact about</footer>
        </div>
    )
}