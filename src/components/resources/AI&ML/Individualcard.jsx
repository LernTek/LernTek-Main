import React, { useRef } from 'react'
import '../Individualcard.css'
import { aiml } from './aimldata'

const Individualcard = () => {
    const iframeRef = useRef(null);

    const handleFullScreen = () => {
        if (iframeRef.current) {
            const element = iframeRef.current;

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    };

    return (
        <>
            <section className='coursesCard'>
                <div className='container grid2'>
                    {aiml.map((val, index) => (
                        <div className='items' key={index}>
                            <div className='content flex'>
                                <iframe
                                    src={val.resourceLink}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    ref={iframeRef}
                                ></iframe>
                            </div>
                            <div className='price'>
                                <h2>{val.title}</h2>
                            </div>
                            <p>{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};


export default Individualcard