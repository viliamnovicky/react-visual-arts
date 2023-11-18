import HomeCont from "../components/HomeCont";
import HomeImage from "../components/HomeImage";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.home}>Home</div>
      <HomeImage image={"01.jpg"} optClass={"margin-top-5"}>
        <HomeCont optClass="home-cont-right"/>
      </HomeImage>
      <HomeImage image={"02.jpg"}>
      <HomeCont optClass="home-cont-left"/>
      </HomeImage>
      <HomeImage image={"03.jpg"}></HomeImage>
      <HomeImage image={"04.jpg"}></HomeImage>
    </>
  );
}

export default Home;
