import React from "react"
import styled from "@emotion/styled";
import Container from "./container";



const Header = (props) => {
    const HeaderStyle = styled.header`
      grid-area: header;
      width: 100vw;
      background-color: green;
    `;
    return (
      <HeaderStyle>
        <Container>
          <nav className="navbar">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>projects</li>
              <li>sign in</li>
              <li>sign up</li>
            </ul>
          </nav>
        </Container>
      </HeaderStyle>
    );
}
 
export default Header ;