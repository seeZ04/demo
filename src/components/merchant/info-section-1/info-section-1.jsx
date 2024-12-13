import './info-section-1.css';
import InfoSection1Content from './info-section-1-content';
import InfoSection1Pic from './info-section-1-pic';
import scrollButtonImage from '@assets/button_scroll.svg';

const InfoSection1 = () => {

    const handleScroll = () => {
        console.log("Button clicked!");
        const targetSection = document.getElementById("section-3-id-scroll");
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div>
            <div className="section-1" id="section-1-id-scroll">
                <div className="hidden-header"></div>
                <div className="landing-row">
                    <InfoSection1Content />
                    <InfoSection1Pic />
                </div>
                <div className="eclipse"></div>
                <div className='scroll-button'>
                    <img src={scrollButtonImage} alt="scroll button" className="landing-image" onClick={handleScroll} />
                </div>
            </div>
        </div>
    );
}

export default InfoSection1;