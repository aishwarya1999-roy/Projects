import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import back from '../assets/back.png';
import rocket_dot from '../assets/rocket_dot.png';
import rocket_dot2 from '../assets/rocket_long_dot.png';
import rocket_dot3 from '../assets/rocket_long_dot2.png';
import learning_back from '../assets/learning-back.png';
import mobile from '../assets/mobile.png';
import kit from '../assets/kit.png';
import exam_ace from '../assets/logo/exam_ace_logo.png';
import gradient_circle from '../assets/gradient_circle.png';
import exam_ace_back from '../assets/exam_ace.png';
import exam_ace_difference from '../assets/smart_class_difference.png';
import sparkle_universe from '../assets/sparkle_universe.png';
import curve_dot from '../assets/curve_dot.png';
import adaptive_background from '../assets/adaptive_background.png';
import orbit from '../assets/orbits.png';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Home() {
    useEffect(() => {
      document.title = "Home - Smart Class World";
      window.scrollTo(0, 0);
    
      const sectionElements = document.querySelectorAll('.animate-on-scroll');
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.classList.contains('smart-class-world') || 
              entry.target.classList.contains('smart-class-difference') ||
              entry.target.classList.contains('spark-container')
            ) {
              entry.target.classList.remove('disappear');
              entry.target.classList.add('slide-left');
            } else if (entry.target.classList.contains('exam_ace-content')) {
              entry.target.classList.remove('disappear');
              entry.target.classList.add('slide-right');
            } else {
              entry.target.classList.remove('disappear');
              entry.target.classList.add('appear');
            }
          } else {
            entry.target.classList.remove('slide-left', 'slide-right', 'appear');
            entry.target.classList.add('disappear');
          }
        });
      }, { threshold: 0.3 });
      
      sectionElements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
      }, []);
      
    return (
      
        <>
       
        <Header /> 
        <div className='body-section'>
        <div className='container'>
        <ScrollToTopButton />

            {/* welcome  */}
            <div className='welcome-box'>
                    <img className='back' src={back} alt="Logo" />
                    <div className='welcome-textbox'>
                        <span className='university-head'>Smart<br></br>Class World </span>
                        <span className='university-heading'>Inspiring curious minds</span>
                        <span className='university-text'>The journey of knowledge begins with curiosity—the spark that drives us to explore, question, and discover. Smart Class World has been carefully crafted to nurture young minds from Class 1 to 12, fostering a love for learning that goes beyond textbooks. It’s a dynamic space where students, parents, and teachers come together as partners in education. Here, every question finds its answer, and every answer inspires new questions. Welcome to Smart Class World, where learning knows no bounds, and curiosity thrives endlessly.</span>
                      <div className='download-button'>
                         <Link to="https://www.apple.com/in/app-store/" target='_blank'><div className='donwload-left'> <i class="bi bi-apple"></i><span>Download on the<br></br> <strong>App store </strong> </span> </div></Link> 
                         <Link to="https://play.google.com/store/apps/" target='_blank'><div className='donwload-right'><i class="bi bi-google-play"></i> <span> Get it on<br></br> <strong>Google Play</strong></span></div></Link>
                      </div>
                    
                    
                    </div>
            </div>

            {/* universe  */}
            <div className='smart-class-world animate-on-scroll'>
                <div className='smart-class-world-left-box'>
                    <img className='rocket-dot' src={rocket_dot} alt="Logo" />
                    <p className='world-text'>Smart Class<br></br> World is alive with <b>brilliant ideas and inspiring questions.</b></p>
                </div>
                
                <div className='smart-class-world-right-box'>
                <img src= {orbit} className='orbit_png'/>
              </div>
            </div>

            {/* Learning App  */}
            <div className='learing-app-container animate-on-scroll'>
              <img className='dashed-curve' src={curve_dot} />
            
              <div className='learing-app'>
                  <div className='learning-app-left'>
                    <div className='learning-app-left-img'><img src={learning_back}/></div>
                    <div className='learning-app-left-text'>
                      <span id='learning-app-heading'>Smart Class Learning App</span>
                      <div className='learning-app-text'>
                        <span>The Smart Class Learning App is dedicated to delivering experiential learning at its best. This innovative platform combines the finest global learning techniques to provide a refreshing and enriching experience for young learners. Structured with a focus on self-paced learning, the app encourages curiosity and freedom, creating a seamless pathway for students to grow without limitations. Designed specifically for Classes 8 to 12, the content is </span>
                        <span>thoughtfully curated and uniquely presented to make learning engaging, enjoyable, and easy to grasp. With a user-friendly design and regular updates to meet modern educational needs, the Smart Class Learning App offers a host of exciting features for learners to explore and excel.</span>
                      </div>
                     
                    </div>
                    
                  </div>
                  <div className='learning-app-right'>
                    <img src={mobile}/>
                  </div>
              </div>

            </div>
            
           {/* adaptive Kit  */}
            <div className='adaptive-container'>
              
              <img className='dashed-curve2' src={adaptive_background}/>

              <div className='adaptive-box animate-on-scroll'>
                  <div className='adaptive-left'>
                  <img src={kit}/>
                  </div>
                  <div className='adaptive-right'>
                    <div className='learning-kit-heading'><span>Adaptive Learning Kit</span></div>
                    <div className='learning-kit-text'><span>The pressure traditional education places on children is a growing concern today. Research shows that every child learns differently—some thrive through visuals, others through sound, reading, writing, or hands-on experiences. Forcing all learners to fit into a single mold can cause frustration and mental stress, hindering their natural learning journey.<br></br><br></br>The Adaptive Learning Kit is designed to address this challenge. Developed after extensive research, it supports all types of learners—visual, auditory, kinesthetic, or a mix of these—by offering tools and methods tailored to individual needs. This thoughtfully curated kit empowers students to explore, engage, and learn in ways that feel natural and enjoyable, ensuring they discover their own path to success without limitations.</span></div>
                  </div>
              </div>
            </div>

            {/* SPARK */}

            <div className='spark-container animate-on-scroll'>
              <div>
              <img src={rocket_dot2} className='rocket_dot2'/>
              <div className='spark-content-box'>
                <div className='spark-content'>
                      <div className='spark-logo-box'>
                        <div className='spark-logo'>
                        <span className='spark-logo-text'>SPARK</span>
                        <span> IGNITE, LEARN, GROW</span>
                        </div>
                        
                      </div>
                      <div className='spark-text-box'>
                        <span>SPARK is a series of dynamic workshops crafted to ignite curiosity and inspire growth—not just for students, but for parents and teachers as well. At Smart Class World, we believe in the collective power of the student-teacher-parent trio to make learning an enriching and enjoyable experience.</span>
                        <span>Led by a team of passionate educationists with global expertise, every SPARK session is packed with interactive activities, laughter, and moments of discovery. You’ll leave with fresh perspectives, renewed energy, and valuable insights that light the way for continued growth and success.</span>
                      </div>

                      <div className='spark-feature-container'>
                        <span className='spark-feature-heading'>FEATURES</span>
                        <div className='spark-features-content'> 
                          <span className='spark-features-box'>Mastering Academics</span>
                          <span className='spark-features-box'>Fluent English</span>
                          <span className='spark-features-box'>Career Planning</span>
                          <span className='spark-features-box'>Confidence Building</span>
                          <span className='spark-features-box'>Skill Development</span>
                        </div>
                      </div>
                    </div>
              </div>
              <img src={gradient_circle} className='gradient-circle'/>
              </div>

            </div>

            {/* exam_aces  */}
              <div className='exam_ace-container '>
                  <div>
                    <div className='exam_ace-content animate-on-scroll'> 
                      <img className='exam_ace-img' src={exam_ace_back} alt="Logo" />
                      <div className='exam_ace-content-box'>
                        <div>
                        <div className='exam_ace-logo-box'>
                          <img src={exam_ace} />
                        </div>

                        <div className='exam_ace-textbox'>
                          <span className='exam_ace-text'>Exams don't have to be a source of stress. <b>Exam Ace </b>is a focused preparation program designed to turn exam anxiety into confidence. With structured guidance, personalized support, and practical techniques, it equips students with the tools to perform their best while maintaining a calm and balanced mindset. <br></br><br></br>Whether you’re revising key concepts, clearing doubts, or learning stress-busting strategies, Exam Ace ensures you walk into every exam feeling prepared, composed, and ready to excel.</span>
                          <div className='exam_ace-textbox-feature'> 
                            <span className='exam_ace-textbox-feature-heading'>FEATURES</span>
                            <span className='exam_ace-textbox-features'>In-depth analysis of past 5 years' exam papers</span>
                            <span className='exam_ace-textbox-features'>Interactive live and on-demand sessions</span>
                            <span className='exam_ace-textbox-features'>Tailored individual progress assessments</span>
                            <span className='exam_ace-textbox-features'>Group doubt-clearing workshops</span>
                            <span className='exam_ace-textbox-features'>Stress management and exam counseling</span>
                            <span className='exam_ace-textbox-features'>Smart study habits for exam success</span>
                          </div>
                        </div>
                       
                        </div>
                        
                      </div>
                    </div>
                  </div>
              </div>


            {/* Smart Class different  */}
            <div className='smart-class-difference animate-on-scroll'>

              <div className='container'> 
                <img src={rocket_dot3} className='rocket_dot3'/>
                  <div className='smart-class-difference-content'>
                    <div className='smart-class-difference-leftbox'>
                      <img src={exam_ace_difference}/>
                      <div className='smart-class-difference-leftbox-text'>
                        <span className='smart-class-difference-leftbox-heading'>How Smart Class Makes a Difference?</span>
                          <div className='smart-class-difference-leftbox-text-bottom'>
                            <span>The traditional education system often prioritizes results over understanding, focusing on grades rather than true learning. At Smart Class, we believe in shifting the spotlight to a method-oriented approach where mastering fundamentals takes center stage. When students truly understand the basics, they can tackle any challenge and may even create something extraordinary! <br></br> <br></br>We see every learner as a spark waiting to shine. While conventional systems can dim curiosity by emphasizing scores and trophies, Smart Class ignites that spark through its experiential learning methods. </span>
                            <span>By recognizing that every child is unique and learns at their own pace, we provide the tools, encouragement, and mentorship they need to thrive. <br></br><br></br>With our innovative learning app, carefully crafted learning kits, and a team of inspiring educators, we ensure deeper understanding, improved retention, and steady academic progress—all without compromising mental well-being. At Smart Class, every learner's flame is nurtured to burn brighter, lighting the path to a world of limitless possibilities!</span>
                          </div>
                      </div>
                    </div>

                    <div className='smart-class-difference-rightbox'>
                      <div className='smart-class-difference-rightbox-top'>
                        <img src={sparkle_universe}/>
                      </div>
                      <div className='smart-class-difference-rightbox-bottom'>
                      
                        <span className='spark-feature-heading'>SMART TOOLS</span>
                        <div className='spark-features-content'> 
                          <span className='spark-features-box'>Quarterly Progress Review</span>
                          <span className='spark-features-box'>Exam Readiness Assurance</span>
                          <span className='spark-features-box'>Mentor-Parent Connect</span>
                          <span className='spark-features-box'>Personalized Learning Insights</span>
                          
                        </div>
                     
                      </div>
                    </div>
                  </div>
              </div>
              
            </div>
            </div>

        </div>
        <Footer /> 
        </>
    );
}
export default Home;