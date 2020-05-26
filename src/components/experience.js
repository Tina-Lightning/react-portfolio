import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                <p><strong>{this.props.jobName}</strong></p>
                </Cell>
                <Cell col={8}>
        <h4 style={{marginTop: "0px"}}>{this.props.company}</h4>
        
        <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;