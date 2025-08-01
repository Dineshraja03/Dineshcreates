
const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your idea to life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Let's build something amazing together!</p>
        
        <a 
          href="https://www.instagram.com/_dinesh_raja__/" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-primary font-bold rounded-md shadow-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CTASection;
