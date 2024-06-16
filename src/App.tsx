import React, { useState } from "react";
import styled from "styled-components";
import { HeaderContainer, TitleComponent, Title, IconComponent, BodyContainer, AboutContainerStyled, 
  DetailsContainerStyled, ProfileImageComponentStyled, NameTextComponentStyled, CareerTextComponentStyled,
   SocialMediaComponentStyled, FacebookImageStyled, LinkedInImageStyled, TwiterImageStyled,
    GitHubImageStyled, StyledLink, GeneralDetailsStyled,
     PhoneNumberContainerStyled, 
     GeneralPlaceHolderTextStyled,
     GeneralDetailsTextStyled,
     InfoDetailsContainerStyled,
     InfoImageStyled,
     HorizontalLineStyled} from "./styled/header";
import MoonIcon from "./assets/MoonIcon";
import { useTranslation } from "react-i18next";
import { resources } from "./resource";
import { MenuImages, generalDetails } from "./data/GeneralDetails";
import { ButtonImage, MenuButton, MenuComponentStyled, MenuContainerStyled } from "./styled/menu";
import { AboutMeLineStyled, AboutMeTextStyled, CareerObjectiveSectionStyled, DetailsContentStyled, WhatIDoContainerStyled, WhatIDoDivStyled, WhatIDoTextStyled } from "./styled/about";

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
  const {t} = useTranslation();
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (el:any) => {
    console.log("button ", el);
    setActiveButton(el.id)
  }
  return (
   <BackgroudColorWrapper>
    <MainContentWrapper>
      <HeaderContainer>
        <TitleComponent>
          <Title>
            {t(resources.en.translation.title)}
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
          {t(resources.en.translation.title)}
        </NameTextComponentStyled>
        <CareerTextComponentStyled>{t(resources.en.translation.profession)}</CareerTextComponentStyled>
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
        <GeneralDetailsStyled>
          {generalDetails.map((el) => 
          <>
           <InfoDetailsContainerStyled>
            <InfoImageStyled src = {el.iconSrc}/>
            <PhoneNumberContainerStyled>
              <GeneralPlaceHolderTextStyled>{el.placeHolder}</GeneralPlaceHolderTextStyled>
              <GeneralDetailsTextStyled>{el.value}</GeneralDetailsTextStyled>
            </PhoneNumberContainerStyled>
          </InfoDetailsContainerStyled>
          <HorizontalLineStyled />
          </>
          )}
        </GeneralDetailsStyled>
        </AboutContainerStyled>
        <DetailsContainerStyled>
          <MenuContainerStyled>
            <MenuComponentStyled>
              {
                MenuImages.map((el) => 
                <MenuButton 
                key={el.id} 
                onClick={() => handleClick(el)}
                >
                  <ButtonImage src = {activeButton === el.id ? el.activeSrc : el.src} />
                </MenuButton>
                )
              }
            </MenuComponentStyled>
          </MenuContainerStyled>
          <DetailsContentStyled>
            <AboutMeTextStyled>{resources.en.translation.aboutme}</AboutMeTextStyled>
            <AboutMeLineStyled />
            <br/>
            <CareerObjectiveSectionStyled>
              {resources.en.translation.careerObjective}
            </CareerObjectiveSectionStyled>
            <WhatIDoTextStyled>
              {resources.en.translation.whatIDo} <br/>
            </WhatIDoTextStyled>
            <WhatIDoContainerStyled>
              <WhatIDoDivStyled>
                Web Development
              </WhatIDoDivStyled>
            </WhatIDoContainerStyled>
          </DetailsContentStyled>
        </DetailsContainerStyled>
      </BodyContainer>
    </MainContentWrapper>
   </BackgroudColorWrapper>
  );
}

export default App;
