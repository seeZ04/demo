import './loan-form.css';
import { useState } from 'react';
import CustomDropdown from '../dropdown-custom/dropdown-custom';
import MoneyRangeSlider from '../range-slider-custom/range-slider-custom';
import Popup from "@components/merchant/popup/popup-register";
import ErrorPopup from "@components/popup/popup";

const LoanForm = ({ openRegisterPopup,openErrorPopup }) => {

    const [formData, setFormData] = useState({
        loan_amount: 0,
        full_name: '',
        phone_number: '',
        identity_card_number: '',
        industry: '',
        address: '',
        partner_code: 'tnex',
        type: '1'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        full_name: '',
        phone_number: '',
        identity_card_number: '',
        industry: '',
        address: ''
    });


    const minValue = 10000000;
    const maxValue = 100000000;
    const businessOptions = [
        "Thời trang & Phụ kiện",
        "Làm đẹp & Mỹ phẩm",
        "Nhà cửa & Đời sống",
        "Điện tử & Điện máy",
        "Mẹ & Bé",
        "Sức khỏe",
        "Hàng tiêu dùng",
        "Khác",
    ];

    const addresssOptions = [
        "Hà Nội",
        "Bắc Ninh",
        "Nam Định",
        "Hải Dương",
        "Hưng Yên",
        "Đà Nẵng",
        "Hồ Chí Minh",
        "Bình Dương",
        "Khác",
    ];

    // Validation rules
    const validateField = (name, value) => {
        switch (name) {
            case "full_name":
                if (!value) return "Yêu cầu nhập họ tên";
                if (value.length < 3) return "Họ tên phải có ít nhất 3 ký tự";
                return "";

            //case "phone_number":
            //    if (!value) return "Yêu cầu nhập số điện thoại";
            //    if (!/^\d{10,11}$/.test(value)) return "Vui lòng nhập đúng định dạng số điện thoại";
            //    return "";

            //case "identity_card_number":
            //    if (!value) return "Yêu cầu nhập số CCCD";
            //    if (!/^\d{9,12}$/.test(value)) return "Vui lòng nhập đúng định dạng số CCCD";
            //    return "";
            case "phone_number":
                if (!value) return "Yêu cầu nhập số điện thoại";
                if (!/^0\d{9}$/.test(value)) return "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số";
                return "";

            case "identity_card_number":
                if (!value) return "Yêu cầu nhập số CCCD";
                if (!/^0\d{11}$/.test(value))
                    return "Số CCCD phải bắt đầu bằng 0 và có 12 chữ số";
                return "";

            case "industry":
                return value === "" ? "Yêu cầu chọn ngành nghề kinh doanh" : "";

            case "address":
                return value === "" ? "Yêu cầu chọn nơi sinh sống" : "";

            default:
                return "";
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate field and update errors
        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate all fields before submitting
        const newErrors = Object.keys(formData).reduce((acc, key) => {
            acc[key] = validateField(key, formData[key]);
            return acc;
        }, {});

        setErrors(newErrors);

        // Check if there are no errors
        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        if (!hasErrors) {
            try {
                setIsLoading(true);
                formData.loan_amount = formData.loan_amount === 0 ? maxValue : formData.loan_amount;
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
                        var url = result.results.replace(/^"|"$/g, "");
                        if (url && url.trim() !== "") {
                            openRegisterPopup(url);
                        }
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
                    if (errorResult && errorResult.responseStatus && errorResult.responseStatus.message) {
                        openErrorPopup("Xảy ra lỗi", errorResult.responseStatus.message);
                    } else {
                        openErrorPopup("Xảy ra lỗi", "Đã xảy ra lỗi không xác định.");
                    }
                }
            } catch (error) {
                setIsLoading(false);
                const text = error.toString().replace(/<\/?[^>]+(>|$)/g, "");
                openErrorPopup("Xảy ra lỗi", text);
            }
            finally {
                setIsLoading(false);
            }
        } else {
            console.log("Validation Errors:", newErrors);
        }
    };

    const handleDropdownChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Validate field and update errors
        setErrors((prev) => ({
            ...prev,
            [field]: validateField(field, value),
        }));
    };

    const handleSliderChange = (value) => {
        debugger
        setFormData((prev) => ({
            ...prev,
            loan_amount: value,
        }));
    };

    return (
        <> <form className="loan-form" onSubmit={handleSubmit}>
            <div className='form-group range-input' >
                <MoneyRangeSlider
                    min={minValue}
                    max={maxValue}
                    value={formData.loan_amount}
                    onChange={handleSliderChange}
                />
            </div>
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
            <p className="note">*SĐT đăng ký khoản vay Tboss và ứng dụng TNEX phải trùng nhau</p>

            <div className="form-group info-input">
                <label htmlFor="identity_card_number">Số CCCD</label>
                <input
                    type="text"
                    id="identity_card_number"
                    name="identity_card_number"
                    value={formData.identity_card_number}
                    onChange={handleChange}
                    placeholder="Nhập số CCCD"
                    className={errors.identity_card_number ? "input-error" : ""}
                />
                {errors.identity_card_number && <span className="error-text">{errors.identity_card_number}</span>}
            </div>

            <div className='form-group dropdown-input'>
                <CustomDropdown
                    label="Ngành nghề kinh doanh"
                    options={businessOptions}
                    placeholder='Chọn ngành nghề kinh doanh'
                    onSelect={(value) => handleDropdownChange('industry', value)}
                    error={!formData.industry ? errors.industry : ""}
                />
            </div>

            <div className='form-group dropdown-input'>
                <CustomDropdown
                    label="Nơi sinh sống"
                    options={addresssOptions}
                    placeholder='Chọn nơi sinh sống'
                    onSelect={(value) => handleDropdownChange('address', value)}
                    error={!formData.address ? errors.address : ""}
                />
            </div>
            <div className='form-group button'>
                <button type="submit" className="submit-btn" disabled={Object.values(errors).some((error) => error)}>
                    ĐĂNG KÝ NGAY
                </button>
            </div>
        </form>
           
            {isLoading && <div className="blur-screen"><div className="loading-spinner">Loading...</div></div>}
            
        </>
    );
};

export default LoanForm;
