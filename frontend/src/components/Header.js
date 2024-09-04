'use client'
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
const Header = () => {
    const isMdAndDown = useMediaQuery({ maxWidth: 991 });
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className='px-4'>
                <Navbar.Brand ><Nav.Link as={Link} href="/">Game Hub</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/caro">Tic-Tac-Toe</Nav.Link>
                        <Nav.Link as={Link} href="/memory">Memory Game</Nav.Link>
                        <Nav.Link as={Link} href="/quiz">Quiz Game</Nav.Link>
                        {/* <Nav.Link as={Link} href="/chat">Chat</Nav.Link> */}
                        {
                            isMdAndDown && 
                            <>
                                <Nav.Link as={Link} href="/authenticate/login">
                                  Sign In
                                </Nav.Link>
                                <Nav.Link as={Link} href="/authenticate/signup">
                                  Sign Up
                                </Nav.Link>
                            </>
                        }
                        
                    </Nav>
                    {!isMdAndDown && 
                        <Nav>
                            <NavDropdown 
                                title={<FontAwesomeIcon icon={faUser} size="lg" />} 
                                id="basic-nav-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="/sign-in">Sign in</NavDropdown.Item>
                                <NavDropdown.Item href="/sign-up">
                                    Sign up
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
