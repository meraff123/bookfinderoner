import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users/add");
  };
  return (
    <div className="navBar">
      <div className="navContainer">
      <Link className="logo" to="/">
         Book Finder
        </Link>
        <div className="navItems">
          <button onClick={handleClick} className="navButton">
            Register
          </button>
          <Link to = "/users/signIn"> <button className="navButton">sign in </button>
          
          </Link>  
        </div>
      </div>
    </div>
  );
}
export default NavBar;
