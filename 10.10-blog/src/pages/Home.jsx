import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap/';
import CardPost from "../components/CardPost.jsx"


function Component() {
  return (
    <>
      <Container>
        <Row>
          <CardPost />
        </Row>
      </Container>
    </>
  )
}
export default Component;