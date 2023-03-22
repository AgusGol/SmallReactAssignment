import './LeftScreen.css';
import PartnerPortaalButton from '../PartnerPortalButton/PartnerPortalButton';
import LoginForm from '../LoginForm/LoginForm.js'

function LeftScreen() {
    return (
        <div className='mainContainer'>
            <PartnerPortaalButton />
            <LoginForm />
        </div>
    );
}

export default LeftScreen;
