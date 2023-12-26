import React from 'react'
import Individualcard from './Individualcard'
import Roadmap from '../Roadmap'
import '../roadmap.css'

const Programming = () => {
    return (
        <>
            <Roadmap
                imageSrc="https://cdn.pixabay.com/photo/2023/12/08/09/13/vine-8437282_1280.jpg"
                heading="Roadmap for Web Development"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
                listItems={['React', 'Node', 'MongoDB', 'Express']}
                link="https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
            />

            <Individualcard />
        </>
    )
}

export default Programming