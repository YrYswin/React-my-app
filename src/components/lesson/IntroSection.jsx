import React from 'react'

// function IntroSection() {
//    return (
//       <section>
//          <h1 className='centered'>Result University</h1>
//          <h2 className='centered' style={{ color: '#EEE' }}>
//             Раздел для личных сообщений и писем, которые не попали в другие категории.
//          </h2>
//       </section>
//    )
// }

// export default IntroSection


export default function IntroSection() {
   return React.createElement('section', null,
      [React.createElement('h1', { className: 'centered' }, 'Result University'),
      React.createElement('h3', { className: 'centered', style: { color: '#EEE' } }, 'Раздел для личных сообщений и писем, которые не попали в другие категории.')],
   )
}