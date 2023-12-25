import React from 'react'
import '../Individualcard.css'
import { programming } from './programmingdata'

const Individualcard = () => {
    return (
        <>
            <section className='coursesCard'>
                <div className='container grid2'>
                    {programming.map((val) => (
                        <div className='items'>
                            <div className='content flex'>
                                <iframe src={val.resourceLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className='price'>
                                <h2>
                                    {val.title}
                                </h2>
                            </div>
                            <p>{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Individualcard