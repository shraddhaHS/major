import React from 'react';
import BlogCard from '../components/BlogCard';
import Subscribe from '../components/subscribe';
const BlogsCard = () => {
  return (
    <>
      <div className='d-flex flex-column align-items-center container justify-content-center mt-4 text-white'>
        <h2>Brighter Futures, Bigger Smiles</h2>
        <p className='text-secondary me-auto ps-3 mt-3'>By Ixartz on April 24, 2022 - 5 min read</p>
        <div className="blogImg d-flex align-items-center justify-content-center me-2 mt-3">
          <img src="\images\blog-1-img.jpg" className='img-fluid rounded ' alt="" />
        </div>
        <div className="content m-5">
          <h3 className='mb-4'>DONATE & HELP KIDS</h3>
          <p>Empower underprivileged children to experience the joy of learning, playing, and growing, laying the foundation for brighter, happier futures with your invaluable contribution to this campaign.</p>

<p>Help poor children fight their way out of poverty. When it is hard to afford necessities like food, shelter, and clothing; education becomes a luxury that the poor give up. Illiteracy then leads to further poverty. Donate for child education in India, support them with fees, school supplies, footwear, transport and opportunities to showcase their talents.</p>
        <p>21% of India's children are severely underweight. Hungry children can not build the country's future. For India's poor children, the mid-day meal at school is their only proper meal in a day. Feed our children and their hopes by donating mid-day meals to our starving children in need to help them fight starvation and malnutrition, so they don’t have to live and learn on a hungry stomach.Donate to underfunded programs that are doing great work to provide the poor with necessities like food, shelter, education, senior care, and healthcare. These nonprofits are struggling to continue to help people as they are not receiving the necessary support. Help them with their efforts with your donations</p>
<h3 className='my-4'>DONATE & HELP KIDS </h3>
<p>Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation.</p>
 <p>Close to 145,000 of India’s are HIV+, and about 22,000 new infections occur every year. Having inherited an incurable disease for no fault of their own, the affected children soon become orphans and suffer from severe poverty, and social stigma. Donate to poor children who are fighting a deadly disease and help them get access to nutritious food and medical treatment.Those in extreme need are usually socially excluded and face a lack of basic necessitates for reasons like living in underserved areas or social stigma of being affected with an incurable illness. Donate to those in extreme need and help them with resources like food, medical care, livelihood resources, sanitation, education, etc. to enable them to lead a normal life.</p>

<h3 className='my-4'>The Heart of the Campaign:</h3>
<p>Aims to bridge the gap between dreams and reality. It's about turning aspirations into achievements, one step at a time. Whether it's ensuring access to quality education, providing essential healthcare, or fostering sustainable community development, your support is the catalyst for change.</p>
<h3 className='my-4'>Further Readings</h3> 
<ul className='list-unstyled  '>
<li><a href="">A Home for Every Child</a></li>
<li><a href="">Healing Hearts: Medical Expenses Fund</a></li>
<li><a href="">Tech for Tomorrow: Innovation Fund</a></li>

</ul>
        </div>
       
      </div>
  <div className='px-5 mx-1 mb-5 pb-5'>
    <Subscribe/>
  </div>
    </>
  );
}

export default BlogsCard;
