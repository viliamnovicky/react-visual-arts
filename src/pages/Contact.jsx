import FixedBackground from "../ui/FixedBackground";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import styled from "styled-components";

import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";
import youtube from "../../public/icons/youtube.svg";
import phone from "../../public/icons/phone.svg";
import email from "../../public/icons/email.svg";
import person from "../../public/icons/person.svg";
import contact from "../../public/icons/contact.svg";
import location from "../../public/icons/location.svg";

const StyledContact = styled.div`
  width: 60vw;
  background: transparent;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: var(--color-white);
  padding: 5rem;
  transition: all 0.5s;
  border-radius: 2rem;
  z-index: 1;

  &:hover {
    width: 50vw;
    background: var(--color-grey-transp);

    h1,
    span {
      background: transparent;
    }
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
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;
  background: var(--color-grey-transp);
  transition: all 0.5s;
  border-radius: 1rem;

  img {
    height: 5rem;
  }
`;

const Data = styled.p`
  font-size: 2rem;
  font-weight: 800;
  padding: 0rem 5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 1rem;
  transition: all 0.5s;
  margin: auto;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    height: 100%;
    background: var(--color-grey-transp);
    padding: 2rem;
    width: 30rem;
    transition: all 0.5s;
  }

  button {
    visibility: hidden;
    color: var(--color-white);
    opacity: 0;
  }

  &:hover {
    background: var(--color-grey-transp);
    justify-content: space-between;
    width: 80%;
  }

  &:hover button {
    visibility: visible;
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 2.5rem;
  filter: invert(100%) sepia(60%) saturate(5194%) hue-rotate(181deg) brightness(129%) contrast(88%);
`;

const About = styled.h6`
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 800;
  width: 100rem;
  padding: 5rem;
  text-align: justify;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  opacity: 0;
`;

const ButtonMessage = styled.a`
    position: absolute;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    width: 40rem;
    height: 10rem;
    color: var(--color-white);
    font-weight: 100;
    border-radius: 2rem;
    background: var(--color-grey-transp);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: var(--color-grey-transp-3);
      margin-bottom: .2rem
    }
  `

function Contact() {
  return (
    <>
      <Navbar />

      <FixedBackground imageUrl={"../img/about01.jpg"}>
        <StyledContact>
          <Heading>
            <Image src={contact}></Image>Kontaktné údaje
          </Heading>
          <Data>
            <span>
              <Image src={person}></Image>Viliam Novický
            </span>
            <Button></Button>
          </Data>
          <Data>
            <span>
              <Image src={phone}></Image>+421 918 311 386
            </span>
            <Button>kopírovať</Button>
          </Data>
          <Data>
            <span>
              <Image src={email}></Image>viliamnovicky@gmail.com
            </span>
            <Button>správa</Button>
          </Data>
          <Data>
            <span>
              <Image src={instagram}></Image>viliamnovicky
            </span>
            <Button>zobraziť</Button>
          </Data>
          <Data>
            <span>
              <Image src={facebook}></Image>Viliam Novický Visual Arts
            </span>
            <Button>zobraziť</Button>
          </Data>
          <Data>
            <span>
              <Image src={youtube}></Image>Viliam Novicky
            </span>
            <Button>zobraziť</Button>
          </Data>
          <Data>
            <span>
              <Image src={location}></Image>Kdekoľvek som potrebný
            </span>
            <Button>mapa</Button>
          </Data>
        </StyledContact>
      </FixedBackground>
      <Description>O mne</Description>
      <FixedBackground imageUrl={"../img/about02.jpg"}>
        <About>
          Už od mala som veľmi neposedný. V priebehu života som bol posadnutý mnohými záľubami.
          Väčšinou mi táto vášeň vydržala zopár mesiacov a potom sa vytratila a ja som našiel znova
          niečo iné. Niekto by povedal, že som nerozhodný, že neviem, čo od života chcem. Ja si to
          však nemyslím. Náš čas na tomto svete je tak obmedzený a život nám ponúka tak veľa
          možností. Ja som z nich vždy chcel vyskúšať čo najviac. Veď ako sa hovorí, človek ľutuje
          viac veci ktoré nespravil a mohol, ako tie ktoré urobil.
        </About>
      </FixedBackground>
      <Description>Niektoré veci sa nemenia</Description>
      <FixedBackground imageUrl={"../img/about03.jpg"}>
        <About>
          No samozrejme, môj život nie je iba zhlukom náhodných vzplanutí. Sú v ňom aj konštanty,
          ktoré ho jasne definujú. Je to láska k prírode, potreba tvoriť, potreba rozvíjať svoje
          schopnosti a vedomosti. Rovnako sa v ňom nezaobídem bez pohybu akéhokoľvek druhu. A v
          neposlednom rade je tu samozrejme moja najväčšia vášeň, fotografovanie.
        </About>
      </FixedBackground>
      <Description>Byť "normálny" je nuda</Description>
      <FixedBackground imageUrl={"../img/about04.jpg"}>
        <About>
          Táto fotografia zachytáva, ako sa občerstvujem vo svojom prirodzenom prostredí.
        </About>
      </FixedBackground>
      <Description>Fotografické úspechy</Description>
      <FixedBackground imageUrl={"../img/about05.jpg"}>
        <About>
          Možno by som mal spomenúť aj niečo o mojich fotografických úspechoch. A vlastne, nie je
          čo. Nezúčastňujem sa súťaží. Hoci som dosť súťaživý človek, myslím, že umenie tu nie je
          preto, aby sme sa v ňom merali. Je to prostriedok na vyjadrenie našich pocitov. Spôsob
          uľavenia našej duši. Neexistuje žiadna merná jednotka, ktorá by posúdila kvalitu umenia.
          Pri fotení Vašej udalosti ma nezaujímajú názory kritikov, chcem, aby tie fotografie boli
          dokonalé pre Vás.
        </About>
      </FixedBackground>
      <Description>Kalokagatia</Description>
      <FixedBackground imageUrl={"../img/about06.jpg"}>
        <About>
          Som nesmierne rád, že je v mojom živote rovnováha. Veľkú zásluhu má na tom práve
          fotografovanie. Tento web nie je iba prehliadka mojich zručností, je v ňom uložené aj
          niečo z mojej podstaty. Ak som Vás zaujal, budem sa veľmi tešiť na našu spoluprácu.
        </About>
        <ButtonMessage>Napísať správu</ButtonMessage>
      </FixedBackground>
    </>
  );
}

export default Contact;
