import MerchantPage from './pages/merchant-page';
import CreditLinePage from './pages/credit-line-page';
import './styles/global.css';
import './App.css';

function App() {
    const path = window.location.pathname;

    switch (path) {
        case "/merchant-DTM":
            return <MerchantPage />;
        case "/creditline":
            return <CreditLinePage />;
        default:
            return <MerchantPage />;
    }
}

export default App;