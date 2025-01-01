export default function OurClients() {
    const clients = [
      { name: "Unique Home Solutions", logo: "/clients/unique.png" },
     /* { name: "Client 2", logo: "/icons/client2.png" },*/
      /*{ name: "Client 3", logo: "/icons/client3.png" },*/
     /* { name: "Client 4", logo: "/icons/client4.png" },*/
    ];
  
    return (
      <section className="py-16 bg-brand-white bg-white text-center">
        <h2 className="text-4xl font-bold text-brand-navy mb-8">Our Clients</h2>
        <p className="text-lg text-gray-700 mb-12">
          We are working with amazing clients.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <p className="text-brand-navy font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  