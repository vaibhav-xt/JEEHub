import Image from "next/image";
import Header from "./components/Header";
import hero from './assets/hero.svg'
import upper from './assets/upperOverlay.svg'
import lower from './assets/lowerOverlay.svg'

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <Header />
      <main className="layout">

        {/* Hero Section */}
        <section className="mt-24 min-h-[calc(100vh-40vh)] md:min-h-[calc(100vh-20vh)] flex flex-col-reverse sm:flex-col gap-16 md:flex-row justify-center md:justify-between md:items-center">
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-dark-purple">Elevate Your Scores <br />
              with JEE Mastery <br />
              Quizzes</h1>

            <p className="my-4">Crack IIT JEE with dynamic quizzes. <br className="md:hidden" />  Play now for success!</p>

            <a href="/" className="bg-dark-purple text-white px-4 py-2  rounded-lg text-xl"> <i className="fa-solid fa-circle-play"></i> Play Now</a>
          </div>

          <Image src={hero} alt="hero image" className="md:w-[40%] hidden lg:block w-[350px] mx-auto " />
        </section>


        {/* Subject Based Practise  */}
        <section>
          <Image src={upper} alt="background overlay" className="absolute left-0 w-full" />
          <Image src={lower} alt="background overlay" className="absolute left-0 w-full" />
        </section>
      </main>
    </>
  )
}
