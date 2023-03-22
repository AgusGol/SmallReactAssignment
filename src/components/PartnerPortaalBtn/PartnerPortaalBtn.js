import './PartnerPortaalBtn.css'
import logo from '../../assets/images/klup_logo.png'

function PartnerPortalBtn() {
  return (
    <button className='partnerPortalBtn'>
      <img src={logo} alt='klup logo' className='logoInBtn' />
      <span>Partner Portal</span>
    </button>
  );
}

export default PartnerPortalBtn;
