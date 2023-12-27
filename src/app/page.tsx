'use client'
import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import hero from './assets/hero.svg'
import upper from './assets/upperOverlay.svg'
import lower from './assets/lowerOverlay.svg'
import maths from '@/app/assets/maths-logo.svg'
import physics from '@/app/assets/physics-logo.svg'
import chemistry from '@/app/assets/chemistry-logo.svg'
import progress from '@/app/assets/student-progress.png'
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import QuizInstruction from "./components/QuizInstruction";

export default function Home() {
  const [rulesDisplayFlag, setRulesDisplayFlag] = useState(false)

  return (
    <>

      {/* Home Page */}
      <Header />
      <QuizInstruction rulesDisplay={rulesDisplayFlag} setRulesDisplay={setRulesDisplayFlag} />
      <main className="overflow-hidden">
        {/* Top to Scroll */}
        <ScrollTop />

        {/* Hero Section */}
        <section className="layout">
          <div className="mt-24 min-h-[calc(100vh-40vh)] md:min-h-[600px] flex flex-col-reverse sm:flex-col gap-16 md:flex-row justify-center md:justify-between md:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-dark-purple">Elevate Your Scores <br />
                with JEE Mastery <br />
                Quizzes</h1>

              <p className="my-4">Crack IIT JEE with dynamic quizzes. <br className="md:hidden" />  Play now for success!</p>

              <a href="/" className="bg-dark-purple text-white px-4 py-2  rounded-lg text-xl shadow-dark-purple shadow-md"> <i className="fa-solid fa-circle-play"></i> Play Now</a>
            </div>

            <Image src={hero} alt="hero image" className="md:w-[40%] hidden md:block w-[340px] mx-auto " />
          </div>
        </section>


        {/* Subject Based Practise  */}
        <Image src={upper} alt="background overlay" className="w-full scale-150" />
        <section className="bg-dark-purple py-16">
          <div className="layout bg-dark-purple text-white flex flex-col gap-16 xl:gap-4 justify-around lg:flex-row">
            <div className="lg:w-1/2 xl:w-auto">
              <h3 className="text-3xl pb-4 font-bold text-center xl:text-start">Subject Based Quizzes</h3>
              <div className="flex flex-row gap-4 xl:flex-col justify-center flex-wrap">

                <div className="max-w-[320px] w-full bg-white rounded-xl text-dark-purple flex justify-around items-center shadow-light-purple shadow-md">
                  <Image src={physics} alt="physics" className="w-1/3" />
                  <div className="w-1/2 relative">
                    <p className="text-xl font-bold">Physics</p>
                    <button className="absolute right-0 -bottom-8 hover:underline" onClick={() => setRulesDisplayFlag(true)}>click here {">>"}</button>
                  </div>
                </div>

                <div className="max-w-[320px] w-full bg-white rounded-xl text-dark-purple flex justify-around items-center shadow-light-purple shadow-md">
                  <Image src={chemistry} alt="chemistry" className="w-1/3" />
                  <div className="w-1/2 relative">
                    <p className="text-xl font-bold">Chemistry</p>
                    <button className="absolute right-0 -bottom-8 hover:underline" onClick={() => setRulesDisplayFlag(true)}>click here {">>"}</button>
                  </div>
                </div>

                <div className="max-w-[320px] w-full bg-white rounded-xl text-dark-purple flex justify-around items-center shadow-light-purple shadow-md">
                  <Image src={maths} alt="maths" className="w-1/3" />
                  <div className="w-1/2 relative">
                    <p className="text-xl font-bold">Maths</p>
                    <button className="absolute right-0 -bottom-8 hover:underline" onClick={() => setRulesDisplayFlag(true)}>click here {">>"}</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-center">Why Choose Us?</h3>
              <ul className="rounded-xl flex flex-col text-white gap-4 max-w-[600px] w-full m-auto text-sm md:text-md">
                <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4 shadow-light-purple shadow-md">Dynamic quizzes aligned with the latest exam patterns.</li>
                <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4 shadow-light-purple shadow-md">Compete with others to enhance your competitive edge.</li>
                <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4 shadow-light-purple shadow-md">Master concepts through interactive learning.</li>
                <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4 shadow-light-purple shadow-md">Personalized feedback to enhance your strengths.</li>
                <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4 shadow-light-purple shadow-md">Track your progress and boost your confidence.</li>
                {/* <li className="border-b-2 bg-white text-dark-purple rounded-lg p-4">Convenient, accessible, and designed for your success.</li> */}
              </ul>
            </div>

          </div>
        </section>
        <Image src={lower} alt="background overlay" className="w-full  scale-150" />

        {/* Progess Section  */}
        <section className="layout">
          <div className="flex flex-col gap-8 md:flex-row items-center justify-around my-32">
            <Image src={progress} alt="progress" className="max-w-[500px] w-full m-auto md:w-1/2" />
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-dark-purple">Performance Analysis</h3>
              <p className="pt-2">Pinpoint weaknesses effortlessly. Receive personalized insights to enhance your preparation. Elevate your understanding for targeted success in your exams.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
