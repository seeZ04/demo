import './loan-benefit.css';
import dangky from '@assets/credit/DangKyDeDang.svg';
import thanhtoan from '@assets/credit/ThanhToanDeDang.svg';
import chitieu from '@assets/credit/ChiTieuHoanTien.svg';
import bakhong from '@assets/credit/3Khong.svg';

const LoanBenefit = () => (
    <div className="loan-benefit">
        <div className='title-text'>
            Tại sao lại chọn <span>TIÊU TRƯỚC TRẢ SAU</span> trên App TNEX ?
        </div>
        <div className='block-step-benefit'>
            <div className='step-benefit'>
                <div className='image'>
                    <img src={dangky} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Đăng ký Online - Ứng tiền siêu tốc</div>
                <ul className='description'>
                    <li>
                        Duyệt online 100%
                    </li>
                    <li>
                        Thủ tục đơn giản, chỉ cần CMT/CCCD
                    </li>
                    <li>
                        Giải ngân nhanh chóng ngay trên điện thoại
                    </li>
                </ul>
            </div>
            <div className='step-benefit'>
                <div className='image'>
                    <img src={thanhtoan} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Thanh toán dễ dàng - Cuộc sống thăng hạng</div>
                <ul className='description'>
                    <li>
                        Dễ dàng thanh toán hóa đơn (điện, nước, ...)
                    </li>
                    <li>
                        Thoải mái ăn uống, vui chơi giải trí cùng bè bạn

                    </li>
                    <li>
                        Mua sắm thả ga tại hơn 1000 showroom, cửa hàng, siêu thị trên toàn quốc
                    </li>
                </ul>
            </div>
            <div className='step-benefit'>
                <div className='image'>
                    <img src={chitieu} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Chi tiêu thả ga - Hoàn tiền cực đã</div>
                <ul className='description'>
                    <li>
                        Nạp điện thoại: hoàn 10%, tối đa 5.000đ
                    </li>
                    <li>
                        Thanh toán hóa đơn: hoàn 20%, tối đa 10.000đ
                    </li>
                    <li>
                        Thanh toán VNPAY QR: hoàn 50%, tối đa 5.000đ
                    </li>
                </ul>
            </div>
            <div className='step-benefit'>
                <div className='image'>
                    <img src={bakhong} alt="TNEX Logo" className="" />
                </div>
                <div className='title'>Tận hưởng đặc quyền 3 không</div>
                <ul className='description'>
                    <li>
                        Không cần thế chấp tài sản
                    </li>
                    <li>
                        Không cần trả phí lên tới 40 ngày
                    </li>
                    <li>
                        Không dùng, không mất phí
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default LoanBenefit;
