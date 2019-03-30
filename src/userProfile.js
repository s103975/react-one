import React from 'react';
import './index.css';
import pic from './Images/Octocat.jpg'

//{String} gitHubUserName;

export function userProfile(props){

    const {gitHubUserName, name } = props;
    //console.log("grsgsgfs-->",props);
    //const gitHubUserName = props;
    //console.log("hhhhhhhh->",gitHubUserName);
    var style = {
        height: 50,
        width: 100
    };
    return(
        <div className="flex-container">
            <div>
                <img src={pic} alt="atch" style={style}></img>
                { name }
            </div>
            <div>GitHub Username: <a href="https://github.com/aarivalagan">{gitHubUserName}</a></div>
            <div>Resume: <a href="https://drive.google.com/file/d/1iLS0M39mdYHqRQqyn4zVfzFtf9dl5U6U/view?usp=sharing">Resume</a></div>
        </div>
    );
}