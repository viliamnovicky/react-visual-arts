import HomeCont from "../ui/HomeCont";
import HomeImage from "../ui/HomeImage";
import Navbar from "../ui/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HomeImage imageUrl={"../01.jpg"} optClass={"margin-top-5"}>
        <HomeCont optClass="home-cont-right">
          <h1>Viac ako fotografia</h1>
          <p className="italic">
            Jeden život, iba jeden, prečo neutekáme ako v jednom ohni za našimi najdivokejšími
            snami?
          </p>
          <p className="margin-top-2">
            Fotografovaniu sa venujem už 10 rokov. Z toho, čo zo začiatku bola iba jedna z mnoha
            záľub sa časom stal spôsob, akým sa pozerám na život. Spôsob, ktorým vyjadrujem svoje
            pocity a myšlienky. Najlepší relax, najväčšia vášeň.
          </p>
        </HomeCont>
      </HomeImage>
      <HomeImage imageUrl={"../02.jpg"}>
        <HomeCont optClass="home-cont-left">
          <p>
            Snom mnohých ľudí je robiť v živote to, čo ich baví, čo ich napĺňa. Patrím medzi nich aj
            ja a svojim snom utekám oproti.
          </p>
        </HomeCont>
      </HomeImage>
      <HomeImage imageUrl={"../03.jpg"}>
        <HomeCont optClass="home-cont-left">
          <p>Som stále plný nových nápadov a stále mám chuť sa zlepšovať.</p>
        </HomeCont>
      </HomeImage>
      <HomeImage imageUrl={"../04.jpg"}>
        <HomeCont optClass="home-cont-center">
          <p>
            Ak hľadáte fotografa, pre ktorého Vaša významná udalosť nebude iba ďalšou zákazk ou, ak
            na Vašich fotografiách chcete mať zachytené emócie a atmosféru výnimočných momentov, tak
            verím, že u mňa nájdete, čo hľadáte.
          </p>
        </HomeCont>
      </HomeImage>
    </>
  );
}

export default Home;
