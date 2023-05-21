// CallToAction.js 

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="wrapper">

        <h2 className="callH2">Stay In Touch</h2>
        <h3 className="callH3">Join our mailing list</h3>

        <form action="">
          <label className="sr-only" htmlFor="name"></label>
          <input type="text" id="name" placeholder="Name" />
          <label className="sr-only" htmlFor="email"></label>
          <input type="email" id="email" placeholder="E-mail Address" />
          <button className="btn">Join</button>
        </form>
      </div>
    </section>
  )
}

export default CallToAction