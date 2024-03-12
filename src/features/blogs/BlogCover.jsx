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
`;

const Date = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--color-white);
  font-weight: 800;
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
`;

const Name = styled.h1`
  color: var(--color-white);
  font-size: 3rem;
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
