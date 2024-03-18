import { NavLink } from "react-router-dom";
import { useBlogsData } from "../features/blogs/useBlogsData";
import Navbar from "../ui/Navbar";
import PortfolioCategory from "../ui/PortfolioCategory";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import BlogCover from "../features/blogs/BlogCover";
import ErrorPage from "./ErrorPage";

const StyledBlog = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 5rem;
`;

function Blogs() {
  const { isLoadingBlogs, blogs, errorBlogs } = useBlogsData();
  console.log(blogs);

  if (isLoadingBlogs) return <Spinner />;
  if (!blogs) return <ErrorPage />;

  return (
    <>
      <Navbar />
      <StyledBlog>
        {blogs?.map((blog) => (
          <BlogCover blog={blog} />
        ))}
      </StyledBlog>
    </>
  );
}

export default Blogs;
