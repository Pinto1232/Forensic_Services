const ContactSection = () => {
  return (
    <section className="bg-white py-8 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Contact Us Today
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              to schedule a consultation
              and let us make your
              <br />
              life a bit more easier.
            </p>
            <button className="bg-[#c00000] hover:bg-[#a00000] text-white font-bold py-3 px-8 rounded">
              Contact Us
            </button>
          </div>
          <div className="text-[#c00000] text-xl md:text-3xl font-bold leading-relaxed">
            Ensuring your organisation
            <br />
            maintains Integrity and
            <br />
            transparency in all
            financial
            <br />
            matters.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
