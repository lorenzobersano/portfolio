import Head from 'next/head'

import ExternalLink from '../components/ExternalLink'
import SkillsCards from '../components/SkillsCards'

const AboutMe = (props) => {
  const age = new Date().getFullYear() - 1996

  return (
    <>
      <Head>
        <title>Lorenzo Bersano | About me</title>
      </Head>

      <main className="container h-full mx-auto text-white md:h-screen">
        <article>
          <h1 className="font-mono text-blue-200">About me</h1>
          <p>Hi! I&rsquo;m Lorenzo Bersano.</p>
          <p>I&rsquo;m {age} and I live in beautiful Turin, Italy 🇮🇹</p>
          <section className="mt-8">
            <h2 className="font-mono text-blue-200">What do I do</h2>
            <p>
              I&rsquo;m a fullstack developer at{' '}
              <ExternalLink href="https://toduba.it">Toduba</ExternalLink>, a
              Turin based startup where we tokenize on the{' '}
              <ExternalLink href="https://stellar.org">Stellar</ExternalLink>{' '}
              blockchain everything related to workers welfare.
            </p>
          </section>
          <section className="mt-8">
            <h2 className="font-mono text-blue-200">What do I know</h2>
            <p>
              I can work with every part of the stack, but I'm especially
              proficient in React on the frontend and Node.js on the backend.
            </p>
            <div className="flex flex-col mt-4 space-x-0 space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
              <SkillsCards
                title="Frontend"
                skills={[
                  'HTML',
                  'CSS',
                  'JS',
                  'React.js',
                  'Next.js',
                  'Tailwind.css',
                  'Styled Components',
                  'Redux',
                ]}
              />

              <SkillsCards
                title="Backend"
                skills={['Node.js', '.NET WebApi', 'Express', 'Solidity']}
              />

              <SkillsCards title="Other" skills={['UI Design', 'UX Design']} />
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default AboutMe
