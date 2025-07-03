import React ,{ useState } from 'react';
import './Wedding.css';
import './Wedding.css';
import Accordion from 'react-bootstrap/Accordion';
import { CiCirclePlus } from "react-icons/ci";

const Wedding = () => {

    return (
        <>
            <div className='bg1 py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold mb-4">
                                Amanda & <br />
                                Johnathan Are <br />
                                Getting Married!
                            </h1>
                            <p className="lead">
                                We are so excited to celebrate our special day with all of our favorite people.
                                This website is your go-to resource for all the details about our wedding and
                                the best place to RSVP.
                            </p>
                            <a href="#rsvp" className="btn btn-dark btn-lg mt-3">RSVP</a>
                            <p className="mt-2 text-muted">Please RSVP by January 1st</p>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 mt-md-0 text-center">
                            <div className='img1'>
                                <img
                                    className="img1 img-fluid"
                                    src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab60_sea%202.webp"
                                    alt="Wedding Couple"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 mt-4 mt-md-0 text-center">
                        <div className='img1'>
                            <img
                                className="img2 img-fluid"
                                src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab6e_nadine-rupprecht-EH8QHTF8FzY-unsplash.webp"
                                alt="Wedding Couple"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mt-4 mt-md-0 pt-5">
                        <div>
                            <div className='form'>
                                <div style={{ padding: '50px' }}>
                                    <h3 style={{ fontSize: '60px' }}>RSVP & Info</h3>
                                    <p style={{ fontSize: '20px' }}>We're really excited to see you, and hope you can <br /> join us for our special day!</p>
                                    <hr />
                                    <h3>When</h3>
                                    <p>Monday, June 8, 2024</p>
                                    <p>5:30 PM - 12:30 PM</p>
                                    <h3>Where</h3>
                                    <p>The Venue @ Park Hotel122 Broadway, Los Angeles, <br /> California</p>
                                    <h3>Dress Code</h3>
                                    <p>Formal Attire</p>
                                    <p>Please let us know if you'll be able to make it no later than <br /> January 1st 2025</p>
                                    <button className='btn1'>RSVP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="s">
                            <h1>Schedule</h1>
                            <h3>We're really excited to see you, and hope you can <br /> join us for our special day!</h3>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{textAlign:'center'}}>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaabf_Church.webp" alt="" height={'300px'} width={'250px'} style={{borderRadius:'20px'}}/>
                            <h5>Wedding Ceremony </h5>
                              <h5 style={{textAlign:'center'}}>  5:00 PM</h5>
                                <p style={{textAlign:'center'}}>We exchange our vows and tie the knot amidst the beauty of St Marry’s <br /> Church</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div  style={{textAlign:'center'}}>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac3_Food.webp" alt="" height={'300px'} width={'250px'} style={{borderRadius:'20px'}} />
                            <h5>Appetizers & Drinks </h5>
                              <h5 style={{textAlign:'center'}}>  6:00 PM</h5>
                                <p style={{textAlign:'center'}}>Mingle over appetizers and <br />
                                 refreshing drinks, setting the tone for <br /> an evening of celebration.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{textAlign:'center'}}>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac0_Dinner%20Table.webp" alt="" height={'300px'} width={'250px'}style={{borderRadius:'20px'}} />
                            <h5>Dinner Service </h5>
                              <h5 style={{textAlign:'center'}}>  7:00 PM</h5>
                                <p style={{textAlign:'center'}}>A gourmet dinner service offering a culinary journey, tailored to indulge the senses and honor the occasion.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{textAlign:'center'}}>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac4_Guests%20Dancing.webp" alt="" height={'300px'} width={'250px'}  style={{borderRadius:'20px'}}/>
                            <h>Dance Party </h>
                              <h5 style={{textAlign:'center'}}>  8:00 PM - 12:30 AM</h5>
                                <p style={{textAlign:'center'}}>Following the first dance we invite everyone to celebrate our love and joy through music and dance!</p>
                        </div>
                    </div>
                
                   
                </div>
            </div>
      





    <div>

      <div className='container pt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <h1 className='Discover'>Discover Our Journey From Chance Encounter to True Love.</h1>
            <button className='story-button'>Our Story</button>
          </div>

          <div className='col-lg-8'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card equal-card' >
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab60_sea%202.webp" alt="" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card equal-card'>
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab61_helena-lopes-ueMLnIwlrlE-unsplash.webp" alt="" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card equal-card'>
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab44_coffee%20shop.webp" className='w-100 h-100 p-3' alt="" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card equal-card'>
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab44_coffee%20shop.webp" className='w-100 h-100 p-3' alt="" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card equal-card'>
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab6e_nadine-rupprecht-EH8QHTF8FzY-unsplash.webp" className='w-100 h-100 p-3' alt="" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card equal-card'>
                  <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbab60_sea%202.webp" className='w-100 h-100 p-3' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* \Faq section */}

      {/* FAQ Component */}
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left Side - Title */}
          <div className="col-md-4 text-md-start text-center mb-4 mb-md-0">
            <h1 className="faq-title">FAQ</h1>
          </div>

          {/* Right Side - Accordion */}
      <div className="col-md-8">
  <Accordion flush alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <h5>What is the dress code for the wedding?</h5>
      </Accordion.Header>
      <Accordion.Body>
        <p>Please join us in semi-formal attire that reflects the elegance and joy of the occasion.</p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <h5>What time should guests arrive at the venue?</h5>
      </Accordion.Header>
      <Accordion.Body>
        <p>Arrive 30 minutes early to enjoy the venue and find your seat comfortably.</p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <h5>Is there parking available at the venue?</h5>
      </Accordion.Header>
      <Accordion.Body>
        <p>Yes, complimentary parking with signage and attendants on arrival.</p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header>
        <h5>Can I bring a plus one?</h5>
      </Accordion.Header>
      <Accordion.Body>
        <p>Please refer to your invitation. Contact us for any special request.</p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header>
        <h5>What should I do if I have dietary restrictions?</h5>
      </Accordion.Header>
      <Accordion.Body>
        <p>Mention them while RSVPing or contact us directly to accommodate.</p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</div>

        </div>
      </div>

      {/* Footer section */}

      <footer className="footer-container">
        <div className="footer-top">
          {/* Left Side */}
          <div className="footer-about" style={{ paddingLeft: '20%' }}>
            <h2>Amanda & Jonathan</h2>
            <p >
              Welcome to the tapestry of our lives. We’re Amanda <br /> & Jonathan, two hearts that found a
              harmonious <br /> rhythm in the symphony of life. Our ‘little about’ is a <br /> snapshot of the vibrant
              colors we bring to each other’s <br /> worlds.
            </p>
          </div>

          <div className="footer-links" style={{ paddingRight: '20%' }}>

            <a href="#"><h4>RSVP </h4></a>
            <a href="#"><h4>Schedule </h4></a>
            <a href="#"><h4>Our Story </h4></a>
            <a href="#"><h4>FAQ </h4></a>
            <a href="#"><h4>Buy Template </h4></a>



     
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-legal" style={{ paddingLeft: '20%' }}>
            <a href="#">Licenses</a>
            <a href="#">Style Guide</a>
            <a href="#">Change Log</a>
            <a href="#">Instructions</a>
          </div>
          <div className="footer-credit" style={{ paddingRight: '20%' }}>

            <h5>Made by Aaron Rudyk &nbsp; | &nbsp; Powered by Webflow</h5>
          </div>
        </div>
      </footer>

    </div>
 

        </>
    );
};

export default Wedding;

