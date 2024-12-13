import React, { useEffect, useRef } from "react";
import './credit-popup-register.css';
import PropTypes from 'prop-types';
import picUrl from '@assets/credit/credit-step-2.png'

function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    if ((/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream) {
        return 'iOS';
    }

    return 'Unknown';
}

const PopupRegister = ({ isOpen, onClose, redirectUrl }) => {
    const popupRef = useRef();

    useEffect(() => {
        if (isOpen && popupRef.current) {
            popupRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;
    const deviceType = getDeviceType();

    const handleRedirect = () => {
        if (deviceType == 'Android')
            window.location.href = GOOGLE_PLAY_TNEXT;
        else if (deviceType == 'iOS')
            window.location.href = APP_STORE_TNEX;
        else
            window.location.href = 'https://www.tnex.com.vn';


    };
    console.log("deviceType " + deviceType)

    return (
        <div className="credit-popup-overlay" onClick={onClose}>
            <div className="popup" ref={popupRef} tabIndex={-1}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="popup-image">
                    <img src={picUrl} alt="" className="shop-image" />
                </div>
                <div className="title">
                    <p className="title-1">
                        Chỉ còn 1 bước nữa!
                    </p>
                    <p className="title-2">
                        Cảm ơn bạn đã quan tâm đến chương trình Tiêu Trước - Trả sau, chỉ còn 1 bước đơn giản để hoàn tất hồ sơ đăng ký vay của bạn trên ứng dụng TNEX.
                    </p>
                </div>
                <button onClick={handleRedirect}>Tải ứng dụng TNEX ngay</button>
            </div>
        </div>
    );
};

PopupRegister.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    redirectUrl: PropTypes.string
};

export default PopupRegister;
