import React from "react";
import styled from "@emotion/styled";
import LogoNav from "./logonav";


const Container = (props) => {
    const HeaderTitle = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 5%;
      height: 100%;
    `;
    return (
          <HeaderTitle>
            <LogoNav/>
          <nav className="navbar">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>projects</li>
              <li>sign in</li>
              <li>sign up</li>
            </ul>
          </nav>
        </HeaderTitle>
      );
}
 
export default Container ;

  // <div className="logo-nav">
  //   <div className="logo">
  //     <img src="./images/logo.png" alt="computer-science-logo" />
  //   </div>
  //   <p className="title-blog">web development projects</p>
  // </div>;