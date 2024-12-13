import React, { useEffect, useRef } from "react";
import './popup.css';
import PropTypes from 'prop-types';

const Popup = ({ title, content, isOpen, onClose }) => {
    const popupRef = useRef();

    useEffect(() => {
        if (isOpen && popupRef.current) {
            popupRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    //TODO update error message and error key
    const errorList = [
        { key: 'PHONE_NUMBER_NOT_EMPTY', message: 'Số điện thoại không được trống' },
        { key: 'PHONE_NUMBER_INVALID', message: 'Số điện thoại không hợp lệ' },
        { key: 'CCCD_NOT_EMPTY', message: 'Số căn cước công dân không được trống' },
        { key: 'CCCD_INVALID', message: 'Số căn cước công dân không hợp lệ' }
    ];
    const foundError = errorList.find(error => error.key === content);

    return (
        <div className="popup-overlay-error" onClick={onClose}>
            <div className="popup-error" ref={popupRef} tabIndex={-1}>
                <div className="popup-error-content">
                    <div className="title-error">{title}</div>
                    <div className="content-error">
                        <div className="content-error">
                            {foundError ? (
                                <p key={foundError.key} className="error-message">
                                    {foundError.message}
                                </p>
                            ) : (
                                <p className="error-message">{content}</p>
                            )}
                        </div>
                    </div>
                    <button onClick={onClose}>Tiếp tục</button>
                </div>
            </div>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Popup;
