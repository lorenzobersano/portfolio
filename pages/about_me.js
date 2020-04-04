const AboutMe = props => {
  const age = new Date().getFullYear() - 1996

  return (
    <section className="text-white">
      <h1 className="text-3xl text-white">About me</h1>
      <p>Hi! I&rsquo;m Lorenzo Bersano.</p>
      <p>I&rsquo;m {age} and I live in beautiful Turin, Italy 🇮🇹</p>
    </section>
  )
}

export default AboutMe
