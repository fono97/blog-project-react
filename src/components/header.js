import React from "react"
import styled from "@emotion/styled";
import ContainerHeader from "./container";



const Header = (props) => {
    const HeaderStyle = styled.header`
      grid-area: header;
      width: 100vw;
      background-color: green;
    `;
    return (
      <HeaderStyle>
        <ContainerHeader/>
      </HeaderStyle>
    );
}
 
export default Header ;
