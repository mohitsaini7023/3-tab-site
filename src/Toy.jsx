
import React from "react";
import "./Toy.css"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { RiArrowRightUpFill } from "react-icons/ri";





const Toy = () => {
  useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

  return (
    <div className="bg-lightgrey">
    <section className="toy-hero">
      <div className="toy-box" data-aos='zoom-in'>
        <p className="toy-subtitle">Say Hello to ToyStore!</p>
        <h1 className="toy-title">
          Free Ecommerce <br /> Template for Webflow
        </h1>
        <button className="toy-button">Open Catalog</button>
      </div>

      <div className="icon" data-aos='zoom-in'>
        <div className="ab2">
          <div className="a"></div>
        </div>
      </div>
    </section>


    <div className="container py-5 bg-white " data-aos='zoom-in'>
  <div className="row g-5 justify-content-center align-items-center">

    <div className="col-lg-6 col-md-6 col-sm-12 ">
      <div className="position-relative bg-warning text-white rounded-4 toy-box1">
        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" alt="Stuffed Animal" className="position-absolute top-0 start-0 m-5 toy-img-left" />

        <div className="text-center mt-4 pt-3 content-left">
          <h2 className="fw-bold mb-4">Stuffed Animals</h2>
          <button className="btn btn-light text-dark fw-semibold rounded-pill px-4 py-2  mb-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>

    {/* Wooden Toy */}
    <div className="col-lg-6 col-md-6 col-sm-12 ">
      <div className="position-relative bg-danger text-white rounded-4  toy-box1">
        <img
          src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
          alt="Wooden Toy"
          className="position-absolute top-0 end-0 m-5 toy-img-right"
        />

        <div className="text-center text-md-start content-right mt-4 pt-3">
          <h2 className="fw-bold mb-4">Wooden Toys</h2>
          <button className="btn btn-light text-dark fw-semibold rounded-pill px-4 py-2 mb-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>

  </div>
</div>


<div className="container"  >
  <div className="as">
    <h2 style={{paddingTop:'15px'}}>Stuffed Animals</h2>
    <p style={{fontSize:'16px',paddingTop:'15px'}}>See All Toys <FaLongArrowAltRight />
</p>
  </div>
     <ProgressBar variant="success" now={20} className="pro" />
  <div className="row">
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img
        src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
        alt=""
        style={{ width: '100%', paddingBottom: '20px' }}
      />
      <h6 style={{ fontSize: '16px' }}>Teddy Bear</h6>
      <button className="button1">$30.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png"alt=""style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Mega Plush Toy</h6>
      <button className="button1">$38.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png" alt="" style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Cute Dog</h6>
      <button className="button1">$24.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png"alt=""style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Little Friend</h6>
      <button className="button1">$27.00 USD</button>
    </div>
  </div>
</div>


  </div>

</div>
<div className="container py-5 mt-5" >
  <div className="as">
    <h2 style={{paddingTop:'15px'}}>Wooden Toys</h2>
    <p style={{fontSize:'16px',paddingTop:'15px'}}>See All Toys <FaLongArrowAltRight />
</p>
  </div>
     <ProgressBar variant="success" now={20} className="pro" />
  <div className="row">
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png" alt="" style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Happy Flower</h6>
      <button className="button1">$38.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png"alt=""style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Lift Machine</h6>
      <button className="button1">$24.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png"alt=""style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Wooden Camera</h6>
      <button className="button1">$32.00 USD</button>
    </div>
  </div>
</div>
   <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
  <div className="card toy-card" style={{ border: 'none', backgroundColor: 'white' }}>
    <div className="card-body align-item-center text-center">
      <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png" alt="" style={{ width: '100%', paddingBottom: '20px' }}/>
      <h6 style={{ fontSize: '16px' }}>Little Rebbit</h6>
      <button className="button1">$16.00 USD</button>
    </div>
  </div>
</div>


  </div>

</div>
  
  <div className="back text-white text-center pb-5 pt-5" style={{ backgroundColor:' rgba(15, 1, 1, 0.3)'}}>
    <p className="pt-5 text-white fs-6"><b>About The Shop</b></p>
    <h2>Watch Our Story</h2>
    <p className="text-white">There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, <br /> demographic, even the consumer’s mood.</p>
    <FaCirclePlay className="icon2" />

  </div>

  <div className="text-center " style={{marginTop:'100px'}}>
    <p style={{color:'#91C400'}}>Made for Webflow</p>
    <h2>Simple & Colorful Ecommerce </h2>
    <h2> Template for Your Business</h2>
  </div>

<div className="container"style={{marginTop:'100px'}}>
  <div className="row">
    <div className="col-lg-6 col-md-12 col-sm-12 "style={{marginTop:'100px'}} >
      <h2>Available for FREE!</h2>
      <p style={{color:'lightgray',marginTop:'10px'}}>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
      <button className="button3">Get It Now!</button>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
      <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" style={{width:'100%',borderRadius:'30px'}}/>
    </div>
  </div>
</div>
<div className="container bg-white newsletter-box" style={{ marginTop: '80px', borderRadius: '30px' }}>
  <div className="row p-4 align-items-center">
    <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mb-md-0">
      <div className="d-flex align-items-center gap-3 flex-wrap text-center text-md-start">
        <RiArrowRightUpFill className="icon4" />
        <h2 className="mb-0">Subscribe to our newsletter <br />& get 10% discount!</h2>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="d-flex flex-column flex-md-row gap-3">
        <input type="text" placeholder="Enter Your Email Address" className="form-control input-field" />
        <button className="btn toy-button1">Subscribe</button>
      </div>
    </div>
  </div>
</div>



<div className="container" style={{marginTop:'90px'}}>
  <div>
  <p style={{textAlign:'center',color:'#91C400',fontSize:'12px'}}>@ElasticThemes</p>
  <h4 style={{textAlign:'center',fontSize:'28px',paddingBottom:'80px'}}>We're on Instagram!</h4></div>

  <div className="row ">
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" className="w-100" alt="" />
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" className="w-100" alt="" />
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" className="w-100" alt="" />
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" className="w-100" alt="" />
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" className="w-100" alt="" />
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6 insta">
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" className="w-100" alt="" />
    </div>
  </div>
  <div style={{textAlign:'center',marginTop:'80px'}}>
  <button className="btn6">see more photo</button></div>
</div>

<footer className="toy-footer">
      <div className="footer-top">
        <div className="footer-logo">ToyStore</div>

        <ul className="footer-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>

        <div className="footer-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-left">
          Created with love by <a href="#">Elastic Themes</a>
        </div>
        <div className="footer-right">
          Powered by <a href="#">Webflow</a> · 
          <a href="#">Style Guide</a> · 
          <a href="#">Licensing</a>
        </div>
      </div>
    </footer>


</div>
  );
};

export default Toy;
