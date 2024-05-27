import React from 'react';
import './Feature.css';
import menu1 from '../../assets/menu_1.png';
import menu2 from '../../assets/menu_2.png';
import menu3 from '../../assets/menu_3.png';

const Feature = () => {
  return (
    <div className='feature' id='feature'>
      <h1>WE ARE NOT JUST FOR DATING</h1>
      <div className='feature-list'>
        <div className='explore-feature-list'>
          <img src={menu1} alt="Menu 1" className='feature-image' />
          <h2>Meet someone with Sinai Chei</h2>
          <p>Find someone you actually want to date, then go ahead and Make the First Move. Make genuine connections, vibe over what you both love, and most importantly, have fun.</p>
        </div>
        <div className='explore-feature-list'>
          <img src={menu2} alt="Menu 2" className='feature-image' />
          <h2>Find new friends on Sinai Chei For Friends</h2>
          <p>Meet someone like you. Or unlike you. Make new friends and find new things to do together — whether you’re home or away.</p>
        </div>
        <div className='explore-feature-list'>
          <img src={menu3} alt="Menu 3" className='feature-image' />
          <h2>Make career moves with Sinai Chei</h2>
          <p>Find friends with work benefits. Connect with other business professionals to find your next job, a mentor or even a whole new career.</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
