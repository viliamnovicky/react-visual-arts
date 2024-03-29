import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBlogCover = styled.div`
  width: 100%;
  height: 22vw;
  background: url(${(props) => props.image}) no-repeat center center/cover !important;
  border-radius: 2rem;
  position: relative;

  &:hover {
    background-size: 110%;
  }

  @media screen and (max-width: 1366px){
    height: 33vw;
    }

  @media screen and (max-width: 1000px){
    height: 66vw;
    }
`;

const Date = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--color-white);
  font-weight: 800;

  @media screen and (max-width: 1000px){
    font-size: 1.2rem;
    }
`;

const NameCont = styled.h1`
  position: absolute;
  width: 100%;
  height: 40%;
  background: var(--color-grey-transp);
  top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1366px){
    gap: 1rem;
    }
  @media screen and (max-width: 1000px){
    gap: .5rem;
    }
`;

const Name = styled.h1`
  color: var(--color-white);
  font-size: 3rem;

  @media screen and (max-width: 1366px){
    font-size: 2rem;
    }

  @media screen and (max-width: 1000px){
    font-size: 1.6rem;
    }
`;

const Button = styled(NavLink)`
    background: var(--color-white-transp);
    padding: 1rem 5rem;
    border-radius: 50rem;
    text-decoration: none;
    color: var(--color-grey);
    font-weight: 800;
    transition: all .2s;

    &:hover {
        background: var(--color-white-transp-2);
    }

    @media screen and (max-width: 1366px){
      padding: .5rem 3rem;
      font-size: 1.6rem;
    }

    @media screen and (max-width: 1000px){
    font-size: 1.2rem;
    padding: .4rem 2rem;
    }
`

function BlogCover({ blog, onClick }) {
  return (
    <StyledBlogCover image={blog.coverImage} key={blog.id}>
      <Date>
        {blog.dateStart} {blog.dateEnd && " - " + blog.dateEnd}
      </Date>
      <NameCont>
        <Name>{blog.name.split("_").join(" ")}</Name>
        <Button color="secondary" to={blog?.name} onClick={onClick}>
          Čítať
        </Button>
      </NameCont>
    </StyledBlogCover>
  );
}

export default BlogCover;
