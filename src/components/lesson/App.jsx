import React, { useState } from 'react'
import Header from './Header/Header'
import TeachingSection from './TeachingSection'
import ClickSection from './ClickSection'
import IntroSection from './IntroSection'
import TabsSection from './TabsSection'

import './App.css'
import FeedbackSection from './FeedbackSection'

export default function App() {
   const [tab, setTab] = useState('feedback')

   return (
      <>
         <Header />
         <main>
            <IntroSection />

            <TabsSection active={tab} onChange={(current) => setTab(current)} />

            {tab === 'main' && <>
               <TeachingSection />
               <ClickSection />
            </>}

            {tab === 'feedback' && <>
               <FeedbackSection />
            </>}

         </main>
      </>
   )
}