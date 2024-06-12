import React from "react";
import styled from "styled-components";
import { HeaderContainer, TitleComponent, Title, IconComponent, BodyContainer, AboutContainerStyled, DetailsContainerStyled, ProfileImageComponentStyled, NameTextComponentStyled, CareerTextComponentStyled, SocialMediaComponentStyled, FacebookImageStyled, LinkedInImageStyled, TwiterImageStyled, GitHubImageStyled, StyledLink } from "./styled/header";
import MoonIcon from "./assets/MoonIcon";

const BackgroudColorWrapper = styled.div`
  background-color: #EBF2FA;
  width: 100vw;
  height: 100vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
        <NameTextComponentStyled>
          Md Habibur Rahman
        </NameTextComponentStyled>
        <CareerTextComponentStyled>FullStack Software Engineer</CareerTextComponentStyled>
        <SocialMediaComponentStyled>
          <StyledLink href="https://www.facebook.com/mdhabib.mdhabib.733" target="_blank">
            <FacebookImageStyled src = "/images/Facebook.png" />
          </StyledLink>
          <StyledLink href = "https://www.linkedin.com/in/habib-wahid/" target="_blank">
            <LinkedInImageStyled src = "/images/Linkedin.png" />
          </StyledLink>
          <StyledLink href = "https://www.linkedin.com/in/habib-wahid/" target="_blank">
            <TwiterImageStyled src = "/images/Twitter.png" />
          </StyledLink>
          <StyledLink href="https://github.com/habib-wahid" target="_blank">
            <GitHubImageStyled src = "/images/Github.png" />
          </StyledLink>
        </SocialMediaComponentStyled>
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
