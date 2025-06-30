import React from 'react'
import './Member.css'
const Member = () => {
  return (
    <div>
    <div className='container1'>
      <div className='container abc'>
        <div className='row '>
          <div className='col-lg-6 col-sm-12 mt-5 pt-5'>
            <h1>Access a library of free design resources</h1>
            <p>The best resources and books from around the web, collected and curated for your reading.</p>
            <button className='btn text-white btn1 px-3'>Get Access Now</button>
          </div>
          <div className='col-lg-6 col-sm-12 my-5 py-5'>
            <div className='text-center'>
              <img src="https://cdn.prod.website-files.com/62aee78456e4207786ac4d18/62aeefb7ef1a0b764b386779_Design%20Resources%20Home.svg" className='w-50' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='container bg-white'>
      <div className='d-flex mt-5 pt-5' style={{justifyContent:'space-between'}}>
        <div><h3 className='h3'>Featured Resources</h3></div>
        <div><button className='btn2 rounded py-2 px-4'>See All Resources</button></div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card border-0'>
            <img src="https://cdn.prod.website-files.com/62aee78456e420f166ac4d1d/62b0e7a32dd6005e84c2ec75_Ebook%20Cover%201.svg" className='w-100 rounded' alt="" />
            <h6 className='h6 pt-3'>By Nikolai Bain</h6>
            <h2 className='h2'>Grids & Alignment</h2>
            <p className='p1'>Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card border-0'>
            <img src="https://cdn.prod.website-files.com/62aee78456e420f166ac4d1d/62b0e7b28cc691b2cd70c6ec_Ebook%20Cover%202.svg" className='w-100 rounded' alt="" />
            <h6 className='h6 pt-3'>By Maxwell Milton</h6>
            <h2 className='h2'>Remote Work for Design Teams</h2>
            <p className='p1'>Repudiandae asperiores excepturi repellat minus id et. Saepe molestiae  officiis eum Dolorib accusantium fugit et aut. Reicie</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card border-0'>
            <img src="https://cdn.prod.website-files.com/62aee78456e420f166ac4d1d/62b0e7c4e63aa2b80006a1d4_Ebook%20Cover%203.svg" className='w-100 rounded' alt="" />
            <h6 className='h6 pt-3'>By Franko Realguy</h6>
            <h2 className='h2'>Design Systems in Product Teams</h2>
            <p className='p1'>Ut libero molestias excepturi veniam et dicta assumenda tenetur voluptatem. Qui dolor officiis eum Dolorib.</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card border-0'>
            <img src="https://cdn.prod.website-files.com/62aee78456e420f166ac4d1d/62b0e909698fe432638ec008_Ebook%20Cover%204.svg" className='w-100 rounded' alt="" />
            <h6 className='h6 pt-3'>By Nikolai Bain</h6>
            <h2 className='h2'>All in One Color Handbook</h2>
            <p className='p1'>Vel esse et temporibus inventore alias assumenda. Repellat sit accusamus id sed est animi vel. Odit non ut reprehenderit consequatur sit aliquam. Aut aliquid consequatur</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card border-0'>
            <img src="https://cdn.prod.website-files.com/62aee78456e420f166ac4d1d/62b0e91246a49c9989b055c0_Ebook%20Cover%205.svg" className='w-100 rounded' alt="" />
            <h6 className='h6 pt-3'>By Tim Tommons</h6>
            <h2 className='h2'>Digital Wellbeing and Support</h2>
            <p className='p1'>Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus. Reiciendis recusandae minima quod qui. Eum dicta et nihil ad et nam. Vitae et itaque porro. Ipsa distinctio laboriosam veritatis. Minus quia eos ut.</p>
          </div>
        </div>
      </div>
    </div>



    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-lg-6 col-md-8 col-sm-12 m-auto text-center'>
          
          <h1 className='mt-5 text-white h3'>Get more great resources</h1>
          <h4 className='h4 px-5 pt-3'>Get the latest design resources from across the web. Straight to your inbox.</h4>
        </div>
      </div>
      <div className='col-lg-4 m-auto text-center'>

          <div className='d-flex text-center my-5 pb-5' style={{justifyContent:'space-around'}}>
            <input type="text" placeholder='Enter your email' className='px-4 rounded py-2 w-50'/>
            <button className='btn4 rounded px-4 w-50 mx-2'>Subscribe</button>
          </div>
      </div>
    </div>





<div className='container bg-white'>
    <div className='row'>
        <div className='col-lg-6 col-sm-12'>
          <img src="https://cdn.prod.website-files.com/62aee78456e4207786ac4d18/62aeebbbc7c1e424f6724096_Memberbase%20Logo-1.svg" className='w-75 pt-5' alt="" />
          <p className='p3 pt-5'>Built by Nikolai Bain.</p>
          <p className='p3 '>Powered by Webflow.</p>
          <p className='p3 pt-3 pb-5'>© 2022 Memberbase. All Rights Reserved.</p>
        </div>
        <div className='col-lg-4 col-sm-12 '>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <div>
              <h6 className='pb-2 pt-5'>Website</h6>
              
                <li>Home</li>
                <li>Resources</li>
                <li>Contact</li>
                <li>Ebook (CMS)</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </div>
            <div className='px-5'>
              <h6 className='pb-2 pt-5'>Membership</h6>
                <li>Sign In</li>
                <li>Sign Up</li>
                <li>User Account</li>
                <li>Reset Password</li>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-sm-12 px-2 pt-5 pb-5'>
          <h6 className='pb-2'>Admin</h6>
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>Instructions</li>
            <li>Password</li>
            <li>404</li>
        </div>
    </div>
</div>
    </div>
  )
}

export default Member
