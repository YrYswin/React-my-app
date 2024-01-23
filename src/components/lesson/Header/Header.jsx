import React, { useState } from 'react'
import './Header.css'

export default function Header() {
   // const [now, setNow] = useState(new Date())

   // setInterval(() => setNow(new Date()), 1000)

   return (
      <div>
         <header>
            <h3>Result University</h3>

            {/* <span>Время сейчас: {now.toLocaleString()}</span> */}
         </header>
      </div>
   )
}
