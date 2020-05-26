import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

import '../styles/resume.css';

class ResumePage extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                                alt="avatar"
                                style={{ height: "200px" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: "2em" }}>Chrissy Atherholt</h2>
                        <h4 style={{ color: "gray" }}>Web Developer</h4>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        <h5>Address</h5>
                        <p>1 Hacker Way <br /> Menlo Park, CA 94025</p>
                        <h5>Phone</h5>
                        <p>609-555-6543</p>
                        <h5>Email</h5>
                        <p>email@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2004}
                            endYear={2008}
                            schoolName="Lehigh University"
                            degreeEarned="BA in Architecture"
                        />

                        <Education
                            startYear={2009}
                            endYear={2011}
                            schoolName="Philadelphia University"
                            degreeEarned="BS in Graphic Design"
                        />

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="University of Pennsylvania"
                            degreeEarned="Penn LPS Coding Boot Camp"
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2014}
                            endYear="Present"
                            company="Regal Wine Imports"
                            jobName="Graphic Designer"
                            jobDescription="Designed and produced all marketing materials including: shelf talkers, case cards, menus, posters, portfolio books, invitations, postcards and price books. Managed a complete website redesign from concept to completion. The new website is beautiful, easy-to-use, organizes thousands of wines in a database and communicates the warmth of Regal Wine employees and suppliers. Worked closely with the sales team of 30+ to keep the design assets of over 1,200 wines and beers organized and delivered to the right places in order to drive sales. Turned most projects around in less than 72 hours."
                        />

                        <Experience
                            startYear={2013}
                            endYear={2014}
                            company="Clark Cooper"
                            jobName="Web Developer"
                            jobDescription="Completely redesigned the company’s website, which included a full company re-branding with new style guides, logos, and sales materials. The new website was designed around user interaction flow in order to help customers better understand solenoid valves and the industries in which they are used."
                        />

                        <Experience
                            startYear={2016}
                            endYear={2018}
                            company="Contact of Burlington County"
                            jobName="Volunteer"
                            jobDescription="Answered phones and offered support and crisis intervention to anyone in need of guidance, comfort or emergency help. Callers needs extend from emotional support or basic life necessities to individuals in crisis situations such as suicide, abuse or homelessness. Callers range in age from children to elderly, crossing gender, economic and social backgrounds."
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={33}
                        />
                        <Skills
                            skill="HTML"
                            progress={95}
                        />
                        <Skills
                            skill="CSS"
                            progress={90}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ResumePage;