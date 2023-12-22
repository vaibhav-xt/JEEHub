import React from 'react'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import Image from 'next/image'
import physicsLogo from '@/app/assets/physics-study.png'
import SubjectCard from '../components/Physics/SubjectCard'
import { physicsTopics } from '../store/physicsTopic'

export default function page() {
    return (
        <>
            {/* Header */}
            <Header />
            <main className='layout'>


                {/* Scroll to Top */}
                <ScrollTop />

                {/* Top Heading */}
                <div className='mt-32 flex flex-col gap-4'>
                    <Image src={physicsLogo} alt='physics' className='m-auto w-80' />
                    <h1 className='text-center text-4xl font-bold text-dark-purple'>Physics</h1>
                    <p className='text-center max-w-[900px] w-full mx-auto'>Welcome to the Physics Practice Zone, your dedicated space for chapter-wise practice questions to refine your understanding of crucial physics concepts for JEE Main & Advanced. Dive into targeted practice sessions, organized by topic, to reinforce your knowledge and ace your exams.</p>
                </div>

                {/* Subject */}
                <div className='my-20 flex flex-col gap-4'>
                    {
                        physicsTopics.map((topic, index) => <SubjectCard key={index} srno={index + 1} chapter={topic} />)
                    }
                </div>

            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}
