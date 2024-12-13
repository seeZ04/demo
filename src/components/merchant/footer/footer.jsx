import './footer.css';
import location from '@assets/location.svg';
import call from '@assets/call.svg';
import qr from '@assets/qr_code.svg';
import chStore from '@assets/ch_store.svg';
import appStore from '@assets/app_store.svg';
import scrollButtonImage from '@assets/button_scroll_top.png';

const Footer = () => {

    const handleScroll = () => {
        console.log("Button clicked!");
        const targetSection = document.getElementById("section-1-id-scroll");
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="footer">

            <div className='button-scroll-top' >
                <img src={scrollButtonImage} alt="scroll button" className="" onClick={handleScroll} 
                />
            </div>
            <div className='footer-content'>
                <div className='contact-info'>
                    <div className='company-info'>
                        <p>CÔNG TY TÀI CHÍNH TNHH MTV TNEX</p>
                        <a>Mã số thuế: 0301516782</a>
                    </div>
                    <div className='info-row'>
                        <img src={location} alt="scroll button" className="landing-image" />
                        <p>Tầng KT, Thăng Long Tower, 98A Ngụy Như Kon Tum, P. Nhân Chính,
                            Q. Thanh Xuân, Hà Nội</p>
                    </div>
                    <div className='info-row phone-number'>
                        <img src={call} alt="scroll button" className="landing-image" />
                        <p href="tel:1800599982">1800 599982</p>
                    </div>
                </div>
                <div className='app-info'>
                    <div className='app-group'>
                        <p>Tải TNEX ngay</p>
                        <div className="app-image">
                            <div className="qr-image">
                                <div className="link-image">
                                    <a
                                        href={GOOGLE_PLAY_TNEXT}
                                    >
                                        <img src={chStore} alt="" />
                                    </a>
                                </div>
                                <div className="link-image">
                                    <a href={APP_STORE_TNEX}>
                                        <img src={appStore} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
