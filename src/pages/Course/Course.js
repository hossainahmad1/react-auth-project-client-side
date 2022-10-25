import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideRoute from '../leftSideRoute/LeftSideRoute';
import RightSideRoute from '../RightSideRoute/RightSideRoute';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideRoute></LeftSideRoute>
                </Col>
                <Col lg='9'>
                    <RightSideRoute></RightSideRoute>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;