import React from 'react'
import './Member.css'
const Member = () => {
  return (
    <div className='container1'>
      <div className='container abc'>
        <div className='row'>
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
  )
}

export default Member
