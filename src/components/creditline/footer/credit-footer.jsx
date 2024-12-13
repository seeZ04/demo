import './credit-footer.css';
import location from '@assets/location.svg';
import call from '@assets/call.svg';
import qr from '@assets/qr_code.svg';
import chStore from '@assets/ch_store.svg';
import appStore from '@assets/app_store.svg';
import footerImage from '@assets/credit/credit-footer.png';

const CreditFooter = () => {
    return (
        <div className="credit-footer">
            <div className='footer-content'>
                <div className='contact-info'>
                    <div className='company-info'>
                        <p>CÔNG TY TÀI CHÍNH TNHH MTV TNEX</p>
                        <a>Mã số thuế: 0301516782</a>
                    </div>
                    <div className='info-row'>
                        <img src={location} alt="n" className="landing-image" />
                        <p>Tầng KT, Thăng Long Tower, 98A Ngụy Như Kon Tum, P. Nhân Chính,
                            Q. Thanh Xuân, Hà Nội</p>
                    </div>
                    <div className='info-row'>
                        <img src={call} alt="n" className="landing-image" />
                        <p className="info-row-mobile" href="tel:19006954">1900 6954</p>
                    </div>
                </div>
                <div className='app-info'>
                    <div className='app-group'>
                        <div>Tải TNEX ngay</div>
                        <div className="app-image">
                            <div className="link-image">
                                <a href={GOOGLE_PLAY_TNEXT}>
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
            <div className="footer-image">
                <img src={footerImage} alt="" className="" />
            </div>
        </div>
    )
};

export default CreditFooter;
