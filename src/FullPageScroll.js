import React, {userRef} from 'react';
import Fullpage, { FullPageSections,FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import bg from './img/image-2.jpeg';
import sv from './img/Group 1.svg';

const FullPageScroll = () => {
    const SectionStyle = {
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        

    }
    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${bg})`}}>
                    <table style={{width: '100%', height: '100%'}}>
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
                <FullpageSection style={SectionStyle}>
                    <h1>Screen 2</h1>
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                    <h1>Screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;