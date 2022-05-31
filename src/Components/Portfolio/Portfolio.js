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
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} top>
                        <div>
                            <img src={trends} alt="" />
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} right>
                        <div>
                            <img src={sara} alt="" />
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} bottom>
                        <div>
                            <img src={book} alt="" />
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