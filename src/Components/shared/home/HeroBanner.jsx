import React from 'react';
import Bg from '../../../assets/001-bg-anim (1).svg';
import FrontImage from '../../../assets/modern_smiling_woman_standing_studio_is_holding_opened_laptop_182527.png';

const HeroBanner = () => {
  return (
      <div className='HeroBanner relative mt-14 w-[100%] flex justify-center text-center items-center overflow-hidden'>
		<embed type="image/svg+xml" src={Bg} className="background w-[100%] h-auto absolute top-0 left-0 z-0 "/>
		<img src={FrontImage} alt="Foreground Animation" className='foreground w-[100%] max-w-[800px] z-10 ' />
    </div>
  )
}

export default HeroBanner
