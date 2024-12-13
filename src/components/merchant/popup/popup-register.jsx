import React, { useEffect, useRef } from "react";
import './popup-register.css';
import PropTypes from 'prop-types';
import picUrl from '@assets/shop_image.png'

const PopupRegister = ({ isOpen, onClose, redirectUrl }) => {
    const popupRef = useRef();

    const handleRedirect = () => {
        window.location.href = redirectUrl;
    };

    useEffect(() => {
        if (isOpen && popupRef.current) {
            popupRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" ref={popupRef} tabIndex={-1}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="popup-image">
                    <img src={picUrl} alt="" className="shop-image" />
                </div>
                <div className="popup-content">
                    <div className="title">
                        <p>
                            Bước 2:
                        </p>
                        <p>
                            Đăng nhập & Thêm shop
                        </p>
                    </div>
                    <div className="content-1">Để đăng ký khoản vay, bạn cần đăng nhập tài khoản Thương mại điện tử bạn đang sở hữu và bấm “Thêm shop” để tích hợp và xét duyệt với TNEX.</div>
                    <button onClick={handleRedirect}>Tiếp tục</button>
                </div>
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
