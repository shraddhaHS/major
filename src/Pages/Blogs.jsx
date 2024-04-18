import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import Subscribe from '../components/subscribe';
import { Link } from 'react-router-dom';
const Blogs = () => {
    const [data, setData] = useState([{
        imgURL: '/images/blog-1.png',
        title: 'Brighter Futures, Bigger Smiles',
        date: 'April 30, 2023',
        length: '7 minutes read',
        detail: 'Empower underprivileged children to experience the joy of learning, playing, and growing, laying the foundation for brighter, happier futures with your invaluable contribution to this campaign.'
    },
    {
        imgURL: '/images/Data processing _Outline 1.png',
        title: 'Ignite Minds, Transform Lives',
        date: 'November 30, 2023',
        length: '7 minutes read',
        detail: 'Join our campaign to provide underprivileged students with the gift of education and empower them to break the cycle of poverty.'

    },
    {
        imgURL: '/images/Startup_Outline-2 1.png',
        title: 'Healing Hearts: Medical Expenses Fund',
        date: 'November 30, 2023',
        length: '7 minutes read',
        detail: 'Support individuals facing medical challenges by contributing to our campaign'


    },
    {
        imgURL: '/images/Notifications_Outline 1.png',
        title: 'Tech for Tomorrow: Innovation Fund',
        date: 'November 30, 2023',
        length: '7 minutes read',
        detail: 'Join us in fostering technological innovation by supporting our campaign, empowering inventors and visionaries to create solutions that address pressing challenges.'

    }
        ,
    {
        imgURL: '/images/Data processing _Outline 1 (1).png',
        title: 'Rebuilding Hope: Disaster Relief Fund',
        date: 'November 30, 2023',
        length: '7 minutes read',
        detail: 'Support our campaign for disaster relief, providing immediate assistance and long-term support to communities affected by natural disasters.'

    }
        ,
    {
        imgURL: '/images/Startup_Outline-2 1 (1).png',
        title: 'A Home for Every Child',
        date: 'November 30, 2023',
        length: '7 minutes read',
        detail: 'Join us in creating a safe haven for homeless and orphaned children, providing them with a nurturing environment where they can grow, learn, and thrive.'

    }

    ]);
    return (
        <>
            <section className='mx-5'>
                <h2 className="text-capitalize text-center text-white">our blogs</h2>
                <p className='blog-sub my-4'>Get the insights of crowdunding & web3 through our eye</p>
                <div className="mx-5 my-5 px-4" >
                    <Link to="/pages/blogs/card" className='row active-link d-flex gy-5 justify-content-between'><BlogCard data={data} /></Link>
                </div>
                <Subscribe />
            </section>

            <Footer />
        </>
    )
}

export default Blogs