import FixedBackground from "../ui/FixedBackground";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button"
import styled from "styled-components";

import facebook from "../../public/icons/facebook.svg"
import instagram from "../../public/icons/instagram.svg"
import youtube from "../../public/icons/youtube.svg"
import phone from "../../public/icons/phone.svg"
import email from "../../public/icons/email.svg"
import person from "../../public/icons/person.svg"
import contact from "../../public/icons/contact.svg"

const StyledContact = styled.div`
    width: 60vw;
    background: transparent;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: var(--color-white);
    padding: 5rem;
    transition: all .5s;
    border-radius: 2rem;

    &:hover {
        width: 50vw;
        background: var(--color-grey-transp);
    }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey);
  color: var(--color-white);
  height: 12.8rem;
  margin: auto;
  font-size: 4rem;
  font-weight: 800;

`;

const Heading = styled.h1`
    text-align: center;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        height: 5rem;
    }
`

const Data = styled.p`
    font-size: 2rem;
    font-weight: 800;
    padding: 1rem 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    button {
        visibility: hidden;
        opacity: 0
    }

    &:hover {
        background: var(--color-grey-transp);
    }

    &:hover button {
        visibility: visible;
        opacity: 1;
    }
` 

const Image = styled.img`
    height: 2.5rem;
    filter: invert(100%) sepia(60%) saturate(5194%) hue-rotate(181deg) brightness(129%) contrast(88%);
`

function Contact() {
  return (
    <>
      <Navbar />

      <FixedBackground imageUrl={"../img/about01.jpg"}>
        <StyledContact>
            <Heading><Image src={contact}></Image>Kontaktné údaje</Heading>
            <Data><span><Image src={person}></Image>Viliam Novický</span></Data>
            <Data><span><Image src={phone}></Image>+421 918 311 386</span><Button>kopírovať</Button></Data>
            <Data><span><Image src={email}></Image>viliamnovicky@gmail.com</span><Button>správa</Button></Data>
            <Data><span><Image src={instagram}></Image>viliamnovicky</span><Button>zobraziť</Button></Data>
            <Data><span><Image src={facebook}></Image>Viliam Novický Visual Arts</span><Button>zobraziť</Button></Data>
            <Data><span><Image src={youtube}></Image>Viliam Novicky</span><Button>zobraziť</Button></Data>
            <Data>Kdekoľvek som potrebný</Data>
        </StyledContact>
      </FixedBackground>
      <Description>O mne</Description>
      <FixedBackground imageUrl={"../img/about02.jpg"}></FixedBackground>
      <Description>Niektoré veci sa nemenia</Description>
      <FixedBackground imageUrl={"../img/about03.jpg"}></FixedBackground>
      <Description>Byť "normálny" je nuda</Description>
      <FixedBackground imageUrl={"../img/about04.jpg"}></FixedBackground>
      <Description>Fotografické úspechy</Description>
      <FixedBackground imageUrl={"../img/about05.jpg"}></FixedBackground>
      <Description>Kalokagatia</Description>
      <FixedBackground imageUrl={"../img/about06.jpg"}></FixedBackground>
    </>
  );
}

export default Contact;
