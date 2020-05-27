import React from "react"
import styled from "@emotion/styled";


const Header = (props) => {
    const HeaderStyle = styled.header`
        grid-area: header;
        width: 100vw;
        background-color: green;
    `
    return (
      <HeaderStyle>
        <div className="header-title">
          <div className="logo-nav">
            <div className="logo">
              <img src="./images/logo.png" alt="computer-science-logo" />
            </div>
            <p className="title-blog">web development projects</p>
          </div>
          <nav className="navbar">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>projects</li>
              <li>sign in</li>
              <li>sign up</li>
            </ul>
          </nav>
        </div>
      </HeaderStyle>
    );
}
 
export default Header ;