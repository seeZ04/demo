import './info-section-3.css';

const InfoSection3Content = () => {
    return (
        <div className='section-3-content'>
            <div className='section-3-content-header'>Các bước đăng ký vay:</div>
            <div>
                <div className='section-3-content-row'>
                    <div className="circle-number">1</div>
                    <div className='text-content' >Đăng ký thông tin: Điền thông tin đăng ký trên website</div>
                </div>
                <div className='link'></div>
                <div className='section-3-content-row'>
                    <div className="circle-number">2</div>
                    <div className='text-content' >Đăng nhập shop: Lựa chọn Sàn TMĐT bạn sở hữu và Đăng nhập
                        tài khoản</div>
                </div>
                <div className='link'></div>

                <div className='section-3-content-row'>
                    <div className="circle-number">3</div>
                    <div className='text-content' >Mở TNEX và đăng ký vay: Mở App TNEX và nhập thông tin để
                        đăng ký khoản vay</div>
                </div>
                <div className='link'></div>

                <div className='section-3-content-row'>
                    <div className="circle-number">4</div>
                    <div className='text-content' >Thẩm định & Giải ngân: TNEX tiến hành thẩm định và giải ngân
                        trong 4h</div>
                </div>
            </div>
        </div>
    )
};

export default InfoSection3Content;