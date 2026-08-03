import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiSettings,
  FiGrid,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";

import "./ProfileDropdown.css";

const ProfileDropdown = ({ username }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5174/login";
  };

  return (
    <div className="profile" ref={menuRef}>
      <div className="profile-btn" onClick={() => setOpen(!open)}>
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=387ed1&color=fff`}
          alt={username}
        />

        <FiChevronDown className={`arrow ${open ? "rotate" : ""}`} />
      </div>

      {open && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=387ed1&color=fff`}
              alt={username}
            />

            <div>
              <h4>{username}</h4>
              <p>Trading Account</p>
            </div>
          </div>

          <Link to="/">
            <FiGrid />
            Dashboard
          </Link>

          <Link to="/">
            <FiUser />
            My Profile
          </Link>

          <Link to="/">
            <FiSettings />
            Settings
          </Link>

          <div className="divider"></div>

          <button onClick={Logout}>
            <FiLogOut />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
