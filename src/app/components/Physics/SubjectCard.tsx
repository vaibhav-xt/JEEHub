'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface SubjectCardProps {
    srno: number;
    chapter: string;
}

export default function SubjectCard({ srno, chapter }: SubjectCardProps) {
    const arr = new Array(100).fill(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        return () => setToggle(false)
    }, [])

    return (
        <div className='max-w-[700px] w-full bg-white rounded-xl overflow-hidden border-b-2 border-dark-purple mx-auto shadow-xl'>

            <div className='w-full bg-dark-purple min-h-[50px] text-white flex p-4 rounded-b-xl shadow-2xl shadow-light-purple cursor-pointer border-b-white border-b-2' onClick={() => setToggle((prev) => prev ? false : true)}>
                <div className=' min-w-[50px] mx-auto text-center text-xs sm:text-lg'>{srno}.</div>
                <div className='w-[90%]'>
                    <p className='text-xs sm:text-lg'>{chapter}</p>

                    {/* Toggle Display */}
                    <div className={`ease-linear overflow-hidden ${toggle ? 'h-full' : "h-0"}`}>
                        <p className='text-xs my-2 font-light hidden md:block'>Measurement involves comparing a physical quantity to an internationally accepted reference standard (unit). Results are expressed as numbers accompanied by units. Units are categorized into fundamental (base) and derived units, forming a complete system.</p>
                        <div className='flex w-full gap-2 items-center mt-4'>
                            <p className='text-xs w-8'>25%</p>
                            <p className='w-[90%] h-4 bg-white rounded-xl border'>
                                <p className='bg-dark-purple w-[24%] rounded-xl h-full'></p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='min-w-[50px] mx-auto text-center '>
                    <i className={`${toggle ? "rotate-180" : "rotate-0"} fa-solid fa-angle-down`}></i>
                </div>
            </div>

            <div className={`overflow-hidden ${toggle ? 'h-full p-2 pl-4' : "h-0"} mx-auto flex flex-wrap gap-2 max-h-[200px] overflow-y-auto custom-scrollbar`}>
                {
                    arr.map((_, index) => <Blocks key={index} index={index + 1} toggleFlag={toggle} />)
                }
            </div>
        </div>
    )
}


const Blocks = ({ index, toggleFlag }: { index: number, toggleFlag: boolean }) => {
    return (
        <div>
            <Link href="/" className={`text-xs w-10 h-10 rounded-lg bg-dark-purple text-white flex justify-center items-center ${toggleFlag ? "rotate-0" : "rotate-90"}`}>{index}</Link>
        </div>
    )
}