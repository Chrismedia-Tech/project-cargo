import React from 'react'
import gal1 from '../assets/gal1.png'
import gal2 from '../assets/gal2.png'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.png'


function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-3">
            <h4>CRYSTAL SHIPMENT</h4>
            <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
          </div>
          <div className="col-md-3">
            <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className='text-light text-decoration-none'>All Services</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Sea Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Air Freight</a></li>
            </ul>

          </div>
          <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex">
              <div className="flex-grow-1 mb-3 me-2">
              <img src={gal1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src={gal2} alt="" className='img-fluid' />
              
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 mb-3 me-2">
              <img src={gal3} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src={gal4} alt="" className='img-fluid' />
              
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="email" placeholder='Enter your email' className="form-control mt-3 mb-3" />
            <button className="btn btn-danger">Submit</button>

          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>

    </>
  )
}

export default Footer