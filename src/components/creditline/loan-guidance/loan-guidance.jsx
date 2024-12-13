import './loan-guidance.css';
import logo from '@assets/credit/step-1.svg';
import logo2 from '@assets/credit/step-2.svg';
import logo3 from '@assets/credit/step-3.svg';

const LoanGuidance = () => (
    <div className="loan-guidance">
        <div className='title-text'>
            3 bước đăng ký đơn giản
        </div>
        <div className='block-step'>
            <div className='step'>
                <div className='image'>
                    <img src={logo} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Tải app</div>
                <div className='description'>Khách hàng tải app TNEX trên CHplay hoặc AppStore</div>
            </div>
            <div className='step'>
                <div className='image'>
                    <img src={logo2} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Điền thông tin đăng ký</div>
                <div className='description'>Chỉ mất 2 phút điền đơn đăng ký và được tư vấn ngay hạn mức
                    phù hợp</div>
            </div>
            <div className='step'>
                <div className='image'>
                    <img src={logo3} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Giải ngân</div>
                <div className='description'>Tiền sẽ được giải ngân sau khi khách hàng hoàn tất hồ sơ
                    đăng ký</div>
            </div>
        </div>
    </div>
);

export default LoanGuidance;
