import React from "react";
import styled from "@emotion/styled";
import LogoNav from "./logonav";
import NavBar from "./NavBar"


const ContainerHeader = (props) => {
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
            <NavBar/>
        </HeaderTitle>
      );
}
export default ContainerHeader ;
