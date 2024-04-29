import React from 'react';
import { Carousel } from 'react-bootstrap'; // Assuming you've installed react-bootstrap
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Subscribe from '../components/subscribe'; // Importing Subscribe component assuming it's necessary

const Campaign = () => {
  return (
    <>
      <h2 className='text-white text-uppercase mt-5 text-center'>Donate & Help Kids!</h2>
      <section className='container text-white '>
        <div className="row align-items-center">
          <div className="col-8">
            <div className='carousel-img pe-5'>
              <Carousel>
                <Carousel.Item>
                  <video controls className='img-fluid rounded w-100'>
                    <source src="\videos\video1.mp4" type="video/mp4" />
                  
                  </video>
                </Carousel.Item>
                <Carousel.Item>
                  <video controls className='img-fluid rounded w-100'>
                    <source src="\videos\video1.mp4" type="video/mp4" />
                  </video>
                </Carousel.Item>
                <Carousel.Item>
                  <video controls className='img-fluid rounded w-100'>
                    <source src="\videos\video1.mp4" type="video/mp4" />
                  </video>
                </Carousel.Item>
           
              </Carousel>
            </div>
          </div>
          <div className="col-4">
            <button className='btn text-white donate-now-btn mb-5'>DONATE NOW</button>
            <p className='values'>104</p>
            <p className='subtext text-uppercase'>donors</p>
            <p className='values mt-5'>$9,850</p>
            <p className='subtext text-uppercase'>Raised</p>
            <div className='progress-bar mt-5'><div className="progress-bar-filled"></div></div>
            <p>Goal: <span>$25,000</span> <span className='float-end me-5 pe-4'> Days Left: 57</span></p>
          </div>
        </div>
        <h2 className='text-white text-uppercase mt-5 mb-4'>Donate & Help Kids!</h2>
        <p className='w-75 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <div className="d-flex mt-5">
          <button className="btn btn-blue">SHARE</button>
          <button className="btn btn-skyblue mx-4">TWEET</button>
          <button className="btn btn-green">EMAIL</button>
        </div>
      </section>

      <section className='mx-4'>
        <div className='tabs'>
          <ul className="nav nav-pills nav-fill py-3 mx-5 w-75">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">STORY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SUPPORTERS  <div className='fs-small'>109</div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className='text-white story container mt-5'>
          <h2>Story</h2>
          <p>Help poor children fight their way out of poverty. When it is hard to afford necessities like food, shelter, and clothing; education becomes a luxury that the poor give up. Illiteracy then leads to further poverty. Donate for child education in India, support them with fees, school supplies, footwear, transport and opportunities to showcase their talents.</p>
          <p>21% of India's children are severely underweight. Hungry children can not build the country's future. For India's poor children, the mid-day meal at school is their only proper meal in a day. Feed our children and their hopes by donating mid-day meals to our starving children in need to help them fight starvation and malnutrition, so they don’t have to live and learn on a hungry stomach.Donate to underfunded programs that are doing great work to provide the poor with necessities like food, shelter, education, senior care, and healthcare. These nonprofits are struggling to continue to help people as they are not receiving the necessary support. Help them with their efforts with your donations</p>
          <p>Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation.</p>
          <p>Close to 145,000 of India’s are HIV+, and about 22,000 new infections occur every year. Having inherited an incurable disease for no fault of their own, the affected children soon become orphans and suffer from severe poverty, and social stigma. Donate to poor children who are fighting a deadly disease and help them get access to nutritious food and medical treatment.Those in extreme need are usually socially excluded and face a lack of basic necessitates for reasons like living in underserved areas or social stigma of being affected with an incurable illness. Donate to those in extreme need and help them with resources like food, medical care, livelihood resources, sanitation, education, etc. to enable them to lead a normal life.</p>
          <p>For now we are taking it one day at a time. Bonnie has spent her life helping others heal, be stronger, healthier and happier. Now she needs to get herself better. Your help will ease the burden and make this recovery a little less stressful.</p>
          <p className='mt-5'>Thanks for your time & support,</p>
          <p className='my-4'>Ethan & Bonnie</p>
          <div className='d-flex justify-content-between'>
            <div>
              <p>Help Kids raise $25,000 by making a donation. <br /><p className='fw-lighter'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p> </p>
            </div>
            <button className="btn btn-md wallet me-4">DONATE NOW</button>
          </div>
        </div>

        <div className='support d-flex justify-content-between align-items-center px-5 py-5'>
          <h3>Still can’t find your answer?</h3>
          <button className="btn btn-md btn-light px-4 py-2 me-5">Contact Support</button>
        </div>
      </section>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default Campaign;
