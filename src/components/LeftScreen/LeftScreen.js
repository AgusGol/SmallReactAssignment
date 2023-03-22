import './LeftScreen.css';
import PartnerPortaalBtn from '../PartnerPortaalBtn/PartnerPortaalBtn';
import LoginForm from '../LoginForm/LoginForm.js'

function LeftScreen() {
    return (
        <div className='mainContainer'>
            <PartnerPortaalBtn />
            <LoginForm />
        </div>
    );
}

export default LeftScreen;
