import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>We are the World Best IT Company</p>
            <h1 className='text-white'>Welcome to Thapa Technical</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div class="btn-group">
  <NavLink to="/contact" className="btn">Connect Now</NavLink>
  <NavLink to="/services" className="btn secondary-btn">Learn More</NavLink>
</div>
          </div>

          {/* hero images  */}
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/5157280/pexels-photo-5157280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </main>

    {/* 2nd section  */}
    

    {/* 3rd section  */}
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        {/* hero images  */}
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/5157280/pexels-photo-5157280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="coding together"
            width="400"
            height="500"
          />
        </div>

        <div className="hero-content">
          <p>We are here to help you</p>
          <h1 className='text-white'>Get Started Today</h1>
          <p>
            Ready to take the first step towards a more efficient and secure
            IT infrastructure? Contact us today for a free consultation and
            let's discuss how Thapa Technical can help your business thrive in
            the digital age.
          </p>
          <div className="btn-group">
  <NavLink to="/contact" className="btn">Connect Now</NavLink>
  <NavLink to="/services" className="btn secondary-btn">Learn More</NavLink>
</div>

        </div>
      </div>
    </section>
  </>
  )
}

export default Home
