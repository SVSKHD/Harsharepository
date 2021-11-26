import {Navbar , NavbarBrand , NavLink , NavItem ,Nav , Collapse , UncontrolledDropdown , DropdownToggle , DropdownMenu , NavbarToggler , NavbarText , DropdownItem } from "reactstrap"
const NAV = () => {
  return (
    <>
      <Navbar
          className="shadow-lg"
          color="light"
          expand="md"
          light
      >
        <NavbarBrand href="/">
         Material Dukhan
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
              className="me-auto"
              navbar
          >
            <NavItem>
              <NavLink href="/components/">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
                inNavbar
                nav
            >
              <DropdownToggle
                  caret
                  nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};
export default NAV;
