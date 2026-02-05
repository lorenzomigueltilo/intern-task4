const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>

      <p className="text-gray-700 mb-6 max-w-xl">
        Feel free to reach out to me for collaboration, opportunities,
        or any inquiries.
      </p>

      {/* Email */}
      <ul className="space-y-3 text-gray-700">
        <li>
          📧 Email: <span className="font-medium">lorenzo.tilo@outlook.com</span>
        </li>

        {/* LinkedIn */}
        <li>
          🔗 LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/lmtilo/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/lmtilo
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
