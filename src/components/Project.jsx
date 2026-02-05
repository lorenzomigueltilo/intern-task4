import gameArt from '../assets/GAME ART V2.jpg'
import quizRushImg from '../assets/QuizRush.jpg'

const Project = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-16 text-blue-600 text-center">
        Featured Projects
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {/* Babylon Project */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={gameArt}
              alt="Babylon Game Artwork"
              className="w-full max-h-150 object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Babylon: Fable That Flows Into The Infinite
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A content management website designed to present detailed
              information about the game, including characters, lore,
              and media assets. The platform also allows users to
              download the game through an organized and user-friendly
              interface.
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-semibold">Technologies Used:</span>{' '}
              HTML, CSS, PHP, JavaScript, XAMPP
            </p>
          </div>
        </div>

        {/* Tammy's Quiz Rush */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={quizRushImg}
              alt="Tammy's Quiz Rush Game"
              className="w-full max-h-150 object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tammy&apos;s Quiz Rush
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A fast-paced quiz game developed in Unity that challenges
              players with timed questions and engaging gameplay.
              Designed to be interactive, fun, and educational.
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-semibold">Technologies Used:</span>{' '}
              C#, Unity
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
