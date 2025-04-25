import { BiEnvelopeOpen } from 'react-icons/bi';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const companyMoreLinks = [
    {
      text: 'The Latita Team',
      href: '#',
    },
    { text: 'Partnerships', href: '#' },
    { text: 'Industries', href: '#' },
    { text: 'Events', href: '#' },
    {
      text: 'Press Releases',
      href: '#',
    },
  ];

  const companyLinks = [
    {
      text: 'Who Is Latita Africa',
      href: '#',
    },
    {
      text: 'Ubuntu Connect',
      href: '#',
    },
    { text: 'FAQ', href: '#' },
    {
      text: 'Podcasts & Interviews',
      href: '#',
    },
    { text: 'Careers', href: '#' },
  ];

  const servicesColumn1Links = [
    { text: 'Tax', href: '#' },
    { text: 'Advisory', href: '#' },
    {
      text: 'Business In Africa',
      href: '#',
    },
    {
      text: 'Corporate Tax',
      href: '#',
    },
    {
      text: 'Value Added Tax (VAT)',
      href: '#',
    },
  ];

  const servicesColumn2Links = [
    { text: 'Legal', href: '#' },
    {
      text: 'Risk Assurance',
      href: '#',
    },
    {
      text: 'Tax Debt And Dispute',
      href: '#',
    },
    {
      text: 'Individual Tax',
      href: '#',
    },
    {
      text: 'Crypto Asset Tax',
      href: '#',
    },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-12 md:pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        {/* Top section: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 pb-8">
          {/* Icon on top of text and centered on small screens */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
            {/* Icon div - added mb-2 for space below icon on small, adjusted md margins */}
            <div className="flex-shrink-0 text-[#c00000] mb-2 md:mr-3 md:mb-0">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            {/* Text content div */}
            <div>
              <h4 className="font-bold mb-1">
                Find us
              </h4>
              <p className="text-sm">
                The Woodlands Office
                Park
              </p>
            </div>
          </div>

          {/* Icon on top of text and centered on small screens */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
            {/* Icon div - added mb-2 for space below icon on small, adjusted md margins */}
            <div className="flex-shrink-0 text-[#c00000] mb-2 md:mr-3 md:mb-0">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            {/* Text content div */}
            <div>
              <h4 className="font-bold mb-1">
                Call us
              </h4>
              <p className="text-sm">
                086 152 8482
              </p>
            </div>
          </div>

          {/* Icon on top of text and centered on small screens */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
            {/* Icon div - added mb-2 for space below icon on small, adjusted md margins */}
            <div className="flex-shrink-0 text-[#c00000] mb-2 md:mr-3 md:mb-0">
              <BiEnvelopeOpen className="w-6 h-6" />
            </div>
            {/* Text content div */}
            <div>
              <h4 className="font-bold mb-1">
                Mail us
              </h4>
              <p className="text-sm">
                info@latitaafrica.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section: Logo, Socials, and Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-12">
          {/* Logo and Follow Us Section - Centers content on small screens already */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <div
                className="w-24 h-24 mb-6 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    "url('/LOGO.png')",
                }}
                aria-label="Latita Africa Logo"
              ></div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-3">
                Follow us
              </h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <div className="bg-[#c00000] p-1.5 rounded-full">
                    <FaFacebook className="w-5 h-5 text-white" />{' '}
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="Twitter (X)"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <div className="bg-[#c00000] p-1.5 rounded-full">
                    <FaXTwitter className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <div className="bg-[#c00000] p-1.5 rounded-full">
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <div className="bg-[#c00000] p-1.5 rounded-full">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {/* Company Section */}
            <div className="grid grid-cols-1 md:col-span-2">
              {/* Heading and Line - centered on small screens, left on md+ */}
              <div className="text-center md:text-left">
                <h4 className="font-bold mb-1">
                  Company
                </h4>
                {/* Short red line - centered on small, left on md+ */}
                <div className="h-1 w-16 bg-[#c00000] mx-auto md:mx-0"></div>
              </div>
              {/* Inner grid for Company links */}
              {/* Link lists text centered on small screens, left on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 md:text-left mt-2">
                {/* First Company Column - text centered on small */}
                <div className="text-center md:text-left">
                  <ul>
                    {companyLinks.map(
                      (link, index) => (
                        <li
                          key={index}
                          className="mb-2"
                        >
                          <a
                            href={
                              link.href
                            }
                            className="hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Second Company Column - text centered on small */}
                <div className="text-center md:text-left">
                  <ul>
                    {companyMoreLinks.map(
                      (link, index) => (
                        <li
                          key={index}
                          className="mb-2"
                        >
                          <a
                            href={
                              link.href
                            }
                            className="hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <div className="grid grid-cols-1 md:col-span-2">
              {/* Heading and Line - centered on small screens, left on md+ */}
              <div className="text-center md:text-left">
                <h4 className="font-bold mb-1">
                  Our Services
                </h4>
                {/* Short red line - centered on small, left on md+ */}
                <div className="h-1 w-16 bg-[#c00000] mx-auto md:mx-0"></div>
              </div>
              {/* Inner grid for Service links */}
              {/* Link lists text centered on small screens, left on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 md:text-left mt-2">
                {/* First Our Services Column (Tax, Advisory, etc.) - text centered on small */}
                <div className="text-center md:text-left">
                  <ul>
                    {servicesColumn1Links.map(
                      (link, index) => (
                        <li
                          key={index}
                          className="mb-2"
                        >
                          <a
                            href={
                              link.href
                            }
                            className="hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Second Our Services Column (Legal, Risk Assurance, etc.) - text centered on small */}
                {/* Added text-center to this div */}
                <div className="text-center md:text-left">
                  <ul>
                    {servicesColumn2Links.map(
                      (link, index) => (
                        <li
                          key={index}
                          className="mb-2"
                        >
                          <a
                            href={
                              link.href
                            }
                            className="hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Centered horizontally on all screen sizes */}
      {/* Removed ml-2 and added mx-auto */}
      <div
        className="bg-[#c00000] text-white py-4 flex items-center cursor-pointer mx-auto"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-6 mr-2 ml-1.3 mt-[-45px] bg-[#c00000] rounded-lg"
        >
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
