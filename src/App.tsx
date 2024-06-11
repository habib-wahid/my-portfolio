import React from "react";
import "./main.css";
import styled from "styled-components";
import { HeaderContainer, TitleComponent, Title, IconComponent, BodyContainer, AboutContainerStyled, DetailsContainerStyled, ProfileImageComponentStyled } from "./styled/header";
import MoonIcon from "./assets/MoonIcon";

const BackgroudColorWrapper = styled.div`
  background-color: #EBF2FA;
  width: 100vw;
  height: 100vh;
`

const MainContentWrapper = styled.div`
    margin: 0px 100px 0px 100px;
`
function App() {

  return (
   <BackgroudColorWrapper>
    <MainContentWrapper>
      <HeaderContainer>
        <TitleComponent>
          <Title>
            MD Habibur Rahman
          </Title>
        </TitleComponent>
        <IconComponent>
          <MoonIcon />
        </IconComponent>
      </HeaderContainer>
      <BodyContainer>
        <AboutContainerStyled>
        <ProfileImageComponentStyled src = "/images/profile.jpg" />
        <div>
          Md Habibur Rahman
        </div>
        </AboutContainerStyled>
        <DetailsContainerStyled>
          <h3>About Me</h3>
        </DetailsContainerStyled>
      </BodyContainer>
    </MainContentWrapper>
   </BackgroudColorWrapper>
  );
}

export default App;
