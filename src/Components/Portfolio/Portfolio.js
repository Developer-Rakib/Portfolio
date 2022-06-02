import React from 'react';
import { Fade } from 'react-reveal';
import computer from '../../img/Computer Village.png';
import trends from '../../img/trends.png';
import sara from '../../img/saramadicalhall.png';
import book from '../../img/fancybook.png';

const Portfolio = () => {
    return (
        <section class="portfolio" id="portfolio">

            <h1 class="heading"> my <span>portfolio</span> </h1>

            <div class="box-container">

                <div class="box">
                    <Fade duration={1500} left>
                        <div>
                            <img src={computer} alt="" />
                            <div className='project-hover'>
                                <h2>Computer Village</h2>
                                <button className='btn-fill'><a href="">Live Link</a></button>
                                <button className='btn'><a href="">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} top>
                        <div>
                            <img src={trends} alt="" />
                            <div className='project-hover'>
                                <h2>TRENDs</h2>
                                <button className='btn-fill'><a href="">Live Link</a></button>
                                <button className='btn'><a href="">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} right>
                        <div>
                            <img src={sara} alt="" />
                            <div className='project-hover'>
                                <h2>Sara Madical</h2>
                                <button className='btn-fill'><a href="">Live Link</a></button>
                                <button className='btn'><a href="">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} bottom>
                        <div>
                            <img src={book} alt="" />
                            <div className='project-hover'>
                                <h2>Fancy Book</h2>
                                <button className='btn-fill'><a href="">Live Link</a></button>
                                <button className='btn'><a href="">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                {/* <div class="box">
                    <Fade duration={1500} right>
                        <div>
                            <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" alt="" />
                        </div>
                    </Fade>
                </div> */}
               




            </div>

        </section>
    );
};

export default Portfolio;