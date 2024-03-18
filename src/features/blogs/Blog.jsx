import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useBlogsData } from "./useBlogsData";
import styled from "styled-components";
import { Container, Heading, Paragraph, Image, AnotherImages, Links } from "./blogComponents";
import Navbar from "../../ui/Navbar";
import Button from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ErrorPage from "../../pages/ErrorPage";

function Blog() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [background, setBackground] = useState("");

  const { id } = useParams();
  const { isLoadingBlogs, blogs, errorBlogs } = useBlogsData();

  function handleOpenModal(e) {
    setIsOpenModal(true);
    setBackground(e.target.id);
  }

  if (isLoadingBlogs) return <Spinner />;

  let blog = blogs?.filter((blog) => blog.name === id);
  if (blog.length > 0) {
    blog = blog[0];
  } else {blog = undefined}
  console.log(blog)

  if (blog === undefined || !blog.days) return <ErrorPage error="Blog sa nenašiel" />;

  return (
    <>
      <Navbar />
      <Heading>
        {blog.name.split("_").join(" ")}
        <span>{blog.dateStart}</span>
      </Heading>
      {blog.days[0]?.containers.map((cont, index) =>
        cont.imagePosition === "right" ? (
          <Container>
            <Paragraph>
              {cont.text}
              {index === blog.days[0].containers.length - 1 && (
                <Links>
                  <Button color="primary">záznam gps</Button>
                  <Button color="primary">video</Button>
                </Links>
              )}
            </Paragraph>
            <Image src={cont.image} id={cont.image} onClick={(e) => handleOpenModal(e)} />
          </Container>
        ) : (
          <Container>
            <Image src={cont.image} id={cont.image} onClick={(e) => handleOpenModal(e)} />
            <Paragraph>
              {cont.text}
              {index === blog.days[0].containers.length - 1 && (
                <Links>
                  <Button as="a" href={blog.gpsLink} color="primary" target="_blank">
                    záznam gps
                  </Button>
                  <Button as="a" href={blog.videoLink} color="primary" target="_blank">
                    video
                  </Button>
                </Links>
              )}
            </Paragraph>
          </Container>
        )
      )}
      <AnotherImages>
        {blog.days[0].anotherImages.map((image) => (
          <Image src={image} id={image} onClick={(e) => handleOpenModal(e)} />
        ))}
      </AnotherImages>
      {isOpenModal && <Modal background={background} onClose={() => setIsOpenModal(false)}></Modal>}
    </>
  );
}

export default Blog;
