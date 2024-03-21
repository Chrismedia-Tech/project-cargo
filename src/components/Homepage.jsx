import React from 'react';
import About from '../assets/about.png';
import pic1 from '../assets/1.png';
import pic2 from '../assets/2.png';
import pic3 from '../assets/3.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Form from './Form';

function Homepage() {


  return (
    <>
    {/* hero */}
    <div className="hero">
        <div className="container text-light ">
            <div className="pt-5 text-center" data-aos="bounce-in">
            <h1 className='pt-5 fw-bold mt-5'>
            Easy & Quick Cargo  Shipping Services 
            </h1>
            <p style={{fontSize:'24px',fontWeight:'700px'}}>Book low cost sea freight shipping services. 
            Get an instant quote.</p>
            <a href="/tracking" className="btn btn-danger">Track Goods Here</a>
            </div>
        </div>
    </div>
    {/* about */}
    <div className="container">
      <div className="text-center" data-aos="fade-up">
          <h2 className='pt-5 fw-bold'>Welcome to Crystal Shipment</h2>
          <div className='bg-red mx-auto '></div>
          <p className="mt-3">Crystal Shipment is more than logistics. We can also optimize your packaging, 
manage your materials sourcing, and so much more.</p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-up">
          <img src={About} className="rounded img-fluid mb-5" alt="about" />
        </div>
        <div className="col-md-6" data-aos="fade-up">
        <p className='text-danger'>TRANSPORTATION COMPANY</p>
        <h2 className="fw-bold">We Provide Full Range Logistics Solution</h2>
        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
        <a href="/service" className="btn btn-danger">Learn More</a>
        
        </div>
      </div>

{/* services */}

      <div className='container'>
      <div className="pt-5 text-center" data-aos="fade-up">
        <p className='text-danger'> TYPES OF LOGISTICS </p>
        <h2 className="fw-bold">Covering All Logistics Fields</h2>
      </div>

        <div className='row pt-3'>
           
           <div className='col-md-4 mb-5'>
                <div className="card">
                  <img src={pic1} className="card-img-top" alt="" />
                  <div className="card-body">
                      <h5 className="card-title">Air Freight</h5>
                      <p className="card-text">As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation... <a href="#" className='text-danger text-decoration-none'>Read more</a></p>
                  </div>
              </div>
           </div>

          
           <div className='col-md-4 mb-5'>
              <div className="card">
                  <img src={pic2} className="card-img-top" alt="" />
                  <div className="card-body">
                      <h5 className="card-title">Sea Freight</h5>
                      <p className="card-text">Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions... <a href="#" className='text-danger text-decoration-none'>Read more</a> </p>
                  </div>
              </div>
           </div>

           <div className='col-md-4 mb-5'>
              <div className="card">
                  <img src={pic3} className="card-img-top" alt="" />
                  <div className="card-body">
                      <h5 className="card-title">Land Freight</h5>
                      <p className="card-text">Cargo are transported at some stage of their journey along the world's road where we give premium... <a href="#" className='text-danger text-decoration-none'>Read more</a></p>
                  </div>
              </div>
           </div>

        </div>
    
    <div className="text-center">
      <a href="/service" className="btn btn-danger">Load more</a>
    </div>
    </div>
      </div>

    {/* banner */}
      <div className="bg-warning mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-4 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2 className="fw-bold">Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Request a Quote</a> 
            </div>
          </div>
          
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold">WHY CHOOSE US?</h2>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon1} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon2} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Mobile Shipment Tracking</h4>
            <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon3} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful Handling of Valuable Goods</h4>
            <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
              </div>
            </div>

           
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">REQUEST A QUOTE</h2>

            <Form/>

          </div>
        </div>
      </div>
    
    </>
  )
}

export default Homepage