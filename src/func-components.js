import React from 'react';

export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        TextDecoration: 'none'
    }
    return (
        <div style={{backgroundColor: '#ccc'}}>
            <span style={{margin: '10px'}}>&#x1D542;</span>
            <a href="" style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>React</a> |&nbsp;
            <a href="" style={aStyle}>React Native</a> |&nbsp; 
        </div>
    )
}

export function Content() {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Hello <br/>React & React Native</h2>
            &sum; 5 &#x21C4; 3.1415926535897823284626433 &#x25BE;
            <br/><br/><br/>
        </div>
    )
}

export const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}>
            &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}