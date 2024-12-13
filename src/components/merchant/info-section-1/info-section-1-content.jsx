import './info-section-1.css';
import check_green from '@assets/check_green.png';
import React, { useState } from 'react';
import PopupRegister from '@components/merchant/popup/popup-register'

const InfoSection1Content = () => {

    const [isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupRegisterOpen(true); // Mở popup
    };

    const handleClosePopup = () => {
        setIsPopupRegisterOpen(false); // Đóng popup
    };

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

    // prepare data
    const vendorName = 'T BOSS';
    const venderDescription = "Khoản vay dành cho khách hàng kinh doanh<br> tối thiểu 6 tháng trên sàn thương mại điện tử:<br> Tiktok, Shopee, Lazada";
    const conditions = [
        { renderText: "Không cần thế chấp<br><strong>Nhận tới 100.000.000đ</strong>" },
        { renderText: "Giải ngân siêu tốc, không cần giấy tờ<br>thủ tục <strong>Trong vòng 4h online 100%<strong>" },
        { renderText: "Thời hạn dài nhất thị trường<br><strong>Tới 36 tháng</strong>" },
        { renderText: "Lãi suất hấp dẫn từ 3.894đ/ngày<br><strong>(Với khoản vay từ 10tr)</strong>" }
    ];

    return (
        <div className='section-content'>
            <h1 className='header-text'>{vendorName}</h1>
            <span className='body-text' dangerouslySetInnerHTML={{ __html: venderDescription }}></span>
            <div className='list-item'>
                <ul>
                    {conditions.map((item, index) => (
                        <li key={index}>
                            <img src={check_green} alt="Check icon" className="icon-check" />
                            <span dangerouslySetInnerHTML={{ __html: item.renderText }}></span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="register-button" onClick={handleScroll}>ĐĂNG KÝ NGAY</button>
        </div>
    )
};

export default InfoSection1Content;