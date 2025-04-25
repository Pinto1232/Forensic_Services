import { useState } from 'react'; // Removed explicit React import

const ForensicsContactSection = () => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null); // Added type annotation for state

  const services = [
    {
      name: 'Independent audit',
      details:
        'Our independent audit services provide a rigorous examination of your financial records to ensure accuracy, compliance with accounting standards, and transparency for stakeholders. We offer unbiased evaluations to build confidence in your financial reporting.',
    },
    {
      name: 'Independent Review',
      details:
        'An independent review offers a limited assurance engagement, providing a moderate level of confidence on your financial statements. We perform inquiries and analytical procedures to assess whether the information is plausible and reliable.',
    },
    {
      name: 'Investigations and queries',
      details:
        'We conduct thorough investigations into financial discrepancies, fraud allegations, and other irregularities. Our team assists with resolving complex queries and provides expert support for legal disputes and regulatory inquiries.',
    },
  ];

  const handleItemClick = (
    index: number
  ) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Forensics
            </h2>
            <ul>
              {services.map(
                (
                  service,
                  index: number
                ) => (
                  <li
                    key={index}
                    className="border-b border-gray-700 hover:border-gray-500 transition-colors duration-200 cursor-pointer"
                    onClick={() =>
                      handleItemClick(
                        index
                      )
                    }
                  >
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg">
                        {service.name}
                      </span>
                      <span
                        className={`text-gray-500 ml-4 transform transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`}
                      >
                        &rarr;
                      </span>
                    </div>

                    {openIndex ===
                      index && (
                      <div className="pb-4 text-gray-400 text-sm leading-relaxed">
                        {
                          service.details
                        }
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/banned.png"
              alt="Dart hitting a target"
              className="max-w-full h-130 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Contact our qualified
            consultants
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Discover how Latita Africa
            can assist you.
          </p>
          <button className="bg-[#c00000] hover:bg-[#a00000] text-white font-bold py-3 px-8 rounded-md transition-colors duration-200">
            Request a callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForensicsContactSection;
