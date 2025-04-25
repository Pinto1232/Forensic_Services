const ForensicTaxServices = () => {
  const services = [
    {
      number: '1.',
      title: 'Independent Audit',
      description:
        'We conduct independent audits to provide an unbiased evaluation of your financial statements, ensuring accuracy and compliance with South African accounting standards.',
    },
    {
      number: '2.',
      title: 'Independent Review',
      description:
        'Our independent reviews offer a limited assurance engagement, assessing your financial information to confirm its credibility and reliability for stakeholders.',
    },
    {
      number: '3.',
      title:
        'Investigations and Queries',
      description:
        'We ensure your trust meets all SARS tax requirements, including preparation and submission of trust tax returns, minimising risks and ensuring compliance.',
    },
    {
      number: '4.',
      title: 'Estate Planning',
      description:
        'Incorporating trusts into your estate planning can provide tax efficiency and asset protection. We offer strategic advice to optimise your estate plan.',
    },
    {
      number: '5.',
      title: 'Trust Restructuring',
      description:
        'We help restructure trusts to align with changing legal, tax, or financial circumstances, ensuring your trust remains effective and compliant.',
    },
    {
      number: '6.',
      title:
        'Wealth Protection and Asset Preservation',
      description:
        'Trusts are ideal for safeguarding wealth. We provide expert advice on how to structure trusts for maximum protection and preservation of assets.',
    },
  ];

  return (
    <section
      id="forensic-tax-services"
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#c00000]">
          Forensic Tax Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(
            (service, index) => {
              const isSpecifiedSection =
                index === 0 ||
                index === 2 ||
                index === 4;

              const numberColorClass =
                isSpecifiedSection
                  ? 'text-black'
                  : 'text-red-700';
              const textColorClass =
                isSpecifiedSection
                  ? 'text-black'
                  : 'text-[#c00000]';

              return (
                <div
                  key={index}
                  className=" p-12 border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-3">
                    <span
                      className={`${numberColorClass} mr-2`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={
                        textColorClass
                      }
                    >
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {
                      service.description
                    }
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ForensicTaxServices;
