import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import '../styles/landing.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="chrissy-img">
                            <img
                                src="https://www.regalwine.com/wp-content/uploads/2017/02/Chrissy-Atherholt.jpg" alt="chrissy"
                            />
                        </div>
                        <div className="banner-text">
                            <h2>Chrissy Atherholt</h2>
                            <h4>Full Stack Web Developer</h4>
                            <hr />
                            <p>HTML5 | CSS3 | JavaScript | Bootstrap | Express.js | React | NodeJS | MongoDB | MySQL</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/christineatherholt/" title="LinkedIn" target="_blank"  rel="noopener noreferrer" aria-hidden="true">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/Tina-Lightning" title="GitHub" target="_blank" rel="noopener noreferrer" aria-hidden="true">
                                    <i class="fa fa-github-square"></i>
                                </a>
                                {/* Resume */}
                                <a href="http://chrissyatherholtportfolio.com/wp-content/uploads/2018/06/CAtherholt-Resume2.pdf" title="My Resume"
                                    target="_blank" rel="noopener noreferrer" aria-hidden="true">
                                    <i class="fa fa-list-alt"></i>
                                </a>
                                {/* Email */}
                                <a href="mailto:c.atherholt@gmail.com" title="Email" target="_blank" rel="noopener noreferrer" aria-hidden="true">
                                    <i class="fa fa-envelope-square"></i>
                                </a>
                                {/* Phone Call */}
                                <a href="tel:1-609-504-5953" title="Phone Call" target="_blank" rel="noopener noreferrer" aria-hidden="true">
                                    <i class="fa fa-phone-square"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;