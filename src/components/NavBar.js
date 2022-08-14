import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <button id="home-btn1">
        <Link to="/React-Todo-App">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="List"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </Link>
      </button>
      <span>To-do List</span>
      {/* link to redirect to default url */}
      <button id="home-btn">
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </button>
    </div>
  );
}
