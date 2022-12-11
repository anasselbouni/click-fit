import React, {useRef} from 'react';
import Fullpage, { FullPageSections,FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import bg from './img/image-2.jpeg';
import sv from './img/Group 1.svg';
import bg1 from './img/image-3.jpg';
import trainer from './img/trainer-image.jpg';
import FetchData from './Components/FetchData';

const FullPageScroll = () => {
    const SectionStyle = {
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
    }

    const joinus = useRef(null);
    const training = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <div>
        <nav>
            <div className="nav-content">
                <div className="logo">
                </div>

                <ul className="nav-links">
                    <li onClick={() => scrollToSection(joinus)}>JOIN US</li>
                    <li onClick={() => scrollToSection(training)}>TRAINING</li>
                </ul>
            </div>
        </nav>
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${bg})`}}>
                    <table ref={joinus} style={{width: '100%', height: '100%'}}>
                        <tr>
                            <td>
                                <img src={sv} alt="React Logo" />
                            </td>
                        </tr>
                        <tr>
                            <button className='hero-button'>JOIN US</button>
                        </tr>
                    </table>
                </FullpageSection>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${trainer})`}}>
                    <div ref={training} className="trainer-overlay" onclick="off()">

                    <div class="trainer_container">
                        <div class="trainer_cta">
                            <h2 class="trainer_headline">Headline</h2>
                            <FetchData />
                            <div class="trainer_buttons">
                                <a class="trainer_button primary small trainer_button_1" href="/level-1">
                                    Button 1
                                </a>
                                <a class="trainer_button primary small trainer_button_1" href="https://www.crossfit.com/online-courses">
                                    Button 2
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        </div>
        
    );
};

export default FullPageScroll;