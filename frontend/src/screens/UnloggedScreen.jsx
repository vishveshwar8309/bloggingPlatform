import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../slices/blogsApiSlice";

const UnloggedScreen = () => {
  const [blogs, setBlogs] = useState(null);
  const { data, isLoading, error } = useGetAllBlogsQuery();

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <>
      <Container>
        {isLoading && <p>loading....</p>}
        {blogs ? (
          <Row style={{ height: "500px" }}>
            {blogs.map((blog) => (
              <Col lg={12} key={blog._id}>
                <Card className="my-3 p-3 rounded">
                  <Link
                    to={`/signin?redirect=/blogs/${blog._id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <strong>{blog.title}</strong>
                      </Card.Title>

                      <Card.Title as="div">{blog.author}</Card.Title>
                      <Card.Text as="div">{blog.content}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>Their is no blogs data at present</p>
        )}
      </Container>
    </>
  );
};

export default UnloggedScreen;
