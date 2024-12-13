import { useState } from 'react';
import InfoSection1 from '@components/merchant/info-section-1/info-section-1';
import ErrorPopup from '@components/popup/popup';
import PopupRegister from '@components/merchant/popup/popup-register';
import '@styles/global.css';
import InfoSection2 from '@components/merchant/info-section-2/info-section-2';
import InfoSection3 from '@components/merchant/info-section-3/info-section-3';
import Header from '@components/merchant/header/header';
import Footer from '@components/merchant/footer/footer';
const MerchantPage = () => {

    const [isPopupErrorOpen, setIsPopupErrorOpen] = useState(false);
    const [popupErrorInfo, setPopupErrorInfo] = useState({ title: "", content: "" })
    const openErrorPopup = (title, content) => {
        console.log("open error");
        setPopupErrorInfo({ title: title, content: content })
        setIsPopupErrorOpen(true)
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState("");
    const openStep2Popup = (url) => {
        console.log("open step 2");
        setRedirectUrl(url);
        setIsPopupOpen(true);
    };
    return (
        <div className="landing-page">
            <Header />
            <InfoSection1 />
            <InfoSection2 />
            <InfoSection3 openRegisterPopup={openStep2Popup} openErrorPopup={openErrorPopup} />
            <ErrorPopup title={popupErrorInfo.title} content={popupErrorInfo.content} isOpen={isPopupErrorOpen} onClose={() => setIsPopupErrorOpen(false)} />
            <PopupRegister redirectUrl={redirectUrl} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            <Footer />
        </div>
    );
};

export default MerchantPage;
