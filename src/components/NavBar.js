import React from "react";
import styled from "@emotion/styled";

const NavBar = (props) => {
  const NavList = styled.nav``;
  const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const List = styled.li`
    list-style: none;
    font-size: 18px;
    padding-right: 15px;
    cursor: pointer;
    color: white;
    text-transform: capitalize;
  `;
  return (
    <NavList>
      <Ul>
        <List>home</List>
        <List>about</List>
        <List>projects</List>
        <List>sign in</List>
        <List>sign up</List>
      </Ul>
    </NavList>
  );
};

export default NavBar;
