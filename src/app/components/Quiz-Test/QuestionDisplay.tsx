import React from 'react'

export default function QuestionDisplay() {
    return (
        <>
            <div className='select-none h-[67.9vh] w-full'>
                <div className='font-bold py-4 px-2 bg-none border-b border-light-purple text-xl'>Question 1</div>
                <div className='text-lg p-8 overflow-y-auto custom-scrollbar h-full relative'>
                    {/* Problem Statement */}
                    <div>2+2=?</div>
                    <div className='p-4'>
                        <p className='flex gap-2'>
                            <input type="radio" name="option" id="A" />
                            <label htmlFor="A">2</label>
                        </p>
                        <p className='flex gap-2'>
                            <input type="radio" name="option" id="B" />
                            <label htmlFor="B">4</label>
                        </p>
                        <p className='flex gap-2'>
                            <input type="radio" name="option" id="B" />
                            <label htmlFor="B">5</label>
                        </p>
                        <p className='flex gap-2'>
                            <input type="radio" name="option" id="C" />
                            <label htmlFor="C">0</label>
                        </p>
                    </div>
                    <div className='text-white flex gap-4  absolute bottom-0 py-8'>
                        <button className='px-4 py-2 bg-light-green'>Save & Next</button>
                        <button className='px-4 py-2 bg-light-purple hover:bg-dark-purple'>Clear Response</button>
                    </div>
                </div>
                <div className='bg-light-purple flex gap-4 justify-between items-center p-4'>
                    <div className='flex gap-4'>
                        <button className='border bg-white border-dark-purple text-dark-purple px-4 py-2 hover:bg-dark-purple hover:text-white'>Back</button>
                        <button className='border bg-white border-dark-purple text-dark-purple px-4 py-2 hover:bg-dark-purple hover:text-white'>Next</button>
                    </div>

                    <button className='bg-light-green py-2 px-4 border border-light-purple text-white'>Submit</button>
                </div>
            </div>
        </>
    )
}
