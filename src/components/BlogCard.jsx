import React from 'react';

const BlogCard = (props) => {
  return (
    <>
        {props.data.map((s) => {
               return (
                <div className="card blogcard col-lg-4 p-0" style={{ width: '20rem' }}>
                  <img src={s.imgURL} className="card-img-top " alt="Blog" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{s.title}</h5>
                    <div className="text-center">  <span className="text-secondary me-2">{s.date}</span>
                    <span className="text-secondary">{s.length}</span></div>
                  
                    <p className="text-center mt-3">{s.detail}</p>
                  </div>
                </div>
              );               

            })}
    </>
  );
}

export default BlogCard;
