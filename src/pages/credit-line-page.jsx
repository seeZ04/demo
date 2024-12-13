import { useState } from 'react';
import '@styles/global.css';
import credit_bg from '@assets/credit/credit_bg.png'
import CreditHeader from '@components/creditline/header/credit-header'
import CreditLoanFrom from '@components/creditline/credit-loan-form/credit-loan-form'
import CreditLoanGuidance from '@components/creditline/loan-guidance/loan-guidance'
import CreditLoanBenefit from '@components/creditline/loan-benefit/loan-benefit'
import CreditLoanRequirement from '@components/creditline/loan-requirement/loan-requirement'
import CreditFooter from '@components/creditline/footer/credit-footer'
import ErrorPopup from '@components/popup/popup';
import PopupRegister from '@components/creditline/popup/credit-popup-register';


const CreditLinePage = () => {
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
        <>
            <div className="credit-line-page">
                <CreditHeader />
                <div className="credit-back-ground">
                    <img src={credit_bg} alt="" />
                </div>
                <div className="credit-back-ground-hidden">
                </div>
                <div className="credit-content">
                    <CreditLoanFrom openRegisterPopup={openStep2Popup} openErrorPopup={openErrorPopup} />
                    <div className="credit-info">
                        <CreditLoanGuidance />
                        <div className="credit-back-ground-2"> </div>
                        <CreditLoanBenefit />
                        <CreditLoanRequirement />
                    </div>
                    <CreditFooter />
                </div>
                <ErrorPopup title={popupErrorInfo.title} content={popupErrorInfo.content} isOpen={isPopupErrorOpen} onClose={() => setIsPopupErrorOpen(false)} />
                <PopupRegister redirectUrl={redirectUrl} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            </div>
        </>

    );
};

export default CreditLinePage;
