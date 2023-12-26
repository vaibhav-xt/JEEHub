import React from 'react'

export default function QuestionNumbers() {
    const arrayQusetion = new Array(30)

    return (
        <div className='w-[500px] p-4 h-[82.2vh] border border-light-purple'>
            <div className='flex flex-wrap justify-between gap-4'>
                <p className='flex items-center'><span className='grid place-content-center w-8 h-8 text-white rounded-md mr-4 bg-light-white'>2</span>Not Visited</p>
                <p className='flex items-center'><span className='grid place-content-center w-8 h-8 text-white rounded-md mr-4 bg-light-white'>0</span>Answerd</p>
                <p className='flex items-center'><span className='grid place-content-center w-8 h-8 text-white rounded-md mr-4 bg-light-white'>3</span>Not Answered</p>
            </div>

            <div className='flex mt-4 gap-2 flex-wrap'>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
                <div className='grid place-content-center w-8 h-8 bg-light-purple'>1</div>
            </div>
        </div>
    )
}
