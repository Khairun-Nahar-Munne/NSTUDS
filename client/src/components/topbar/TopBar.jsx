import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className="top">
      <div className="topLeft">
        <img src="./image/nstudslogo.jpg" alt="" height="20px"/>
        <span className="titleSpan">NSTUDS</span>
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
           
          </li>
          <li className="topListItem"><Link className="link" to="/ec1">
              EXECUTIVE BODY
            </Link></li>
            <li className="topListItem"><Link className="link" to="/alumni">
              ALUMNI
            </Link></li>
            <li className="topListItem"><Link className="link" to="/acheivement">
              ACHIEVEMENT
            </Link></li>
            <li className="topListItem"><Link className="link" to="/gallery">
              GALLERY
            </Link></li>
            <li className="topListItem"><Link className="link" to="/event">
              EVENT
            </Link></li>
          <li className="topListItem"><Link className="link" to="/blog">
              BLOG
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
            <li className="topListItem"><Link className="link" to="/resources">
              RESOURCE
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF+ user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  );
}