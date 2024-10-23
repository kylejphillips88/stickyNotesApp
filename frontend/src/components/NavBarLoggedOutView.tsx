import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClicked} : NavBarLoggedOutViewProps) => {
    return ( 
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sticky Notes
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <DropdownItem onClick={onSignUpClicked}>Sign Up</DropdownItem>
                <DropdownItem onClick={onLoginClicked}>Log In</DropdownItem>
            </Dropdown.Menu>
        </Dropdown>
     );
}
 
export default NavBarLoggedOutView;