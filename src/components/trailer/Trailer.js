import React from 'react'
import { Row, Col } from 'reactstrap'
import Fade from 'react-reveal';

import './Trailer.css';

export default function Trailer() {
    return (
        <Col xs="12" xl="5" className="trailer-wrapper">
            <Fade bottom duration={800} distance="20px">
                <Col xs="12">
                    <h2 className="section__title fs-22">Trailer</h2>
                </Col>
                <Row className="h-100">
                    <Col xs="12" className="h-100">
                        <div className="card h-80 xs-h-100">
                            <iframe title="Youtube Trailer" width="560" height="315" src="https://www.youtube.com/embed/<%- data.videos.results[0].key %> " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Col>
    )
}
