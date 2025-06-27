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
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-1 div3'><div><button className=''>tab</button></div></div>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-1 div3'><div><button className=''>tab</button></div></div>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center py-1 div3'><div><button className=''>tab</button></div></div>
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
