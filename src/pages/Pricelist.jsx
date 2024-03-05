import BackgroundCont from "../ui/BackgroundCont";
import Navbar from "../ui/Navbar";
import bgWeding from "../../public/img/cennik-svadba.jpg";
import bgEvent from "../../public/img/cennik-portret.jpg";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledPricelist = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;

const Price = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background: var(--color-white-transp);
  transition: all 0.2s;

  &:hover {
    background: var(--color-white-transp-2);
  }

  &:hover p,
  &:hover button {
    opacity: 1;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--color-white);
  background: var(--color-grey-transp);
  font-weight: 100;
  padding: 3rem;

  span {
    display: block;
  }
`;

const Description = styled.p`
  background: var(--color-grey-transp);
  color: var(--color-white);
  font-size: 2rem;
  padding: 2rem;
  width: 95%;
  margin: auto;
  margin-top: 2rem;
  border-radius: 2rem;
  opacity: 0;
  transition: all 0.2s;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 1rem 2rem;
`;

function Pricelist() {
  return (
    <>
      <Navbar />
      <BackgroundCont image={bgWeding} heading="Svadba" className="margin-top-5">
        <StyledPricelist>
          <Price>
            <Heading>
              Balík "Light" <span>350€</span>
            </Heading>
            <Description>
              Ak si nepotrpíte na veľkých oslavách a všetko, na čom Vám záleží je počuť áno od
              svojej spriaznenej duše, tento balík je pre Vás ako stvorený.
            </Description>
            <Paragraph>Dĺžka trvania do 4 hodín</Paragraph>
            <Paragraph>Minimálne 100 upravených fotografií</Paragraph>
            <Paragraph>Fotografie na USB v originálnom balení</Paragraph>
            <Paragraph>Fotoalbum</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Balík "Medium" <span>500€</span>
            </Heading>
            <Description>
              Ak chcete mať zo svadby zachytené všetko podstatné začinajúc kostolom a končiac
              redovým tancom.
            </Description>
            <Paragraph>Dĺžka trvania do 9 hodín</Paragraph>
            <Paragraph>Minimálne 400 upravených fotografií</Paragraph>
            <Paragraph>Fotografie na USB v originálnom balení</Paragraph>
            <Paragraph>Fotoalbum</Paragraph>
            <Paragraph>Originálne balenie</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Balík "Full" <span>650€</span>
            </Heading>
            <Description>
              Ak chcete z Vašej svadby zvečniť každučký okamih od príprav po redový tanec, tento
              balík je pre Vás ten správny. Budem Vám k dispozícii celý svadobný deň.
            </Description>
            <Paragraph>Celý priebeh svadby</Paragraph>
            <Paragraph>Minimálne 700 upravených fotografií</Paragraph>
            <Paragraph>Fotografie na USB v originálnom balení</Paragraph>
            <Paragraph>Fotokniha</Paragraph>
            <Paragraph>Originálne balenie</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Balík "Premium" <span>800€</span>
            </Heading>
            <Description>
              Ak hľadáte výnimočný spôsob pre uchovanie Vašich svadobných spomienok, možno Vás
              zaujme personalizovaná webová stránka. Môžete ju jednoducho zdieľať s rodinou a
              priateľmi. Bojíte sa nevyžiadaných návštev? Jednoducho si ju zaheslujete.
            </Description>
            <Paragraph>Všetko z "Full" balíka</Paragraph>
            <Paragraph>Originálna web-stránka</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
        </StyledPricelist>
      </BackgroundCont>
      <BackgroundCont image={bgEvent} heading="ďalšie eventy">
        <StyledPricelist>
          <Price>
            <Heading>
              Portrét v prírode<span>100€</span>
            </Heading>
            <Paragraph>Hodinové fotenie v prírode</Paragraph>
            <Paragraph>Pre rodinky, zaľúbené páry či jednotlivcov</Paragraph>
            <Paragraph>Fotografie v Google drive</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Krstiny<span>200€</span>
            </Heading>
            <Paragraph>Celý priebeh krstín</Paragraph>
            <Paragraph>Portréty po omši</Paragraph>
            <Paragraph>Fotografie v Google Drive</Paragraph>
            <Paragraph>Fotoalbum</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Stužková<span>cena dohodou</span>
            </Heading>
            <Paragraph>Fotenie stužkovej</Paragraph>
            <Paragraph>Fotografie na oznamká</Paragraph>
            <Paragraph>Vytvorenie oznamka</Paragraph>
            <Paragraph>Cena závisí od zvolených služieb a počtu osôb</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
          <Price>
            <Heading>
              Birmovka/Prijímanie<span>cena dohodou</span>
            </Heading>
            <Paragraph>Fotografie na DVD, USB alebo Google drive</Paragraph>
            <Paragraph>Skupinové fotografie po omši</Paragraph>
            <Paragraph>Portréty</Paragraph>
            <Paragraph>Cena závisí od zvolených služieb a počtu osôb</Paragraph>
            <Button type="price">Rezervovať termín</Button>
          </Price>
        </StyledPricelist>
      </BackgroundCont>
    </>
  );
}

export default Pricelist;
