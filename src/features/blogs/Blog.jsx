import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useBlogsData } from "./useBlogsData";
import styled from "styled-components";
import { Container, Heading, Paragraph, Image, AnotherImages } from "./blogComponents";
import Navbar from "../../ui/Navbar";

function Blog() {
  const { id } = useParams();
  const { isLoadingBlogs, blogs, errorBlogs } = useBlogsData();

  if (isLoadingBlogs) return <Spinner />;

  let blog = blogs?.filter((blog) => blog.name === id);
  blog = blog[0];

  if (errorBlogs) return <p>{errorBlogs}</p>;

  return (
    <>
      <Navbar />
      <Heading>
        {blog.name.split("_").join(" ")}
        <span>{blog.dateStart}</span>
      </Heading>
      {blog.days[0].containers.map((cont) =>
        cont.imagePosition === "right" ? (
          <Container>
            <Paragraph>{cont.text}</Paragraph>
            <Image src={cont.image} />
          </Container>
        ) : (
          <Container>
            <Image src={cont.image} />
            <Paragraph>{cont.text}</Paragraph>
          </Container>
        )
      )}
      <AnotherImages>
        {blog.days[0].anotherImages.map((image) => (
          <Image src={image} />
        ))}
      </AnotherImages>
    </>
  );
}

export default Blog;
