import './credit-loan-form.css';
import check_green from '@assets/check_green.png'
import React, { useState, useRef } from 'react';
import mbpdf2 from '@assets/credit/MB02.pdf';
import ReactDOM from "react-dom";
import { usePdf } from '@mikecousins/react-pdf';

const CreditLoanForm = ({ openRegisterPopup, openErrorPopup }) => {

    const [formData, setFormData] = useState({
        loan_amount: 0,
        full_name: '',
        phone_number: '',
        identity_card_number: '',
        industry: '',
        address: '',
        partner_code: 'tnex',
        type: '0' //credit line
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [errors, setErrors] = useState({
        full_name: '',
        phone_number: ''
    });
    const handleOpenPopup = () => {
         setIsPopupOpen(true);
    };

    const [showPdf, setShowPdf] = useState(false);
    const handleShowPdf = () => {
        setShowPdf(!showPdf);
        setPage(page + 1);
    };
    const [page, setPage] = useState(0);
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
        file: 'MB02.pdf',
        page,
        canvasRef,
    });
    // Validation rules
    const validateField = (name, value) => {
        switch (name) {
            case "full_name":
                if (!value) return "Yêu cầu nhập họ tên";
                if (value.length < 3) return "Họ tên phải có ít nhất 3 ký tự";
                return "";

            case "phone_number":
                if (!value) return "Yêu cầu nhập số điện thoại";
                if (!/^\d{10,11}$/.test(value)) return "Vui lòng nhập đúng định dạng số điện thoại";
                return "";
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = Object.keys(formData).reduce((acc, key) => {
            acc[key] = validateField(key, formData[key]);
            return acc;
        }, {});

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        if (!hasErrors) {
            try {
                setIsLoading(true);
                var apiPath = "/api/v1/financial/tnex-plat/save-infor-customer";

                const response = await fetch(apiPath, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                    mode: 'cors',
                });

                console.log(JSON.stringify(formData));
                if (response.ok) {
                    const result = await response.json();
                    if (result.responseStatus.errorCode === "00") {
                        openRegisterPopup();
                    } else {
                        setIsLoading(false);
                        if (result && result.responseStatus && result.responseStatus.message) {
                            openErrorPopup("Xảy ra lỗi", result.responseStatus.message);
                        } else {
                            openErrorPopup("Xảy ra lỗi", "Đã xảy ra lỗi không xác định.");
                        }
                    }
                } else {
                    const errorResult = await response.json();
                    setIsLoading(false);
                    console.error("Error Response:", errorResult);
                }
            } catch (error) {
                console.error("Network Error:", error);
                setIsLoading(false);
                openErrorPopup("Xảy ra lỗi", "Không thể kết nối tới server.");
            }
            finally {
                setIsLoading(false);
            }
        } else {
            console.log("Validation Errors:", newErrors);
        }
    };

    return (
        <> <form className="credit-loan-form" onSubmit={handleSubmit}>
            <div>
                <div className='text-1'>
                    Tiêu trước trả sau hạn mức lên tới
                </div>
                <div className='text-2'>
                    20.000.000đ
                </div>
            </div>
           
            <div className='group-button'>
                <div className='button-1'>
                    <img src={check_green} alt="Check icon" className="icon-check" />
                    <p>Miễn lãi lên tới 40 ngày</p>
                </div>
                <div className='button-1'>
                    <img src={check_green} alt="Check icon" className="icon-check" />
                    <p>Giải ngân 100% online</p>
                </div>
                <div className='button-1'>
                    <img src={check_green} alt="Check icon" className="icon-check" />
                    <p>Ứng tiền siêu tốc</p>
                </div>
                <div className='button-1'>
                    <img src={check_green} alt="Check icon" className="icon-check" />
                    <p>Không cần thế chấp tài sản</p>
                </div>
            </div>
            <div>
                <div className="form-group info-input">
                    <label htmlFor="full_name">Họ tên</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Nhập đầy đủ họ tên"
                        className={errors.full_name ? "input-error" : ""}
                    />
                    {errors.full_name && <span className="error-text">{errors.full_name}</span>}
                </div>

                <div className="form-group info-input">
                    <label htmlFor="phone_number">Số điện thoại</label>
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                        className={errors.phone_number ? "input-error" : ""}
                    />
                    {errors.phone_number && <span className="error-text">{errors.phone_number}</span>}
                </div>
            </div>
            <div className='form-group button'>
                <button type="submit" className="submit-btn" disabled={Object.values(errors).some((error) => error)}>
                    ĐĂNG KÝ NGAY
                </button>
                <p onClick={handleShowPdf} >Bằng việc nhấn vào nút Đăng ký, tôi cam kết rằng đã đọc, hiểu và đồng ý với nội dung của <span>Điều khoản, điều kiện về bảo vệ dữ liệu cá nhân.</span></p>
            </div>
        </form>
            {isLoading && <div className="blur-screen"><div className="loading-spinner">Loading...</div></div> }
            {showPdf && (
                <div >
                    {Boolean(pdfDocument && pdfDocument.numPages) && (
                        <div className="pdf-container">
                            {!pdfDocument && <span>Loading...</span>}
                            <div className="canvas-panel">
                                <canvas ref={canvasRef} />
                            </div>
                            <div className="nav-button">
                                <div className="previous">
                                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                                        {"<"}
                                    </button>
                                </div>
                                <div className="next">
                                    <button
                                        disabled={page === pdfDocument.numPages}
                                        onClick={() => setPage(page + 1)}
                                    >
                                        {">"}
                                    </button>
                                </div>
                            </div>

                        </div>
                        )}
                    
                </div>
            )}
        </>
    );
};

export default CreditLoanForm;
