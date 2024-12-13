import React, { useState, useEffect } from 'react';
import './info-section-1.css';
import normalPicUrl from '@assets/section_1_pic.svg';
import mobilePicUrl from '@assets/tboss_banner_1.svg'

const InfoSection1Pic = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getImageSrc = () => {
        if (windowWidth <= 767) {
            return mobilePicUrl;
        } else if (windowWidth <= 768) {
            return normalPicUrl;
        } else {
            return normalPicUrl;
        }
    };

    return (
        <div className="info-pic">
            <img src={getImageSrc()} alt="landing" className="landing-image" />
        </div>
    );

};

export default InfoSection1Pic;
