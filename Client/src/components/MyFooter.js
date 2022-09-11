import { CardGiftcardRounded, HelpRounded, StarBorderRounded, StorefrontRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display : flex;
    column-count : 4;
    background-color : #131b29;
    color : white;
    position: relative; 
    height : 330px;
`
const Left = styled.div`
    display : flex;
    flex : 1.6;
`
const About = styled.ul`
    list-style-type: none;
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
`
const ListItem = styled.li`
    padding : 5px;
    cursor: pointer;
    &:hover{
        text-decoration: 1px underline;
        color : #0760f0;
    }
`
const Help = styled.ul`
    list-style-type: none;
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
`
const Policy = styled.ul`
    list-style-type: none;
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
`
const Social = styled.ul`
    list-style-type: none;
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
`
const Para = styled.span`
    display : block;
    font-weight : 470;
    font-size : 13px;
    color : #f2d0ae;
    padding-bottom : 10px;
`
const MailUs = styled.p`
    margin-left: 0px;
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
   
`
const Address = styled.p`
    font-weight : 450;
    font-size : 12px;
    margin : 15px;
   
`
const Right = styled.div`
    display : flex;
    flex: 1;
`
const Line = styled.div`
    position : absolute;
    border-bottom : 1px white ridge;
    width:100%;
    top : 260px;
` 
const Bottom = styled.div`
    position : absolute;
    width : 100%;
    bottom : 25px;
    display: flex;
    justify-content: space-around;
    align-item: center;
    font-weight : 450;
    font-size : 14px;
`
const Icon = styled.div`
    display: flex;
    cursor : pointer;
    &: hover{
        transform: scale(1.1);
        color : #de1304;
    }
`

function MyFooter() {
  return (
    <Container>
        <Left>
            <About><Para>ABOUT</Para>
                <ListItem>Contact Us</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Flipkart Stories</ListItem>
                <ListItem>Press</ListItem>
                <ListItem>Flipkart Wholesale</ListItem>
                <ListItem>Corporate Information</ListItem>
            </About>
            <Help><Para>HELP</Para>
                <ListItem>Payments</ListItem>
                <ListItem>Shipping</ListItem>
                <ListItem>Cancellation and Returns</ListItem>
                <ListItem>FAQ</ListItem>
                <ListItem>Report Infringement</ListItem>
            </Help>
            <Policy><Para>POLICY</Para>
                <ListItem>Return Policy</ListItem>
                <ListItem>Terms Of Use</ListItem>
                <ListItem>Security</ListItem>
                <ListItem>Privacy</ListItem>
                <ListItem>Sitemap</ListItem>
                <ListItem>EPR Compliance</ListItem>
            </Policy>
            <Social> <Para>SOCIAL</Para>
                <ListItem>Instagram</ListItem>
                <ListItem>Facebook</ListItem>
                <ListItem>Twitter</ListItem>
            </Social>
        </Left>
        <Right>
            <MailUs><Para>Mail Us:</Para>
                    Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia and
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,    
                    Bengaluru, 560103,
                    Karnataka, India
            </MailUs>
            <Address><Para>Registered Office Address:</Para>
                Flipkart Internet Private Limited,
                Buildings Alyssa, Begonia and
                Clove Embassy Tech Village,
                Outer Ring Road, Devarabeesanahalli Village,
                Bengaluru, 560103,
                Karnataka, India
                CIN : U51109KA2012PTC066107
                Telephone: 1800 202 9898
            </Address>
        </Right>
        <Line></Line>
        <Bottom>
            <Icon><StorefrontRounded />Sell On Flipkart</Icon>
            <Icon><StarBorderRounded />Advertise</Icon>
            <Icon> <CardGiftcardRounded /> Gift Cards</Icon>
            <Icon> <HelpRounded />Help Center</Icon>
           © 2007-2022 Flipkart.com
        </Bottom>
    </Container>
  )
}

export default MyFooter
