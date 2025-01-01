import RightSection from '@/components/RightSection'
import ServicesIntro from '@/components/ServiceIntro'
import OurClients from '@/components/OurClients'
import LetsTalk from '@/components/LetsTalk'


import Link from 'next/link'

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}

      

      {/* Main Content */}
      <div className="flex-1">
        <div
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-brand-navy text-white px-8 py-16 gap-8"
        >
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center justify-center max-w-lg text-center md:text-right pr-5">
            <h1 className="text-6xl font-bold">We are Coulsource Digital</h1>
            <p className="mt-8 text-xl mb-10">
              A digital agency solving marketing problems in the digital spaces.
            </p>
            <Link href="/services">
              <button className="mt-6 px-16 py-4 bg-brand-orange text-white rounded-lg text-lg font-medium hover:bg-orange-600 transition">
                Services
              </button>
            </Link>
          </div>

          {/* Line Separator */}
          <div className="hidden md:block w-px bg-gray-400 h-48"></div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-center items-center max-w-lg pl-4">
            <RightSection></RightSection>
          </div>

          
           
          
        </div>

        <ServicesIntro></ServicesIntro>
        <OurClients></OurClients>
        <LetsTalk></LetsTalk>

       


       


      </div>
    </div>
    
  )
   
}
