import './credit-loan-info.css';
import bag from '@assets/credit/bag.svg';
import people from '@assets/credit/people.svg';

const CreditLoanInfo = () => (
    <>
        <div className="credit-loan-info">
            <div className='credit-info-content'>
                <div className="content-header">
                    Thông tin sản phẩm Tiêu trước - Trả sau
                </div>
                <ul>
                    <li>
                        <div>
                            Số tiền
                        </div>
                        <div>
                            2 triệu - 20 triệu đồng
                        </div>
                    </li>
                    <li>
                        <div>
                            Thời hạn
                        </div>
                        <div>
                            365 ngày
                        </div>
                    </li>
                    <li>
                        <div>
                            Lãi suất
                        </div>
                        <div>
                            0% - 35%
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <img src={bag} alt="" className="" />
            </div>
        </div>
        <div className="credit-loan-info">
            <div className='credit-info-content'>
                <div className="content-header">
                    Khách hàng của TNEX cần có
                </div>
                <ul>
                    <li className="listing-item">
                        <div>
                            CMND/CCCD tuổi từ 18-50
                        </div>
                    </li>
                    <li className="listing-item">
                        <div>
                            Quốc tịch Việt Nam
                        </div>
                    </li>
                    <li className="listing-item">
                        <div>
                            Số điện thoại di động chính chủ
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <img src={people} alt="" className="" />
            </div>
        </div>
    </>
);

export default CreditLoanInfo;
