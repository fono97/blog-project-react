import React from "react"
import styled from "@emotion/styled";
import ContainerHeader from "./container";



const Header = (props) => {
    const HeaderStyle = styled.header`
      grid-area: header;
      width: 100vw;
      background-color: #171718;
      background: linear-gradient(120deg, #062b41, #052131);
    `;
    return (
      <HeaderStyle>
        <ContainerHeader/>
      </HeaderStyle>
    );
}
 
export default Header ;
