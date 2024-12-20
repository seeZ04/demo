import './info-section-3.css';
import InfoSection3Content from './info-section-3-content';
import LoanForm from './loan-form/loan-form';
import bounty from '@assets/bounty.png';
import Background from './background/background';

const InfoSection3 = ({ openRegisterPopup, openErrorPopup }) => (
    <div id="section-3-id-scroll" className="section-3">
        <div className="section-3-body">
            <div className="section-3-background">
                <Background />
            </div>
            <div className="section-3-row">
                <div className="bounty-image">
                    <img src={bounty} alt="" className="" />
                </div>
               <LoanForm openRegisterPopup={openRegisterPopup} openErrorPopup={openErrorPopup} />
                <InfoSection3Content />
            </div>
        </div>

    </div>
);

export default InfoSection3;
