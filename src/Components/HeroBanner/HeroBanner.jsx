import React from 'react';
import './HeroBanner.css';
import Bg from '../../assets/001-bg-anim (1).svg';
import FrontImage from '../../assets/modern_smiling_woman_standing_studio_is_holding_opened_laptop_182527.png';

const HeroBanner = () => {
  return (
      <div className='HeroBanner mt-14'>
		<embed type="image/svg+xml" src={Bg} className="background w-100"/>
		<img src={FrontImage} alt="Foreground Animation" className='foreground' />
		{/* <embed type="image/svg+xml" src={title} className="title"/> */}
    </div>
  )
}

export default HeroBanner
