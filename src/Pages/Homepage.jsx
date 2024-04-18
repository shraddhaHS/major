import React, { useState } from 'react';
import Footer from '../components/Footer';
import CardLayout02 from '../components/CardLayout02';

const Homepage = () => {

  const [data, setData] = useState([
    {
      subhead: "Contribute for",
      head: "Communities",
      detail: "Support the communities for events, hackathons that can empower the communities to drive positive change and bring new ideas to life or the that domain",
      buttonText: "Contribute Now"
    },
    {
      subhead: "Donate for",
      head: "Social Cause",
      detail: "Support social causes that help in creating a better future, initiatives aimed at addressing social causes, such as health (research for cancer treatment) that empowers individuals and communities to drive positive change.",
      buttonText: "Donate Now"
    }
  ]);

  return (
    <>
      <section className='row container'>
        <div className="col-7 d-flex flex-column banner-text pt-3 ps-3">
          <h1 className=' mb-3'>Empowering Communities <br /> with <span className="text-danger">Transparent Funding</span> <br /> in the Era of <span className="text-danger">Web 3.0</span></h1>
          <p >"Experience a new level of trust in crowdfunding with <br /> our transparent, secure, and decentralized web3 <br /> platform."</p>
          <div>
            <button className="btn text-white campaign-btn">Start a Campaign</button>
            <button className="btn  ms-2 donate-btn">Donate</button>
          </div>
        </div>
        <div className="col-5 graphics_500 position-relative">
          <img src="public\images\gif.png" alt="" />
        </div>
      </section>
      <section>
        <div className='image ms-0 ps-0 mt-4'>
          <img src="public\images\USP INFOGRAPHIC.png" alt="" />
        </div>
      </section>
  
      <section>
        <h2 className='text-white text-center'>Choose your <span className="text-danger">Category</span></h2>
        <p className='text-center text-white'>Select which major category you want to support for contribution or donation.</p>
        <div className="d-flex align-items-center justify-content-center gx-2 pt-4">
          <CardLayout02 data={data} />
        </div>
      </section>
    
      <section className='d-flex flex-column align-items-center'>
        <h2 className='text-white'>
          "Numerous Individuals and Organizations are Rallying <br />Together for <span className="text-danger">Social Causes</span> and <span className="text-danger">Community Support</span> in the <br />Web 3.0 Age - Now It's Your Opportunity to <span className="text-danger">Join Us!</span>"
        </h2>
        <button className="btn btn-danger mt-5 btn-lg">Start a Campaign</button>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
