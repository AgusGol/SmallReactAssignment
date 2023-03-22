import './ImageAndTips.css';
import rightImage from '../../assets/images/right_image.png';
import Tips from '../Tips/Tips';

function ImageAndTips() {
    return (
        <div className='mainContainer'>
            <img
                className='rightImage'
                alt='Group of adults having a nice time'
                src={rightImage}
            />
            <Tips />
        </div>
    );
}

export default ImageAndTips;
