// CallToAction.js 

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="wrapper">

        <h2 className="callH2">Stay In Touch</h2>
        <h3 className="callH3">Join our mailing list</h3>

        <form action="https://formspree.io/f/xrgvwykp" method="POST">

          <label className="sr-only" htmlFor="name"></label>
          <input type="text" id="name" name="User's Name" placeholder="Name" required />

          <label className="sr-only" htmlFor="email"></label>
          <input type="email" id="email" name="User's E-mail" placeholder="E-mail Address" required />

          <button type="submit" className="btn">Join</button>
        </form>
      </div>
    </section>
  )
}

export default CallToAction