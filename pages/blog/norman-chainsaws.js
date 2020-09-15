import Head from 'next/head'

import { posts as postsMetadata } from 'posts.json'

import H1 from 'components/H1'
import H2 from 'components/H2'
import P from 'components/P'
import PostContentLayout from 'components/PostContentLayout'
import Quote from 'components/Quote'
import Img from 'components/Img'

function NormanChainsaws({ metadata }) {
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
          width="927"
          height="767"
          viewBox="0 0 927 767"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="383.5" cy="383.5" r="383.5" fill="#C1FFFF" />
          <path
            d="M878 112L484.5 352L475.5 404.5L521.5 460.5L905.5 201.5L920.5 180L926.5 161.5L920.5 134.5L905.5 121.5L878 112Z"
            fill="#242424"
          />
          <path
            d="M880 127.5L489 367.5L475.5 404.5L509.5 448.5L910.5 182.5L916 161.5L910.5 142.5L897 127.5H880Z"
            fill="#5F5F5F"
          />
          <path
            d="M215.5 324L209 374L249 369.5V341L265 294.5H269.5L261 256L243.5 266L230.5 283L215.5 324Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M64 478L88.5 552.5L116 518L148 497L215 485L267.5 478L278.5 441.5L292 399L278.5 393L264 354L245 361H222.5L189.5 372L155.5 393L122.5 418L95.5 432.5L70 462L64 478Z"
            fill="#B84E14"
          />
          <path
            d="M109.5 485L123.5 516L275 475L290.5 401L279 393L270.5 375.5L136 447L118 458.5L109.5 485Z"
            fill="#C26B3C"
          />
          <path
            d="M69 460L84.5 473.5L110.5 441L90 429.5L69 460Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M497.5 480.5L483 460L493.5 392.5L566.5 489.5V494.5L497.5 480.5Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M75 580.5L89.5 540L108.5 516L151.5 493L215.5 479.5L259 468.5L271.5 455L269.5 472.5L267 483L264.5 490.5L307 555L309.5 575.5L305.5 595L298.5 604.5L285 650L246 694.5H75V580.5Z"
            fill="#111518"
          />
          <path
            d="M414 554.5L463 545.5L482 531.5L499 508.5L488.5 473.5H499L539.5 481.5L595 497.5L626 524L648 564.5L671 628L692 694.5H414L409.5 678L361.5 637.5L364.5 616L377 587L374 553L414 554.5Z"
            fill="#111518"
          />
          <path
            d="M291 598.5L305 592L361 634.5L409 676.5L414.5 694.5H239.5L291 598.5Z"
            fill="#303135"
          />
          <path
            d="M366 513.5L389.5 523.5H420L446 513.5L467.5 493L478 455L484.5 459L499.5 508L481.5 532.5L464 546L417 561L372 558L366 513.5Z"
            fill="#303135"
          />
          <path
            d="M286 268.5L308 244.5L407 247.5L451.5 254.5L491 269L498 327.5L495 423.5H286V268.5Z"
            fill="#DCA386"
          />
          <path
            d="M494.5 302H507L512 311L508 323L497 345.5V333L494.5 302Z"
            fill="#DCA386"
          />
          <path
            d="M251 311.5L258.5 303L268 305L279.5 331L285 386.5L286.5 397L284 402L276.5 400.5L268 386.5L251 331V311.5Z"
            fill="#DCA386"
          />
          <path
            d="M490.5 269L496 273L500 291.5L496 332L490.5 303.5V269Z"
            fill="#DDD9D5"
          />
          <path
            d="M268 305.5L275 286L285.5 268.5L292.5 286L294 305.5V313.5L290 347.5L339.5 397.5L362.5 384.5V405L405 416.5L451.5 412.5L476.5 395L497 336L500.5 366L497 426L489 448.5L468 494.5L446.5 512.5L421 523H390.5L379 520L301.5 453L285.5 397.5L279 331.5L268 305.5Z"
            fill="#DDD9D5"
          />
          <path
            d="M362 384.5L383 374.5L408 384L425 382.5L436.5 373.5L461 391.5L472.5 399.5L453 413.5L439.5 406.5H406L383 401.5L361 403.5L362 384.5Z"
            fill="#DDD9D5"
          />
          <path
            d="M306.5 554.5L264.5 489.5L274 432L285 397.5L302.5 442L321 426.5L330 435L343.5 428H351.5L357.5 435L360.5 443.5H365.5L390 473L394.5 504.5L386.5 510.5L368 508L374.5 520L380 538.5L379 568.5L376.5 586.5L372 599L364.5 615.5L362 635.5L304.5 591L309.5 575.5L306.5 554.5Z"
            fill="#ECBFA2"
          />
          <path
            d="M323.62 328.963C321.204 320.023 326.559 310.832 335.529 308.525L335.714 308.477L349.917 305.895C351.363 305.632 352.83 305.5 354.299 305.5H368.485L376.08 305.73C388.832 306.117 398.263 317.738 396.021 330.293L395.774 331.305C393.098 342.279 383.267 350 371.972 350H348.654C338.932 350 330.129 344.251 326.221 335.349L324.447 331.308C324.113 330.548 323.837 329.764 323.62 328.963Z"
            fill="#C4C4C4"
            fillOpacity="0.3"
            stroke="#3C1A11"
            strokeWidth="2"
          />
          <path
            d="M496.073 329.126L496.067 329.14L496.062 329.154L495.041 331.925C491.572 341.34 482.714 347.688 472.685 347.947L448.496 348.573C438.91 348.821 430.127 343.245 426.272 334.465L425.773 333.329C424.615 330.691 424.092 327.817 424.248 324.939L424.298 324.016C424.693 316.698 429.705 310.446 436.76 308.466L450.247 304.985C451.528 304.655 452.833 304.428 454.151 304.309L468.526 303.002L479.442 303.422C492.391 303.92 500.925 317.11 496.073 329.126Z"
            fill="#C4C4C4"
            fillOpacity="0.3"
            stroke="#3C1A11"
            strokeWidth="2"
          />
          <rect x="312" y="317.5" width="12" height="3" fill="#3C1A11" />
          <rect
            width="12"
            height="3"
            transform="matrix(-1 0 0 1 509 314.5)"
            fill="#3C1A11"
          />
          <path
            d="M394 315.409L410.5 313.909L427 315.409L425 318.409L410.5 316.909L395 318.409L394 315.409Z"
            fill="#3C1A11"
          />
          <path
            d="M268 305L266 303L299.5 313.5L312 317.5V320.5L297.5 315L268 305Z"
            fill="#3C1A11"
          />
          <path
            d="M505 310.5L498 307H495.5L503.5 315L509 317.5V313L505 310.5Z"
            fill="#3C1A11"
          />
          <path
            d="M242 224.5L246 203.5L302 180L366.5 164H405.5L447 176.5L483 194.5L518 221L538.5 250.5V272.5L529.5 283.5H523.5L507.5 302H498L499.5 292L496 272.5L483 266.5L451.5 254.5L308.5 244.5L284 271.5L268.5 307L246 244.5L242 224.5Z"
            fill="#111518"
          />
        </svg>

        <span className="mt-16 block" />
        <H1>Norman Chainsaws</H1>
        <P>
          <span className="smallcaps font-bold">
            I should&rsquo;ve moved to Turin in March of this year
          </span>
          , but right at the start of that month the pandemic hit hard here in
          Italy, so I stayed for a couple of months more at my native home in
          southern Piedmont countryside.
        </P>
        <P>
          Just at the start of the lockdown, my mother{' '}
          <span className="font-bold">really</span> wanted a wooden flowerbed to
          perfect her garden, so my father and I helped her in building that.
        </P>
        <P>
          At the moment of using the chainsaw though, something pretty
          embarassing happened: I couldn&rsquo;t turn it on.
        </P>
        <P>
          Let me explain: my chainsaw&rsquo;s power system is controlled by a
          switch, so the only possible states are turned off and turned on, so
          when I tried to operate it I checked the switch, I pulled the cord
          and... nothing happened.
        </P>
        <P>Checked the fuel tank: full</P>
        <P>Tried to pull the cord again: nothing</P>
        <P>
          At that point I gave up and asked my father what I was doing wrong,
          and with a quick glance he had the answer: &ldquo;The switch is
          off&rdquo;.
        </P>
        <P>
          So he just flipped the switch, pulled the cord and the chainsaw
          finally started, with me just standing there ashamed of failing such a
          basic task.
        </P>
        <div className="flex justify-center my-6">
          <p className="leading-none text-white text-2xl tracking-wider">
            BUT!
          </p>
        </div>
        <P>
          As the world class designer Don Norman states in his bestseller
          &ldquo;The Design Of Everyday things&rdquo; (paraphrasing):
        </P>
        <div className="my-10">
          <Quote>
            If a machine doesn&rsquo;t work as the user expects you don&rsquo;t
            blame the user, you blame the design.
          </Quote>
        </div>
        <P>
          Always citing the book, the connection between my chainsaw and{' '}
          <span className="font-bold">Norman doors</span> is pretty clear.
        </P>
        <H2>What are Norman doors?</H2>
        <P>
          I&rsquo;m 100% sure that during your life you&rsquo;ve pulled a door
          that was meant to be pushed and vice versa: Don Norman cited so much
          this example of bad designed doors that the term Norman doors was
          coined after him.
        </P>
        <P>As he states in the same book I cited above:</P>
        <div className="my-10">
          <Quote>
            The design of the door should indicate how to work it without any
            need of signs, certainly without any need for trial and error.
          </Quote>
        </div>
        <P>
          <span className="font-bold">Without any need of signs</span> and
          without any need for trial and error <i>literally</i> hit home here.
        </P>
        <H2>Without any need of signs</H2>
        <P>
          To be honest, at least bad designed doors try to warn us with some
          metal plate which says{' '}
          <span className="smallcaps font-bold">Push</span> or{' '}
          <span className="smallcaps font-bold">Pull</span>.
        </P>
        <div className="mt-4 mb-8">
          <Img
            src="/norman-chainsaws/push_pull_doors.jpg"
            alt="Doors with two push plates on them"
          />
        </div>
        <P>
          The problem with this system though, is that basically 99% of the
          times the interaction flow is like this one:
        </P>
        <div className="mt-4 mb-8">
          <Img
            src="/norman-chainsaws/interaction_with_door_flow.png"
            alt="An interaction flow with bad designed doors"
          />
        </div>
        <P>
          Back to the chainsaw, I think that now is the best time to show you a
          picture of it in order to make you better understand why I got so
          confused:
        </P>
        <div className="mt-4 mb-8">
          <Img
            src="/norman-chainsaws/chainsaw.jpg"
            alt="A close-up photo of the switch of the chainsaw"
          />
        </div>
        <P>
          The Stop sign is above the switch, so it&rsquo;s logical for the user
          to think that if he/she flips the switch up, the chainsaw should be in
          the Stop state, but then a minuscule arrow in the topright angle of
          the sticker says the exact contrary, causing the confusion that I
          described above.
        </P>
        <H2>Not only Norman doors</H2>
        <P>
          In this particular an important <span className="smallcaps">UX</span>{' '}
          heuristic is also not followed,{' '}
          <span className="font-bold">the first law of locality</span>, which
          states:
        </P>
        <div className="my-10">
          <Quote>Put the control where it affects change.</Quote>
        </div>
        <P>
          This is particularly true in digital design (for example: put the
          submit button of a newsletter signup form to the right of the email
          input), but if we translate the same rule from the digital to the
          physical world the point still stands.
        </P>
        <H2>How to fix this flawed design?</H2>
        <P>
          Having this simple rule, in order to fix the Norman door problem and
          respect the law of locality, the designer of the chainsaw should have
          put the Stop sign <span className="smallcaps font-bold">UNDER</span>{' '}
          the switch, so that the most natural mental model is followed.
        </P>
      </PostContentLayout>
    </>
  )
}

export async function getStaticProps() {
  let metadata = postsMetadata.filter(
    ({ slug }) => slug === 'norman-chainsaws'
  )[0]

  return { props: { metadata } }
}

export default NormanChainsaws
