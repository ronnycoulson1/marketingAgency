{/**wHAT WE DO */}

export default function ServicesIntro() {
    const services = [
      {
        title: "Web Development",
        description:
          "We build modern and responsive websites tailored to your business needs.",
          icon: "/icons/web.png", // Optional icon
        },
      {
        title: "Digital Marketing",
        description:
          "We help you reach your target audience with effective marketing strategies.",
        icon: "/icons/ads.png", // Optional icon
      },
      {
        title: "Data Analytics",
        description:
          "Transform your data into actionable insights for better decision-making.",
        icon: "/icons/chart.png", // Optional icon
      },
      {
        title: "SEO Optimization",
        description:
          "Improve your website's visibility on search engines and drive more traffic.",
        icon: "/icons/target.png", // Optional icon
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-5xl font-bold mb-6 text-gray-900">What We Do</h2>
          <p className="text-xl mb-12">
            We specialize in providing top-notch services to help your business thrive in the digital era.
          </p>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition transform duration-300"
              >
                {/* Icon */}


                {service.icon && (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mx-auto mb-6"
                  />
                )}
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-brand-orange">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  