import { Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import logo from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="bg-light header">
            <Container>
                <Row className="py-3 align-items-center">
                    <Navbar.Brand href="#" className="col-3">
                        <img src={logo} className="d-inline-block w-50" alt="logo" />
                    </Navbar.Brand>
                    <Nav className="col-9 justify-content-end">
                        <Nav.Item>
                            <Link to="/" className="me-3 nav-icon"><FaHome className="me-1 mb-1" />Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/Collection" className="me-3 nav-icon"><SiBookstack className="me-1 mb-1" />Collection</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/AddBook" className="nav-icon"><FaPlus className="me-1 mb-1" />AddBook</Link>
                        </Nav.Item>
                    </Nav>
                </Row>
            </Container>
        </div>
    )

}

export default Header