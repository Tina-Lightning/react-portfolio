import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";

import '../styles/projects.css';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (<div className="projects-grid">
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/kdc-careers-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/clark-cooper-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/TCM-redesign-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/funny-ladies-gif.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/your-plans-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/party-time-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/train-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/friend-finder-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/trivia-game-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/i-love-tv-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/word-guess-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                <div className="cardDiv">
                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(../img/squares/burger-sequel-square.jpg) center / cover', margin: 'auto' }}>
                </Card>
                </div>
                </div>              
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>These are Graphic projects</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>These are Student projects</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>These are Professional projects</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div><h1>These are Personal projects</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Web</Tab>
                    <Tab>Graphic</Tab>
                    <Tab>Student</Tab>
                    <Tab>Professional</Tab>
                    <Tab>Personal</Tab>
                </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
  
            </div>
        )
    }
}

export default ProjectsPage;