"use client";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Header = () => {
  const isMdAndDown = useMediaQuery({ maxWidth: 991 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    router.push("/authenticate/login");
  };

  // Kiểm tra xem đường dẫn hiện tại có phải là trang login không
  // console.log(`Current Path: ${currentPath}`);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("username") !== null);
  }, []);

  if (
    currentPath.startsWith("/authenticate") ||
    currentPath.startsWith("/admin")
  ) {
    return null; // Không hiển thị Header nếu đang ở trang login
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <Navbar.Brand>
          <Nav.Link as={Link} href="/">
            Game Hub
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/caro">
              Tic-Tac-Toe
            </Nav.Link>
            <Nav.Link as={Link} href="/memory">
              Memory Game
            </Nav.Link>
            <Nav.Link as={Link} href="/quiz">
              Quiz Game
            </Nav.Link>
            {/* <Nav.Link as={Link} href="/admin/dashboard">
              Dash Board
            </Nav.Link> */}
            {/* <Nav.Link as={Link} href="/chat">Chat</Nav.Link> */}
            {isMdAndDown && (
              <>
                {/* Chỉ hiển thị Sign In và Sign Up nếu chưa đăng nhập */}
                {!isLoggedIn && (
                  <>
                    <Nav.Link as={Link} href="/authenticate/login">
                      Sign In
                    </Nav.Link>
                    <Nav.Link as={Link} href="/authenticate/signup">
                      Sign Up
                    </Nav.Link>
                  </>
                )}
                {isLoggedIn && (
                  <Nav.Link href="" onClick={handleLogout}>
                    Log Out
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
          {!isMdAndDown && (
            <Nav>
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} size="lg" />}
                id="basic-nav-dropdown"
                align="end"
              >
                {/* Chỉ hiển thị Sign In và Sign Up nếu chưa đăng nhập */}
                {!isLoggedIn && (
                  <>
                    <NavDropdown.Item href="/authenticate/login">
                      Sign in
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/authenticate/signup">
                      Sign up
                    </NavDropdown.Item>
                  </>
                )}
                {isLoggedIn && (
                  <NavDropdown.Item href="" onClick={handleLogout}>
                    Log Out
                  </NavDropdown.Item>
                )}

                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
