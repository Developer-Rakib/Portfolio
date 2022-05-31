import React from 'react';
import Typed from 'react-typed';

const Home = () => {
    return (
        <section class="home" id="home">

            <h3>React Frontend Developer</h3>
            <h1>I'M <span>
                <Typed
                    strings={['Tazul Islam Rakib', 'JavaScript Developer']}
                    typeSpeed={70}
                    backSpeed={40}
                    loop
                />

            </span></h1>
            <p>I am a professional MERN Stack Web Developer. I'm very passionate and dedicated to my work. With 1.5 years of experience as a professional React Developer, I have acquired the skills and knowledge necessary to make your project a success. I am passionate to learn more and get my skill sets more polished and learn new technologies.
            </p>
            <div>
                <a style={{ marginRight: '5px' }} href="https://www.linkedin.com/in/developer-rakib1/" target={'_blank'}><button class="btn-fill">Hire Me</button></a>
                {/* <a href="../../img/Resume.pdf" download><button class="btn">Download Resume</button></a> */}
            </div>

        </section>
    );
};

export default Home;