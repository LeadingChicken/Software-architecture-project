'use client'
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand ><Nav.Link as={Link} href="/">Game Hub</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/caro">Tic-Tac-Toe</Nav.Link>
                        <Nav.Link as={Link} href="/memory">Memory Game</Nav.Link>
                        <Nav.Link as={Link} href="/quiz">Quiz Game</Nav.Link>
                        {/* <Nav.Link as={Link} href="/chat">Chat</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
