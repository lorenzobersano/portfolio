import Head from 'next/head'

import ExternalLink from 'components/ExternalLink'
import H1 from 'components/H1'
import P from 'components/P'

const Contacts = (props) => {
  return (
    <>
      <Head>
        <title>Lorenzo Bersano | Contacts</title>
      </Head>

      <main className="container h-full mx-auto min-h-screen text-lg text-white md:h-screen">
        <article>
          <h1 className="pb-8 text-2xl md:text-4xl font-mono text-blue-200">
            Contacts
          </h1>
          <P>
            You can find me on{' '}
            <ExternalLink href="https://twitter.com/lobersano">
              Twitter
            </ExternalLink>
            ,{' '}
            <ExternalLink href="https://github.com/lorenzobersano">
              Github
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink href="https://linkedin.com/in/lorenzobersano">
              LinkedIn
            </ExternalLink>
            .
          </P>
          <P>
            You can also reach out shooting me an email to{' '}
            <ExternalLink href="mailto:lorenzo.bersano@gmail.com">
              lorenzo.bersano@gmail.com
            </ExternalLink>
          </P>
        </article>
      </main>
    </>
  )
}

export default Contacts
