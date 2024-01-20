import React, { useState } from 'react'
import Header from '../lesson/Header'
import TeachingSection from './TeachingSection'
import ClickSection from './ClickSection'

import './App.css'


export default function App() {
    return (
        <div>
            <Header />
            <main>
                <TeachingSection />

                <ClickSection />
            </main>
        </div>
    )
}