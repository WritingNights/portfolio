import React from "react";

import logo from "./icons/Logo.png";

export default function About(props) {
  return (
    <section id="home" className={`${props.collapsed ? 'no-' : ''}manager about anchor`}>
      <div className="container">
        <article className="aboutArt">
          <header className="aboutHead">
            <img src={logo} alt="Daniel Jones tree/book logo" id="logo"/>
          </header>
          <div className="chasm">
            <div className="chasmLeft">
              <div className="brAndSh">
                <div className="bridge"/>
                <div className="shadow1"/>
              </div>
            </div>
            <div className="chasmRight">
              <div className="shadow2" style={{ transform: `rotateZ(${Math.floor(70 * (1 - (window.innerWidth / 1440))) + 10}deg)` }}/>
            </div>
          </div>
          <section className="aboutTags">
            <div className="aboutTag">
              <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" viewBox="0 0 512 512">
                <path fill="#1CA390" d="M496.17,15.836L96.635,291.839l-69.904-56.198c-17.658-14.197-13.07-42.23,8.194-50.055  L496.17,15.836z"/>
                <path fill="#12685C" d="M96.636,307.667c-3.52,0-7.032-1.171-9.919-3.491l-69.904-56.199  c-12.798-10.289-18.854-26.105-16.2-42.308c2.653-16.205,13.435-29.265,28.846-34.936L490.705,0.983  c7.48-2.748,15.844,0.491,19.514,7.564c3.672,7.078,1.507,15.779-5.053,20.31L105.629,304.861  C102.916,306.737,99.771,307.667,96.636,307.667z M384.332,73.859L40.389,200.438c-6.576,2.42-8.162,8.038-8.54,10.343  c-0.377,2.303-0.665,8.137,4.796,12.525l60.703,48.803L384.332,73.859z"/>
                <path fill="#1CA390" d="M220.169,415.373L496.17,15.836L326.422,477.083c-7.825,21.263-35.86,25.851-50.055,8.194  L220.169,415.373z"/>
                <g>
                	<path fill="#12685C" d="M298.984,511.991c-13.63,0-26.371-6.122-34.953-16.799l-56.198-69.902   c-4.387-5.457-4.667-13.15-0.687-18.911L483.149,6.84c4.531-6.56,13.233-8.719,20.31-5.053c7.076,3.672,10.317,12.035,7.564,19.516   L341.275,482.55C334.691,500.434,318.092,511.991,298.984,511.991z M239.898,414.656l48.8,60.702   c3.483,4.332,7.939,4.979,10.286,4.979c4.531,0,10.218-2.29,12.584-8.722l126.578-343.937L239.898,414.656z"/>
                	<path fill="#12685C" d="M160.844,425.648c-0.367,0-0.736-0.013-1.108-0.036l-33.51-2.315   c-20.005-1.386-36.132-17.512-37.514-37.516l-6.612-95.651c-0.603-8.721,5.978-16.278,14.698-16.881   c8.725-0.56,16.278,5.978,16.881,14.698l6.612,95.651c0.299,4.329,3.791,7.818,8.121,8.119l33.508,2.315   c8.721,0.603,15.3,8.16,14.698,16.881C176.039,419.26,169.086,425.648,160.844,425.648z"/>
                	<path fill="#12685C" d="M111.2,416.631c-4.052,0-8.1-1.546-11.191-4.636c-6.18-6.18-6.18-16.202,0-22.384l105.746-105.745   c6.18-6.177,16.202-6.177,22.382,0c6.18,6.18,6.18,16.202,0,22.384L122.393,411.996C119.302,415.087,115.252,416.631,111.2,416.631   z"/>
                </g>
              </svg>
              <span>
                My personal website started it all. freeCodeCamp gave me baby steps. HarvardX tested my ability. CS college courses solidified the knowledge. Personal projects (including accessible minesweeper) dialed it all in. And unbreakable drive pushed me through.
              </span>
            </div>
            <div className="aboutTag">
              <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" viewBox="0 0 32 32">
              <path fill="#1CA390" stroke="#12685C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"strokeMiterlimit="10" d="M26.5,14.1C26,14,25.4,14.4,24.9,15V9.7C24.9,6,21.8,3,18,3h-1c-1.7,0-3.2,0.6-4.4,1.6C12,4.2,11.3,4,10.6,4  C8.7,4,7.1,5.5,7.1,7.3V15c-0.5-0.7-1.1-1.1-1.6-1c-1.1,0.2-1.7,2-1.4,4.1c0.4,2.1,1.5,3.7,2.7,3.5c0.4-0.1,0.6-0.3,0.9-0.6  c1.2,4.6,4.5,8,8.4,8c3.9,0,7.1-3.3,8.4-8c0.2,0.3,0.5,0.6,0.9,0.6c1.1,0.2,2.3-1.4,2.7-3.5C28.3,16.1,27.6,14.2,26.5,14.1z"/>
              <path fill="yellow" stroke="#12685C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"strokeMiterlimit="10" d="M20,13c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.8,2,3.4V19h4v-2.6C19.2,15.8,20,14.5,20,13z"/>
              <path fill="#1CA390" stroke="#12685C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"strokeMiterlimit="10" d="M18,21c0,1.1-0.9,2-2,2s-2-0.9-2-2"/>
              </svg>
              <span>
                Before all that, I had an even more “from all over” set of experiences that lead to my success as a developer. These experiences fueled my desire for accessibility standards, opened my mind to complex and scalable designs, and developed my logical thinking.
              </span>
            </div>
          </section>
        </article>
        {props.counters}
      </div>
    </section>
  );
}