import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetBlogDataQuery } from "../slices/blogsApiSlice";
// import FormContainer from "../components/FormContainer";

const BlogScreen = () => {
  const { id: blogId } = useParams();

  const { data, isLoading, error } = useGetBlogDataQuery(blogId);

  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-light mt-3 ml-3">
          go back
        </Link>
      </div>

      <div className=" my-4">
        {isLoading ? (
          <p>loading..</p>
        ) : error ? (
          <p>Error:{error?.data?.message}</p>
        ) : (
          <div>
            <h1>{data.title}</h1>
            <div style={{ fontSize: "x-large" }}> - {data.author}</div>
            <div className="my-2">{data.date.substring(0, 10)}</div>
            <div className="my-5">
              <p style={{ fontSize: "large" }}>{data.description}</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BlogScreen;
