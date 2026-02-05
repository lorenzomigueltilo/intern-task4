import profileImg from '../assets/Profile.jpg'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Profile Image */}
      <img src={profileImg} alt="Profile photo of Lorenzo Miguel T. Tilo"
              className="w-80 h-80 rounded-full object-cover shadow-xl
              ring-4 ring-blue-600/20"
      />

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600">Lorenzo Miguel T. Tilo</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          I am an aspiring web developer focused on building clean,
          responsive, and user-friendly web applications using modern
          technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium
                       hover:bg-blue-700 transition shadow"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-medium
                       hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
