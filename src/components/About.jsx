const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">About Me</h2>

      {/* About Me */}
      <div className="max-w-3xl space-y-6 text-gray-700">
        <p>
          I am a highly motivated Information Technology student with a
          strong interest in web development. I enjoy learning new
          technologies and applying my academic knowledge to real-world
          projects.
        </p>

        <p>
          I am eager to gain hands-on experience, committed to continuous
          professional growth, and equipped with strong communication and
          teamwork skills.
        </p>

        {/* Skills and Technologies */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
          <ul className="grid sm:grid-cols-2 gap-3 list-disc list-inside">
            <li>HTML, CSS, JavaScript, PHP, C++, C#</li>
            <li>React.js</li>
            <li>TailwindCSS</li>
            <li>XAMPP, MongoDB</li>
            <li>GitHub</li>
          </ul>
        </div>


        {/* Interest */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Interests</h3>
          <p>
            UI/UX Design, Frontend Development, Web Performance,
            and learning new frameworks and technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
