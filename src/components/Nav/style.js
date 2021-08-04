import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  -webkit-box-reflect: below -30% linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  width: 80px;
  height: 80px;
`;

export const NavLogo = styled.div`
  margin-left: 50px;
  text-align: center;
`;

export const ButtonMode = styled.button`
  display: block;

`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const NavBurger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const Burger = styled.div`
  width: 50px;
  height: 6px;
  background-color: rgb(238, 238, 238);
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transform: translateX(-50px);
      background-color: transparent;
    `}

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  &:before {
    transform: translateY(-16px);
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        transform: rotate(45deg) translate(35px, -35px);
        background-color: rgb(238, 238, 238);
      `}
  }
  &:after {
    transform: translateY(16px);
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        transform: rotate(-45deg) translate(35px, 35px);
        background-color: rgb(238, 238, 238);
      `}
  }
`;

export const Module = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 2;
  transition: all 1s;
  transform: translateY(-100px) translateX(-50%);
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transition: all 1s;
      transform: translateY(50px) translateX(-50%);
      transition-delay: 0.5s;
    `}
`;

export const MenuBackGround = styled.div`
  position: fixed;
  transform: translateY(-100px);
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  transition: all 1s;

  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transition: all 1s;
      transform: translateY(0);
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.9);
    `}
`;

// MenuBar

export const Ul = styled.ul`
  display: flex;
`;
export const Li = styled.li`
  margin: 0 50px;
  font-size: 30px;
  cursor: pointer;
  color: rgb(238, 238, 238);
  font-family: "Poppins", sans-serif;
`;

export const TitleMenu = styled.h3`
  color: #39b54a;
  margin-bottom: 90px;
  letter-spacing: 4px;
  font-size: 40px;
  text-transform: uppercase;
`;
