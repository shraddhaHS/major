import React from 'react'

const Subscribe = () => {
  return (
   <>
     <div className="row ms-1 pt-4">
  <div className="col-lg-6 ms-5">
    <h1 className=' text-white mb-3 '>Subscribe to our <br /><span className="text-danger">Newsletters</span></h1>
    <p className='text-white opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
  </div>

  <div className="col-lg-4 d-flex align-items-center ms-5">
    <div className="rounded-pill overflow-hidden subscribe d-flex">
      <input type="email" className="form-control border-0" placeholder="Enter your email" />
      <button className="btn-danger btn rounded-pill ms-2 ">Subscribe</button>
    </div>
  </div>
</div></>
  )
}

export default Subscribe