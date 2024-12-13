import LoanInfo from './credit-loan-info/credit-loan-info';
import LoanRequest from './loan-request/loan-request';
import './loan-requirement.css';

const LoanRequirement = () => (
    <div className="loan-requirement">
        <div className='loan-req-info'>
            <LoanInfo></LoanInfo>
        </div>
        <div className='loan-req-request'>
            <LoanRequest></LoanRequest>
        </div>
    </div>
);

export default LoanRequirement;
