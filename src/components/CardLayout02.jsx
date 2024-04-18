import React from 'react'

const CardLayout02 = (props) => {
    return (
        <>
            {props.data.map((s) => {
                return <div div className="card2 text-white p-5 d-flex flex-column align-items-center" >
                    <h3>{s.subhead}</h3>
                    <h3 className='text-danger'>{s.head}</h3>
                    <hr className='ps-auto bg-danger '/>
                    <p className="text-center">{s.detail}</p>
                    <button className="btn btn-danger mt-3">{s.buttonText}</button>
                </div >

            })}
        </>
    )
}

export default CardLayout02