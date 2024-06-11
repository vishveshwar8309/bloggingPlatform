import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const UnloggedScreen = () => {
  const [blogs, setBlogs] = useState(null);

  return (
    <>
      <div>
        {/* style={{ backgroundColor: "green" }}  */}
        <Header />
      </div>
      <div>
        {blogs ? <p>blogs data</p> : <p>Their is no blogs data at present</p>}
      </div>
    </>
  );
};

export default UnloggedScreen;
