"use client";
import AnimatedIcon from "@/components/AnimatedIcon";





export default function ServicesPage() {
  return (

   
    <div className="min-h-screen bg-gradient-to-r from-brand-navy to-gray-900 text-white">
     
     {/*navbar already implemented in the root */}

      {/* Header Section */}
      <header className="py-16 text-center">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg">We help you make the first step make your business grow.
          We priotize on providing a complete service, taking advantages and on tasking a real web-app 
          for your costumers
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
        {/* Service 1 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
         <AnimatedIcon animationPath="/animations/web-development.json" />
          <h3 className="text-xl font-bold mt-4">Full Stack Web Development</h3>
          <p className="text-gray-300 mt-2">
            Building responsive and modern websites tailored to your business needs.
          </p>
        </div>
        {/* Add more service cards here */}


        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <AnimatedIcon animationPath="/animations/marketing.json" />
          <h3 className="text-xl font-bold mt-4">Web Development</h3>
          <p className="text-gray-300 mt-2">
            Building responsive and modern websites tailored to your business needs.
          </p>
        </div>




        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <AnimatedIcon animationPath="/animations/data.json" />
          <h3 className="text-xl font-bold mt-4">Web Development</h3>
          <p className="text-gray-300 mt-2">
            Building responsive and modern websites tailored to your business needs.
          </p>
        </div>

        {/*footer already implemented */}

      </section>
    </div>
  );
}
