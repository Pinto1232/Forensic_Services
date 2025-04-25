import React from 'react';
import { FaHome } from 'react-icons/fa';

export const HeaderBanner = () => {
  const services = [
    'Tax',
    'Legal',
    'Advisory',
    'Risk Assurance',
    'Tax Debt Specialists',
  ];
  const breadcrumbItems = [
    {
      label: 'Home',
      href: '#',
      isHome: true,
    },
    {
      label: 'Services',
      href: '#forensic-tax-services',
    },
    {
      label: 'Business in Africa',
      href: '#business-in-africa',
    },
    {
      label: 'Business formation',
      href: '#',
    },
    {
      label:
        'Expanding your global footprint in Africa',
      href: '#',
    },
  ];

  return (
    <div className="relative">
      <div
        className="relative flex bg-black px-4 py-32 h-[50vh] min-h-[700px]"
        style={{
          backgroundImage:
            "url('/banned.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-2xl flex items-center justify-center"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 container mx-auto space-y-6 z-20 pb-16">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Forensic Services
          </h1>

          <div className="flex items-center flex-wrap">
            <div className="mx-2 font-bold text-red-600">
              |
            </div>

            {services.map(
              (service, index) => (
                <React.Fragment
                  key={service}
                >
                  {index > 0 && (
                    <div className="mx-2 font-bold text-white">
                      |
                    </div>
                  )}

                  <span className="text-white text-lg md:text-2xl">
                    {service}
                  </span>
                </React.Fragment>
              )
            )}
          </div>

          <div className="mt-10">
            <button className="bg-red-600 text-white rounded-lg px-6 py-2 text-lg font-medium hover:bg-red-700 transition-colors border border-white">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-500 text-lg">
            {breadcrumbItems.map(
              (item, index) => (
                <React.Fragment
                  key={item.label}
                >
                  {index > 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    className="flex items-center hover:text-gray-700 transition-colors"
                  >
                    {item.isHome && (
                      <FaHome className="h-4 w-4 mr-1 flex-shrink-0" />
                    )}
                    {item.label}
                  </a>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBanner;
