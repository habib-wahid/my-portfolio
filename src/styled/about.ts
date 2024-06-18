import styled from "styled-components";

export const DetailsContentStyled = styled.div`
    margin: 10px 40px;
`

export const AboutMeTextStyled = styled.span`
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 1;
`

export const AboutMeLineStyled = styled.hr`
    border: none;
    background-color: #FF9C1A;
    border-radius: 5px;
    width: 40%;
    height: 2px;
    margin: -13px auto;
`

export const CareerObjectiveSectionStyled = styled.section`
    text-align: left;
    margin: 20px 0;
    opacity: .8;
`

export const WhatIDoTextStyled = styled.span`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1;
    margin: 20px 0;
`

export const WhatIDoContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 15px 0;
`
export const WhatIDoDivStyled = styled.div`
    background-color: ${(props) => props.color};
    width: 45%;
    height: auto;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
`

export const StackIconStyled = styled.img`
    width: 17px;
    height: 17px;
`

export const StackTitleStyled = styled.text`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1;
`

export const StackDetailsStyled = styled.section`
    opacity: .8;
`