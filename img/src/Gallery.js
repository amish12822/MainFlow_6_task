import React from 'react';
import './gallery.css';

import Img1 from './photo/1.jpg';
import Img2 from './photo/2.jpg';
import Img3 from './photo/3.jpg';
import Img4 from './photo/4.jpg';
import Img5 from './photo/5.jpg';
import Img6 from './photo/6.jpg';
import Img7 from './photo/7.jpg';
import Img8 from './photo/8.jpg';
import Img9 from './photo/9.jpg';
import Img10 from './photo/10.jpg';
import Img11 from './photo/11.jpg';
import Img12 from './photo/12.jpg';
import Img13 from './photo/13.jpg';
import Img14 from './photo/14.jpg';
import Img15 from './photo/15.jpg';
import Img16 from './photo/16.jpg';
import Img17 from './photo/17.jpg';
import Img18 from './photo/18.jpg';
import Img19 from './photo/19.jpg';
import Img20 from './photo/20.jpg';
import Img21 from './photo/21.jpg';
import Img22 from './photo/22.jpg';
import Img23 from './photo/23.jpg';
import Img24 from './photo/24.jpg';
import Img25 from './photo/25.jpg';
import Img26 from './photo/26.jpg';
import Img27 from './photo/27.jpg';
import Img28 from './photo/28.jpg';
import Img29 from './photo/29.jpg';
import Img30 from './photo/30.jpg';
import Img31 from './photo/31.jpg';
import Img32 from './photo/32.jpg';


const Gallery = () => {

    let data =[
        {
            id:1,
            imgSrc: Img1,
        },
        {
            id:2,
            imgSrc: Img2,
        },
        {
            id:3,
            imgSrc: Img3,
        },
        {
            id:4,
            imgSrc: Img4,
        },
        {
            id:5,
            imgSrc: Img5,
        },
        {
            id:6,
            imgSrc: Img6,
        },
        {
            id:7,
            imgSrc: Img7,
        },
        {
            id:8,
            imgSrc: Img8,
        },
        {
            id:9,
            imgSrc: Img9,
        },
        {
            id:10,
            imgSrc: Img10,
        },
        {
            id:11,
            imgSrc: Img11,
        },
        {
            id:12,
            imgSrc: Img12,
        },
        {
            id:13,
            imgSrc: Img13,
        },
        {
            id:14,
            imgSrc: Img14,
        },
        {
            id:15,
            imgSrc: Img15,
        },
        {
            id:16,
            imgSrc: Img16,
        },
        {
            id:17,
            imgSrc: Img17,
        },
        {
            id:18,
            imgSrc: Img18,
        },
        {
            id:19,
            imgSrc: Img19,
        },
        {
            id:20,
            imgSrc: Img20,
        },
        {
            id:21,
            imgSrc: Img21,
        },
        {
            id:22,
            imgSrc: Img22,
        },
        {
            id:23,
            imgSrc: Img23,
        },
        {
            id:24,
            imgSrc: Img24,
        },
        {
            id:25,
            imgSrc: Img25,
        },
        {
            id:26,
            imgSrc: Img26,
        },
        {
            id:27,
            imgSrc: Img27,
        },
        {
            id:28,
            imgSrc: Img28,
        },
        {
            id:29,
            imgSrc: Img29,
        },
        {
            id:30,
            imgSrc: Img30,
        },
        {
            id:31,
            imgSrc: Img31,
        },
        {
            id:32,
            imgSrc: Img32,
        },
    ]
    return (
        <>
        <div className="gallery">
            {data.map((item, index) =>{
                return(
                    <div className="pics" key={index} >
                         <img src={item.imgSrc} style={{width:'100%'}} alt=''/>
                    </div>   
                )
            })}
        </div>
        </>
    )
} 
export default Gallery;