import React from 'react';
import './Wedding.css';

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
                        <div>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaabf_Church.webp" alt="" height={'300px'} width={'300px'} style={{borderRadius:'20px'}}/>
                            <h5 style={{paddingLeft:'70px'}}>Wedding Ceremony </h5>
                              <h5 style={{textAlign:'center'}}>  5:00 PM</h5>
                                <p style={{textAlign:'center'}}>We exchange our vows and tie the knot amidst the beauty of St Marry’s <br /> Church</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac3_Food.webp" alt="" height={'300px'} width={'300px'} style={{borderRadius:'20px'}} />
                            <h5 style={{paddingLeft:'70px'}}>Appetizers & Drinks </h5>
                              <h5 style={{textAlign:'center'}}>  6:00 PM</h5>
                                <p style={{textAlign:'center'}}>Mingle over appetizers and <br />
                                 refreshing drinks, setting the tone for <br /> an evening of celebration.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac0_Dinner%20Table.webp" alt="" height={'300px'} width={'300px'}style={{borderRadius:'20px'}} />
                            <h5 style={{paddingLeft:'70px'}}>Dinner Service </h5>
                              <h5 style={{textAlign:'center'}}>  7:00 PM</h5>
                                <p style={{textAlign:'center'}}>A gourmet dinner service offering a culinary journey, tailored to indulge the senses and honor the occasion.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div>
                            <img src="https://cdn.prod.website-files.com/66e9283b0d4336770ecbaa0f/66e9283b0d4336770ecbaac4_Guests%20Dancing.webp" alt="" height={'300px'} width={'300px'}  style={{borderRadius:'20px'}}/>
                            <h5 style={{paddingLeft:'80px'}}>Dance Party </h5>
                              <h5 style={{textAlign:'center'}}>  8:00 PM - 12:30 AM</h5>
                                <p style={{textAlign:'center'}}>Following the first dance we invite everyone to celebrate our love and joy through music and dance!</p>
                        </div>
                    </div>
                
                   
                </div>
            </div>

        </>
    );
};

export default Wedding;
