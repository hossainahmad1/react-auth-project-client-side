import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideRoute from '../leftSideRoute/LeftSideRoute';
import RightSideRoute from '../RightSideRoute/RightSideRoute';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg='2'>
                    <LeftSideRoute></LeftSideRoute>
                </Col>
                <Col lg='10'>
                    <RightSideRoute></RightSideRoute>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;