import Head from 'next/head'

import { posts as postsMetadata } from 'posts.json'

import H1 from 'components/H1'
import H2 from 'components/H2'
import P from 'components/P'
import InlineCode from 'components/InlineCode'
import Img from 'components/Img'
import PostContentLayout from 'components/PostContentLayout'
import CodeWithSource from 'components/CodeWithSource'
import Link from 'next/link'
import ExternalLink from 'components/ExternalLink'
import InfoBox from 'components/InfoBox'

function AnOdeToGeronimoStilton({ metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content="Lorenzo Bersano" />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lobersano" />
        <meta
          property="og:image"
          content={`https://lorenzobersano.com/og/${metadata.slug}.png`}
        />
        <link
          rel="canonical"
          href={`https://lorenzobersano.com/blog/${metadata.slug}`}
        />
      </Head>

      <PostContentLayout>
        <svg
          width="612"
          height="507"
          viewBox="0 0 612 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="315.5" cy="287.5" r="216.5" fill="#FEDB00" />
          <path
            d="M384 421.5L421 479L406 488.5L384 496.5L341.5 506.5H289.5L272 503V425.5L384 421.5Z"
            fill="#EBE0DA"
          />
          <path
            d="M194 467.454V426.343C194 426.121 194.074 425.905 194.211 425.729L197.659 421.296C199.878 418.442 202.433 415.867 205.269 413.625L221.576 400.73C222.06 400.348 222.772 400.49 223.071 401.03L250.5 450.5L274.086 502.005C274.444 502.785 273.718 503.623 272.895 503.381L241.078 494.023C241.026 494.008 240.976 493.988 240.927 493.965L215 481.5L194.459 468.295C194.173 468.111 194 467.794 194 467.454Z"
            fill="#B1BA46"
          />
          <path
            d="M194 468.5V425.5L180 436L165 444.5L194 468.5Z"
            fill="#84A445"
          />
          <path
            d="M234 381C231.333 385.5 224.9 395.8 220.5 401L271 500.5L289.5 492.5L313 453.5L323 413.5L298 408.5L271 401L234 381Z"
            fill="#F7F3F1"
          />
          <path
            d="M390 414.5C384.5 414.5 373.3 416 370.5 416L375 427.5L394.5 461.5L413.5 483.5L421.5 478L390 414.5Z"
            fill="#F7F3F1"
          />
          <path
            d="M417.5 480.5L390.5 416.5L401 431L426 445L446 460.5L431.5 472L417.5 480.5Z"
            fill="#B1BA46"
          />
          <path
            d="M380.5 459L375.5 483L367 487.5L355 486L345.5 477.5L338.5 467L318 433.5L323 413L338.5 416H370.5L380.5 437.5V459Z"
            fill="#ED7652"
          />
          <path
            d="M363 501L356 486.263L373.5 485L384 495.526L363 501Z"
            fill="#D1492B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M527 276.023C528.957 270.988 530 264.239 530 256.5C530 250.317 528.863 244.698 527 240.063V227H514L514.002 227.057C513.668 227.019 513.334 227 513 227C504.44 227 498 235.155 498 252C498 268.517 507.557 284.852 515.999 285.481L516 285.5H516.5H527V276.023Z"
            fill="#F0E5C0"
          />
          <path
            d="M540 256.5C540 273.345 535.06 285.5 526.5 285.5C517.94 285.5 508 268.845 508 252C508 235.155 514.44 227 523 227C531.56 227 540 239.655 540 256.5Z"
            fill="#FDFCE9"
          />
          <path
            d="M349.042 189.366C327.904 231.591 260.724 240.769 198.992 209.866C135.276 185.238 126.695 101.764 128.5 68C149.638 25.775 253 45.6724 275.539 56.9553C337.271 87.8586 370.18 147.141 349.042 189.366Z"
            fill="#D19215"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M380.843 316.712C336.65 333.816 276.882 342 229 342C141.739 342 136 281.318 136 222.5C136 163.682 206.739 116 294 116C380.323 116 441.67 195.446 442.979 254.096C454.912 250.868 467.664 249 480.5 249C532.691 249 573.5 265.386 573.5 293C573.453 293.651 573.406 294.302 573.36 294.95C571.446 321.697 569.697 346.13 516 351.5C469.907 351.5 397.204 338.72 380.843 316.712Z"
            fill="#EB9C00"
          />
          <path
            d="M450 237C455.167 240.667 465.8 248.2 467 249L437 259.5L434 214L442.5 229.5L450 237Z"
            fill="#EB9C00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M480 276.023C481.957 270.988 483 264.239 483 256.5C483 250.317 481.863 244.698 480 240.063V227H467L467.002 227.057C466.669 227.019 466.334 227 466 227C457.44 227 451 235.155 451 252C451 268.517 460.557 284.852 468.999 285.481L469 285.5H469.5H480V276.023Z"
            fill="#F0E5C0"
          />
          <path
            d="M493 256.5C493 273.345 488.06 285.5 479.5 285.5C470.94 285.5 461 268.845 461 252C461 235.155 467.44 227 476 227C484.56 227 493 239.655 493 256.5Z"
            fill="#FDFCE9"
          />
          <path
            d="M525 337.5L563.5 332L560.5 336L546.5 350L518.5 374.5L464 399.5L402 415.5L339.5 416.5L295.5 408.5L271.5 402L221.5 374.5L195 353L167 326L154.5 312.5L171 302.5L233 292.5L324.5 302.5L471 332L525 337.5Z"
            fill="#F3D4AC"
          />
          <path
            d="M555.5 273.5L579 262.5L594 258L605.5 266.5L612 282V298L603 308.5L562 316L555.5 306.5L553 296L551.5 280L555.5 273.5Z"
            fill="#7C573B"
          />
          <path
            d="M250 207.5C250 254.72 194.036 293 125 293C57 299.5 13.5 238.5 0 207.5C0 160.28 55.9644 122 125 122C194.036 122 250 160.28 250 207.5Z"
            fill="#EB9C00"
          />
          <path
            d="M167.5 229C167.5 253.024 159 260 104.5 260C66.6685 260 29 226.024 29 202C35.5 188.5 44.6685 180 82.5 180C120.332 180 167.5 204.976 167.5 229Z"
            fill="#D97A5D"
          />
        </svg>
        <span className="mt-16 block" />
        <H1>An ode to Geronimo Stilton: defying the fixed nature of the Web</H1>
        <P>
          Against all odds, my favourite mouse when I was a kid wasn&rsquo;t the
          world-famous Disney mascotte, but <strong>Geronimo Stilton</strong>.
        </P>
        <P>
          The adventures of the journalist mouse accompanied me for my entire
          childhood, and what made them particularly engaging and interesting
          were the
        </P>
        <svg
          width="400"
          height="150"
          viewBox="100 -20 400 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="crazy-path"
            clipRule="evenodd"
            d={`M100 0C155.228 0 200 22.3858 200 50C255.228 50 300 72.3858 300
        100C355.228 100 400 122.386 400 150H300H200C144.772 150 100
        127.614 100 100C44.7715 100 0
        77.6142 0 50C0 22.3858 44.7715 0 100 0Z`}
          />
          <text className="fill-current text-white">
            <textPath
              className="fill-current text-purple-200"
              xlinkHref="#crazy-path"
              startOffset="0"
            >
              really
            </textPath>
            <textPath
              className="fill-current text-purple-400"
              xlinkHref="#crazy-path"
              startOffset="125"
            >
              funky
            </textPath>
            <textPath
              className="fill-current text-purple-200"
              xlinkHref="#crazy-path"
              startOffset="250"
            >
              paths
            </textPath>
          </text>
        </svg>
        <P>followed by emphasized phrases.</P>
        <div className="my-4">
          <Img
            id="stiltonScreen"
            alt="The paths I am talking about"
            src="/geronimo-example-path.png"
            caption="An extract from my precious personal collection"
          />
        </div>
        <P>
          That&rsquo;s the effect I wanted to achieve when developing the
          halo-like path that is shown on my
          <Link href="/">
            <a>homepage</a>
          </Link>
          .
        </P>
        <H2>Normal HTML can&rsquo;t really help us here</H2>
        <P>
          Given the static, vertical flow nature of HTML, we can&rsquo;t really
          reach out for some magic{' '}
          <InlineCode>{'<geronimo-crazy-text>'}</InlineCode> tag here, so how
          can we get those Stilton-y paths?
        </P>
        <H2>SVG to the rescue</H2>
        <div className="space-y-4">
          <P>
            Luckily, we have the Scalable Vector Graphics standard on the Web,
            which is a great way to make content break out of its common
            vertical layout and make it more expressive and engaging.
          </P>
          <H2> Making text follow a given SVG path</H2>
          <div className="my-4">
            <InfoBox>
              <>
                <p className="text-base sm:text-xl leading-relaxed font-bold">
                  Just a quick heads up!
                </p>
                In these code examples I&rsquo;m using{' '}
                <ExternalLink href="https://tailwindcss.com">
                  TailwindCSS
                </ExternalLink>{' '}
                to style components, make sure to check it out in order to get
                the exact same results that I&rsquo;m getting in the examples!
              </>
            </InfoBox>
          </div>
          <P>
            SVG can be used to make simple geometric shapes with ready-to-go
            tags (<InlineCode>{'<circle>'}</InlineCode>,{' '}
            <InlineCode>{'<rect>'}</InlineCode>):
          </P>
          <CodeWithSource>
            <div className="flex h-32">
              <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="papayawhip" />
              </svg>
              <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" fill="lavender" />
              </svg>
            </div>
          </CodeWithSource>
          <P>
            and more complex shapes with the <InlineCode>{'<path>'}</InlineCode>{' '}
            tag:
          </P>
          <CodeWithSource>
            <div className="flex h-48">
              <svg
                width="540"
                height="319"
                viewBox="0 0 540 319"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M329 0L17 200L522.5 125.5C483.219 59.2922 416.533 13.9786 340.512 1.83844L329 0Z"
                  fill="white"
                />
                <path
                  d="M17 200L522.5 125.5L522.5 236.34C522.5 241.311 518.849 245.527 513.929 246.238L17 318L17 200Z"
                  fill="#F4F4F4"
                />
                <path
                  d="M17 206L500.398 134.855C507.04 133.877 513 139.025 513 145.737L513 231.347C513 236.315 509.353 240.529 504.437 241.243L17 312L17 206Z"
                  fill="#F6C677"
                />
              </svg>
            </div>
          </CodeWithSource>
          <P>
            That&rsquo;s with the latter tag that we&rsquo;re gonna make some
            text follow (you guessed it) a path.
          </P>
          <P>
            First of all we have to create an SVG, so let&rsquo;s head over to{' '}
            <ExternalLink href="https://figma.com">Figma</ExternalLink>{' '}
            <div className="my-4">
              <InfoBox>
                <>
                  Don&rsquo;t worry if you don&rsquo;t have Figma on your
                  computer, you can copy the SVG code below by pressing
                  &ldquo;Show code&rdquo; and then copying it.
                </>
              </InfoBox>
            </div>
            and draw the path which will look like this:
          </P>
          <CodeWithSource>
            <div className="flex h-48">
              <svg viewBox="0 0 860 450">
                <path
                  id="curve"
                  fill="aquamarine"
                  d="M0,400 C0,179.0861 179.0861,0 400,0 C620.9139,0 800,179.0861 800,400 L1.42108547e-14,400 Z"
                />
              </svg>
            </div>
          </CodeWithSource>
        </div>
        <H2>Positioning the text</H2>
        <P>
          Now that we have our shape to follow, it&rsquo;s time to introduce the{' '}
          <InlineCode>{'<text>'}</InlineCode>
          and <InlineCode>{'<textPath>'}</InlineCode> tags which let us,
          respectively, draw an SVG text element and make that text follow a
          certain path, in our case the semicircular shape shown just above.
        </P>
        <div className="h-4" />
        <CodeWithSource>
          <div className="flex h-48">
            <svg viewBox="-48 -48 900 450">
              <path
                id="curve"
                fill="aquamarine"
                fillOpacity="0.1"
                d="M0,400 C0,179.0861 179.0861,0 400,0 C620.9139,0 800,179.0861 800,400 L1.42108547e-14,400 Z"
              />
              <text className="text-5xl text-white fill-current">
                <textPath href="#curve" startOffset="0">
                  Quick brown fox jumps over the lazy dog.
                </textPath>
              </text>
            </svg>
          </div>
        </CodeWithSource>
        <H2>Final touches</H2>
        <P>
          Text is on path, but to make it look like it just floats in the air
          the simple edit to do is changing the{' '}
          <InlineCode>{'fill="aquamarine"'}</InlineCode> path background color
          to <InlineCode>{'fill="transparent"'}</InlineCode>.
        </P>
        <div className="h-4" />
        <CodeWithSource>
          <div className="flex h-48">
            <svg viewBox="-48 -48 900 450">
              <path
                id="curve"
                fill="transparent"
                d="M0,400 C0,179.0861 179.0861,0 400,0 C620.9139,0 800,179.0861 800,400 L1.42108547e-14,400 Z"
              />
              <text className="text-5xl text-white fill-current">
                <textPath href="#curve" startOffset="0">
                  My name is
                </textPath>
                <textPath href="#curve" startOffset="600">
                  Geronimo
                </textPath>
                <textPath href="#curve" startOffset="1100">
                  Stilton
                </textPath>
              </text>
            </svg>
          </div>
        </CodeWithSource>
        <H2>Conclusions</H2>
        <P>And that&rsquo;s a wrap!</P>
        <P>
          In this article I showed you how to make content break out of its
          normal vertical flow using SVG, specifically how to use it in order to
          make text follow a certain path.
        </P>
      </PostContentLayout>
    </>
  )
}

export async function getStaticProps() {
  let metadata = postsMetadata.filter(
    ({ slug }) => slug === 'an-ode-to-geronimo-stilton'
  )[0]

  return { props: { metadata } }
}

export default AnOdeToGeronimoStilton
