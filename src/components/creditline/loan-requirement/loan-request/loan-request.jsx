import './loan-request.css';
import check_green from '@assets/check_green.png'



const LoanRequest = () => {

    return (
        <div className="loan-request">
            <div className='request-title'>Tiêu trước trả sau dành cho mọi khách hàng</div>
            <ul className='request-ul'>
                <li >
                    <div className="li-info-content">
                        <img src={check_green} alt="Check icon" className="" />
                        <span dangerouslySetInnerHTML={{ __html: "Có độ tuổi từ 18 - 50 tuổi mang Quốc tịch Việt Nam" }}></span>
                    </div>
                    <div className="li-break-line"></div>

                </li>
                <li >
                    <div className="li-info-content">
                        <img src={check_green} alt="Check icon" className="" />
                        <span dangerouslySetInnerHTML={{ __html: "Muốn tiêu trước - trả sau chi tiêu linh hoạt từ 2 - 20 triệu, tiền về tài khoản ngay trên điện thoại" }}></span>
                    </div>
                    <div className="li-break-line"></div>
                </li>
                <li >
                    <div className="li-info-content">
                        <img src={check_green} alt="Check icon" className="" />
                        <span dangerouslySetInnerHTML={{ __html: "Muốn thoải mái chi tiêu trước, trả sau giảm bớt áp lực tài chính." }}></span>
                    </div>
                    <div className="li-break-line"></div>
                </li>
                <li >
                    <div className="li-info-content">
                        <img src={check_green} alt="Check icon" className="" />
                        <span dangerouslySetInnerHTML={{ __html: "Muốn trải nghiệm 40 ngày miễn phí sản phẩm Tiêu trước - trả sau trên Ngân hàng số TNEX" }}></span>
                    </div>
                    <div className="li-break-line"></div>
                </li>
                <li >
                    <div className="li-info-content">
                        <img src={check_green} alt="Check icon" className="" />
                        <span dangerouslySetInnerHTML={{ __html: "Muốn sở tận hưởng kho ưu đãi hấp dẫn, chi tiêu thông minh có trên ứng dụng TNEX" }}></span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default LoanRequest;
