import React, { useEffect } from 'react';
import img3 from '../images/image 5.png';
import img4 from '../images/image 6.png';
import img5 from '../images/image 7.png';

function Progress() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      counter.innerHTML = 0;

      const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = Number(counter.innerHTML);
        const incr = 1; // Set the increment value to 1 for example

        if (startingCount < targetCount) {
          const newCount = startingCount + incr;
          counter.innerHTML = newCount;
          setTimeout(updateCounter, 5);
        }
      };

      updateCounter();
    });
  }, []);







  return (
    <div className='progress'>
      <div className='counter-contanear'>
      <div className='pro'>
      <i class="n fa-solid fa-bullseye"></i>
        <img src={img3}/>
        </div>
        <div className='pa'>
        <div class="counter" data-target="10"></div>
        <span>professional certifications<br></br> earned
</span>
        </div>
      </div>


      <div className='counter-contanear'>
      <div className='pro'>
      <i class="d fa-solid fa-brush"></i>
        <img src={img4}/>
        </div>
        <div className='pa'>
        <div class="counter" data-target="2"></div>
        <span>years of progressive <br></br>WebDevoloper experience</span>
        </div>
      </div>



      <div className='counter-contanear' >
      <div className='pro'>
      <i class="s fa-solid fa-lightbulb"></i>
        <img src={img5}/>
        </div>
        <div className='pa'>
        <div className="counter" data-target="25"></div>
        <span>Github Repository</span>
        </div>
      </div>
    </div>

     
  
  );
}

export default Progress;
