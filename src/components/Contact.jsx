import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <>
    <div className="cover">
        <div className="text-center pt-3 text-light">
            <h2 className="pt-5">Contact</h2>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
        </div>
    </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Kindly Call Us / Join Our Support Group On Whatsapp.
            </p>
            <div className="">
              <div className="mb-3">
                <a href="tel:09072211222" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9072211222
                </a>
              </div>
              <div className="mt-3">
                <a href="https://wa.me/+2348167000078" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 8167000078
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@crystalshipment.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@crystalshipment.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
          <Form/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact