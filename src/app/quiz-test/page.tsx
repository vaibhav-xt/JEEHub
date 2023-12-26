import Link from 'next/link'
import React from 'react'
import QuestionDisplay from '../components/Quiz-Test/QuestionDisplay'
import QuestionNumbers from '../components/Quiz-Test/QuestionNumbers'

export default function page() {
    return (
        <main className='bg-white min-h-screen'>
            {/* Quiz Navbar */}
            <header className='p-4 flex justify-between gap-4 flex-wrap'>
                <div className='flex items-center gap-4'>
                    <span className='block w-16 h-16 rounded-full bg-light-white'></span>
                    <div>
                        <p><span className='font-light'>Candidate Name:</span> <span className='text-dark-purple font-bold'>Raj Agarwal</span></p>
                        <p><span className='font-light'>Subject Name:</span> <span className='text-dark-purple font-bold'>Physics</span></p>
                    </div>
                </div>

                <div className='flex gap-4 items-center flex-wrap'>
                    <button className='bg-dark-purple text-white px-4 py-1'>View all Question</button>
                    <div className='flex items-center gap-2'>
                        <span className='text-md'>Remaining Time: </span>
                        <span className='px-2 py-1 bg-red text-white rounded-full text-xl'>01:15:15</span>
                    </div>
                </div>
            </header>

            <div className='bg-dark-purple text-white flex gap-4 p-4 items-center flex-wrap'>
                <p className='font-bold text-xl'>Chemistry Quiz 26 Dec 2023</p>
                <Link href="/" className='bg-white text-dark-purple px-4 py-2 hover:bg-light-purple'>Chemistry</Link>
            </div>

            <div className='flex w-full'>
                <QuestionDisplay />
                <QuestionNumbers />
            </div>
        </main>
    )
}
