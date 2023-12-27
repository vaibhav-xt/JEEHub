'use client'
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface QuizInstructionProps {
    rulesDisplay: boolean;
    setRulesDisplay?: Dispatch<SetStateAction<boolean>>;
}

export default function QuizInstruction({ rulesDisplay, setRulesDisplay }: QuizInstructionProps) {

    useEffect(() => {
        // Check if setRulesDisplay is defined before using it
        if (setRulesDisplay) {
            return () => setRulesDisplay(false);
        }
    }, []);


    return (
        <div className={`fixed top-0 ${rulesDisplay ? 'right-0' : '-right-full'} w-full h-full bg-black z-50`}>
            <div className='bg-light-purple p-4 md:p-8 w-full h-full md:ml-[10%] md:w-[90%] overflow-auto custom-scrollbar'>
                <h4 className='text-xl font-bold'>Instruction</h4>
                <h5 className='text-md font-bold pt-4'>Please read the instruction carefully</h5>
                <p>General Instruction</p>

                <ul className='list-decimal p-8 text-sm flex flex-col gap-2'>
                    <li>Total duration of examination will be displayed as clock.</li>
                    <li>The clock will be set at the server. The countdown timer in the top right corner of screen will
                        display the remaining time available for you to complete the examination. When the timer reaches
                        zero, the examination will end by itself. You will not be required to end or submit your examination in that case.
                    </li>
                    <li>The Question Palette displayed on the right side of screen will show the status of each question
                        using one of the following symbols:</li>

                    <ul className="flex flex-col gap-2 p-4">
                        <li className='flex gap-2 items-center'><span className="grid place-content-center w-8 h-8 bg-light-white text-white rounded-md not-visited">1</span>{"\"Not Visited\""}- You have not visited the question yet.</li>
                        <li className='flex gap-2 items-center'><span className="grid place-content-center w-8 h-8 bg-orange rounded-md text-white not-answered">2</span>{"\"Not Answered\""} - You have not answered the question.</li>
                        <li className='flex gap-2 items-center'><span className="grid place-content-center w-8 h-8 bg-light-green rounded-md text-white answered">3</span>{"\"Answered\""} - You have answered the question.</li>
                        {/* <li className='flex gap-4'><span className="marked">4</span>{"\"Marked for Review\""} - You have NOT answered the question, but have marked the question for review.</li>
                        <li className='flex gap-4'><span className="answered-marked">5</span>{" \"Answered and Marked for Review\""}- The question(s) {"Answered and Marked for Review"} will be considered for evaluation.</li> */}
                        <li>The Marked for Review status for a question simply indicates that you
                            would like to look at that question again.</li>
                    </ul>


                    <p className='text-md font-bold pt-4 relative list-none'>Navigating to a Questions:</p>

                    <li className=''>To answer a question, do the following:</li>

                    <ul className='list-decimal p-4 flex flex-col gap-2'>
                        <li>Click on the question number in the Question Palette at the right of your screen to go
                            to that numbered question directly. Note that using this option does NOT save your
                            answer to the current question.
                        </li>
                        <li>Click on <span className='font-bold'>Next</span> to save your answer for the current question and then go
                            to the next question.
                        </li>
                        {/* <li>Click on <span className='font-bold'>Mark for Review and then on Next</span> to save your answer for the
                            current question, mark it for review, and then go to the next question.
                        </li> */}
                    </ul>
                    <p className='list-none font-bold '>
                        Answering Question:
                    </p>
                    <li>Procedure for answering a multiple choice type question:</li>
                    <ul className='p-4 flex flex-col gap-2 list-decimal'>
                        <li>To select your answer, click on the button of one of the options</li>
                        <li>To deselect your chosen answer, click on the button of the chosen option again or click on the <span className='font-bold'>Reset Answer</span>button.</li>
                        <li>To change your chosen answer, click on the button of another option</li>
                        <li>To save your answer, you MUST click on the <span className="font-bold">Next</span> button.</li>
                    </ul>

                    <li>Sections in this question paper are displayed on the top bar of the screen. Questions in a
                        section can be viewed by clicking on the section name. The section you are currently viewing is
                        highlighted.
                    </li>
                    <li>
                        You can shuffle between sections and questions anytime during the examination as per your
                        convenience only during the time stipulated.
                    </li>
                    <li>
                        Candidate can view the corresponding sections marking scheme as part of the legend that appears
                        in every section above the question palette.
                    </li>
                </ul>
                <div className='flex gap-4'>
                    <Link href="quiz-test" className='px-4 py-2 bg-dark-purple text-white border-2 border-dark-purple hover:bg-light-purple hover:text-dark-purple'>Start</Link>
                    <button className='px-4 py-2 bg-dark-purple text-white border-2 border-dark-purple hover:bg-light-purple hover:text-dark-purple' onClick={() => setRulesDisplay(false)}>Cancel</button>
                </div>
            </div>

        </div >
    )
}
