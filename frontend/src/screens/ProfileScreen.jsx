import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetUserBlogsQuery } from "../slices/blogsApiSlice";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [email] = useState(userInfo.email);
  const [name] = useState(userInfo.name);

  const { data: blogs, isLoading, error } = useGetUserBlogsQuery();

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <h2>User Details</h2>
          <Form className="mt-4">
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} readOnly></Form.Control>
            </Form.Group>

            <Form.Group controlId="name" className="my-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} readOnly></Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={8}>
          <h2>My Blogs</h2>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <p>no blogs at present{error?.data?.message || error.error}</p>
          ) : (
            <Row>
              {blogs.map((blog) => (
                <Col md={6}>
                  <Card
                    key={blog._id}
                    className="my-3 p-3 rounded"
                    style={{ width: "350px", height: "auto" }}
                  >
                    <Link to={`/blogs/${blog._id}`}>
                      <Card.Img
                        src={blog.image}
                        alt={blog.content}
                        variant="top"
                      />
                    </Link>
                    <Card.Body>
                      <Link
                        to={`/blogs/${blog._id}`}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Card.Title>
                          <strong>{blog.title}</strong>
                        </Card.Title>
                      </Link>
                      <Card.Text as="div">{blog.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
