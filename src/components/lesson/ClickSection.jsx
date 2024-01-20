import React, { useState } from 'react'
import Button from './Button/Button'

function ClickSection({ handleClick }) {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        console.log(type)
        setContentType(type)
    }

    return (
        <section>
            <Button
                onClick={() => handleClick('way')}
                isActive={contentType === 'way'}
            >
                Enter
            </Button>
            <Button
                onClick={() => handleClick('easy')}
                isActive={contentType === 'easy'}
            >
                Pound
            </Button>
            <Button
                onClick={() => handleClick('program')}
                isActive={contentType === 'program'}
            >
                Clean
            </Button>

            {contentType && <p>{contentType}</p>}
            {!contentType && <p>Нажми на кнопку</p>}

        </section>
    )
}

export default ClickSection