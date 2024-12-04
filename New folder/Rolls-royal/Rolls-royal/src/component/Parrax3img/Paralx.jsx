import React from 'react'
import { Container, Row } from 'react-bootstrap'
function Paralx() {
    return (
        <>
            <Container fluid>
                <Row>
                    <div className='d-flex flex-wrap col-12 alighn-items-centert'>
                        <div className='d-flex col-12 flex-wrap justify-content-end alighn-items-centert'>
                            <div className='col-5 par-img'>
                                <img className='img-1' src='\image\cq5dam.web.1920 (7).webp' />
                            </div>
                        </div>
                        <div className='d-flex col-12 flex-wrap justify-content-start alighn-items-centert'>
                            <div className='col-5 par-img-1'>
                                <img className='img-2' src='\image\cq5dam.web.1920 (8).webp' />
                            </div>
                        </div>
                        <div className='d-flex col-12 flex-wrap justify-content-center alighn-items-centert'>
                            <div className='col-10 par-img-2'>
                                <img className='img-3' src='\image\cq5dam.web.1920 (9).webp' />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Paralx
