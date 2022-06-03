import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

const MySkills = () => {
    return (
        <section class="mySkill-section" id="mySkills">

            <h1 class="heading"> <span>My</span> Skills </h1>
            <div className='mySkill-container'>
                <div className="skillAbout">
                    <div>
                    <h3>My Creative Skills & Experiences.</h3>
                    <p>My name is Md. Tazul Islam, And I'm Studying Programming Hero. Web Design & Development is my passion. I Love To Learn New Skills to Become myself a Pro Developer. Now Learning JavaScript. I Get Deeper to Understand Client's Needs & Problems. My Mission is to Satisfy Every Client. Because Client Satisfaction is My First Priority. You'll Get Lifetime Support in Any Situation, I Promise that, You'll Get Fanatical Support And Absolutely Positively On-Time Delivery.</p>
                    <button className='btn-fill'>Read More</button>
                    </div>
                </div>
                <div className="skillProgress">
                    <div className='skill'>
                        <h5>HTML & CSS</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>Tailwind & Bootstrap</h5>
                        <ProgressBar
                            completed={88}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="88%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>JavaScript</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>TypeScript</h5>
                        <ProgressBar
                            completed={60}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="60%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>ReactJS</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>NodeJS</h5>
                        <ProgressBar
                            completed={50}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="50%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>ExpressJS</h5>
                        <ProgressBar
                            completed={78}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="78%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>NextJS</h5>
                        <ProgressBar
                            completed={72}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="72%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>MongoDB</h5>
                        <ProgressBar
                            completed={75}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="75%"
                        />
                    </div>
                </div>
            </div>


        </section>

    );
};

export default MySkills;