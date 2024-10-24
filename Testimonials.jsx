import React, { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png'; 
import user_1 from '../../assets/user-1.png';   
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';   
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {
     const slider=useRef();
     let tx=0;
  const slideForward=()=>{
      if(tx>-50)
      {
        tx-=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx < 0)
        {
          tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt=""  className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sophia Chen</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decision Ive ever made. The supportive community, state-of-the-art facilities,and commitment toacademic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Global Institute, Canada</span>
                        </div>
                    </div>
                    <p>My experience at Global Institute has been nothing short of incredible. The faculty and staff are dedicated, and the hands-on learning has prepared me well for my career.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>Preethi</h3>
                        <span>Tech University, India</span>
                        </div>
                    </div>
                    <p>Tech University has provided me with the skills and knowledge needed to excel in my field. The campus environment is energetic, and the opportunities for research are immense.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Emily Davis</h3>
                            <span>Bright Academy, UK</span>
                        </div>
                    </div>
                    <p>Attending Bright Academy has been a transformative experience for me. The diverse student body and innovative curriculum have broadened my horizons and shaped my future goals.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
