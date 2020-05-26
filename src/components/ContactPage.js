import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

import '../styles/contact.css';

class ContactPage extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Chrissy Atherholt</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>Lorem ipsum dolor sit amet, laboramus expetendis mei ut. Per aeque dissentiet et, his veniam ubique te. No vel soleat virtute, viderer insolens maluisset vis cu, vix te diceret vulputate. Epicuri rationibus eam ne. Per facer inani te, dicant discere evertitur mea ea.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        609-555-6543
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        609-555-1234
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        email@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        @MySkypeId
                                    </ListItemContent>
                                </ListItem>
   
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ContactPage;