

const About = () => {

  const handleConnect = () => {
    const phoneNumber = "917999356540";
    const message = "Hello! I'd like to connect with you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="about mt-12 md:py-20">
    <div className="max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="font-semibold text-2xl md:text-3xl">.../About me</h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            Passionate MERN Stack Developer | Expert in modern web development with a flair for innovative website design. Proficient in HTML, CSS, React, Nodejs, ExpressJs and adept at crafting seamless user experiences.
          </p>
          
          <div className="mt-8">
            <div className="p-4 rounded-lg bg-[#1a1a1a] border border-[#f5f5f5]/10">
              <h4 className="font-medium">Sagar Institute of Research Technology & Science</h4>
              <p className="text-gray-400 mt-2">B.Tech in Computer Science</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2 bg-[#f5f5f5] text-[#121212] rounded-lg hover:opacity-90 transition-opacity">
              Resume
            </button>
            <button onClick={handleConnect} type="button" className="px-6 py-2 border border-[#f5f5f5]/20 rounded-lg hover:border-[#f5f5f5]/40 transition-colors">
              Contact
            </button>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="p-6 rounded-lg border border-[#f5f5f5]/10 bg-[#1a1a1a]">
            <h3 className="text-xl font-medium mb-4">Quick Info</h3>
            <ul className="space-y-3 opacity-80">
              <li>🚀 Full Stack Development</li>
              <li>💻 Modern Web Technologies</li>
              <li>🎓 Recent Graduate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About