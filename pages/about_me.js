import ExternalLink from '../components/ExternalLink'

const AboutMe = (props) => {
  const age = new Date().getFullYear() - 1996

  return (
    <main className="container h-screen mx-auto text-white">
      <article>
        <h1 className="text-3xl text-white">About me</h1>
        <p>Hi! I&rsquo;m Lorenzo Bersano.</p>
        <p>I&rsquo;m {age} and I live in beautiful Turin, Italy 🇮🇹</p>
        <section className="mt-8">
          <h2 className="text-2xl text-white">What do I do</h2>
          <p>
            I&rsquo;m a fullstack developer at{' '}
            <ExternalLink href="https://toduba.it">Toduba</ExternalLink>, a
            Turin based startup where we tokenize on the{' '}
            <ExternalLink href="https://stellar.org">Stellar</ExternalLink>{' '}
            blockchain everything related to workers welfare.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl text-white">What do I know</h2>
          <p>
            I can work with every part of the stack, but I'm especially
            proficient in React on the frontend and Node.js on the backend.
          </p>
          <div className="flex flex-col justify-between mt-4 sm:flex-row">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Tailwind.css</li>
              </ul>
            </div>
            <div>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>.NET</li>
              </ul>
            </div>
            <div>
              <h3>Libraries</h3>
              <ul>
                <li>Styled Components</li>
                <li>Redux</li>
                <li>Express</li>
              </ul>
            </div>
            <div>
              <h3>Other</h3>
              <ul>
                <li>User Interface design</li>
                <li>User Experience design</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default AboutMe
