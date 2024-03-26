import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10rem;
  width: 100vw;
  background: var(--color-grey-transp);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 0rem;
  }

  @media screen and (max-width: 600px) {
    height: 8rem;
  }

  p {
    font-size: 2rem;
    color: white;

    @media screen and (max-width: 1000px) {
      padding-top: 2rem;
    }

    @media screen and (max-width: 600px) {
      padding-top: 1rem;
      font-size: 1.6rem;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FooterLink = styled.a`
  width: 15rem;
  height: 10rem;
  display: flex;
  justify-self: center;
  align-self: center;
  position: relative;
  transition: all 0.2s;

  @media screen and (max-width: 1000px) {
    width: 10vw;
    height: auto;
  }

  &:hover {
    background: var(--color-grey);
  }

  img {
    width: 3rem;
    height: 3rem;
    filter: invert(100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1000px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Viliam Novický {new Date().getFullYear()}</p>
      <FooterLinks>
        <FooterLink href="https://www.facebook.com/ViliamNovickyVisualArts" target="_blank">
          <img src="../../public/icons/facebook.svg"></img>
        </FooterLink>
        <FooterLink href="https://www.instagram.com/viliamnovicky/" target="_blank">
          <img src="../../public/icons/instagram.svg"></img>
        </FooterLink>
        <FooterLink href="https://www.youtube.com/channel/UCp9fNN9AzBfN6XVvNykU-_Q" target="_blank">
          <img src="../../public/icons/youtube.svg"></img>
        </FooterLink>
      </FooterLinks>
    </StyledFooter>
  );
}

export default Footer;
