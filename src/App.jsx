import React, { useState } from 'react'
import './App.css'
import Wedding from './Wedding'
import Toy from './Toy'
import Member from './Member'

const App = () => {
  const[tab,settab]=useState('tab1')
  return (
    <div>
      
<div className='bg-dark w-100 py-5'>
    <div className='container rounded-pill'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-2 div3'><div onClick={()=>settab('tab1')} className={tab=='tab1'?'active':'none'}><button className='w-100 rounded-pill py-3 btn3'><span>WEDDING</span></button></div></div>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-2 div3'><div onClick={()=>settab('tab2')} className={tab=='tab2'?'active':'none'}><button className='w-100 rounded-pill py-3 btn3'>TOY</button></div></div>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-2 div3'><div onClick={()=>settab('tab3')} className={tab=='tab3'?'active':'none'}><button className='w-100 rounded-pill py-3 btn3'>MEMBER</button></div></div>
      </div>
    </div>
</div>
    


<div style={{display:tab=='tab1'?'block':'none'}}>

      <Wedding/>
</div>
<div style={{display:tab=='tab2'?'block':'none'}}>

      <Toy/>
</div>
<div style={{display:tab=='tab3'?'block':'none'}}>

      <Member/>
</div>


    </div>
  )
}

export default App
