import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px 50px 0;
`

export const TitleComponent = styled.div`
  margin-bottom: 60px;
`

export const IconComponent = styled.div`
  margin-bottom: 60px;
`

export const Title = styled.h3`
    color: #EC1B09;
    font-style: oblique;
`

export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

export const AboutContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    background-color: white;
    border-radius: 10px;
`

export const DetailsContainerStyled = styled.div`
    width: 66%;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const ProfileImageComponentStyled = styled.img`
    position: relative;
    margin-top: -90px;
    width: 150px;
    height: 150px;
    border-radius: 10%;
`

export const NameTextComponentStyled = styled.text`
    color: #0B0909;
    font-size: 20px;
    margin-top: 5px;
    font-weight: 600;
`

export const CareerTextComponentStyled = styled.text`
    font-size: 15px;
    font-weight: 100;
    opacity: .6;
    margin-top: 3px;
`

export const SocialMediaComponentStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
`

export const StyledLink = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const FacebookImageStyled = styled.img`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    margin: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
export const LinkedInImageStyled = styled.img`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    margin: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
export const TwiterImageStyled = styled.img`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    margin: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
export const GitHubImageStyled = styled.img`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    margin: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const GeneralDetailsStyled = styled.div`
  background-color: #F2F5F9;
  width: 350px;
  height: auto;
  border-radius: 10px;
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InfoDetailsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 10px;
`

export const InfoImageStyled = styled.img`
margin-left: 10px;
  margin-right: 30px;
  height: 20px;
  width: 20px;
`

export const PhoneNumberContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const GeneralPlaceHolderTextStyled = styled.text`
  color: gray;
  font-size: 15px;
  opacity: 1;
`

export const GeneralDetailsTextStyled = styled.text`
  font-weight: 500;
  letter-spacing: .1px;
`

export const HorizontalLineStyled = styled.hr`
  border: 1px solid gray;
  border-radius: 1px;
  margin: 10px auto;
  width: 75%;
`