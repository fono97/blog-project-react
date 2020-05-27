import React from "react";
import styled from "@emotion/styled";

const LogoNav = (Props) => {
    const LogoHeader = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Logo = styled.div`
        width: 60px;
        height: 60px;
    `;
    const Img = styled.img`
        border-radius: 50%;
        width: 100%;
        height: 100%;
    `;
    const LogoTitle = styled.p`
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-left: 10px;
        color: white;
        text-transform: capitalize;
    `;
    return (
      <LogoHeader>
        <Logo>
          <Img src="./images/logo.png" alt="computer-science-logo" />
        </Logo>
        <LogoTitle> best webDev  projects</LogoTitle>
      </LogoHeader>
    );
}
 
export default LogoNav;