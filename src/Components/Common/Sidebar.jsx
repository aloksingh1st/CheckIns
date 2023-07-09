import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCirclePlus,
  faPerson,
  faPeopleGroup,
  faUser,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./side.css";
import { AiOutlineArrowRight, AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import CreateRole from "../Dashboard/CreateRole";
import HomeDash from "../Dashboard/HomeDash";
import JoinReq from "../Dashboard/JoinReq";
import ManageRole from "../Dashboard/ManageRole";
import Members from "../Dashboard/Members";
import Notice from "../Dashboard/Notice";
import Profile from "../Dashboard/Profile";

const Sidebar = ({ pathname }) => {

  const clStyle = {
    width: "18rem",
    background: "#E83678",
    color:"white",
    borderRadius: "20px",
    margin: "0 10px"
  }

  const [active, setActive] = useState("dashboard");

  return (
    <>
      <div
        className="relative min-h-screen md:flex "
        id="sidebar"
        data-dev-hint="container"
      >
        <input type="checkbox" id="menu-open" className="hidden" />

        <label
          for="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header
          class="bg-gray-600 text-gray-100 flex justify-between main-container md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <a
            href="#"
            class="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            Dashboard
          </a>

          <label
            for="menu-open"
            id="mobile-menu-button"
            class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              id="menu-open-icon"
              class="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              class="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          class="text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto main-container text-white mb-6"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            class="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <Link
              class="text-white flex items-center space-x-2 px-4"
              title="Your App is cool"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span class="text-2xl font-extrabold whitespace-nowrap truncate">
                Dashboard
              </span>
            </Link>

            <nav data-dev-hint="main navigation overscroll-x-none">
              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("dashboard")}
                style={active == "dashboard" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>Dashboard</span>
              </a>

              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("createrole")}
                style={active == "createrole" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faCirclePlus} />
                <span>Create Role</span>
              </a>

              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("managerole")}
                style={active == "managerole" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faCirclePlus} />
                <span>Manage Role</span>
              </a>

              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("joinreq")}
                style={active == "joinreq" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faPerson} />
                <span>Join Requests</span>
              </a>

              <a
               
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("members")}
                style={active == "members" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faPeopleGroup} />
                <span>Members</span>
              </a>

              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("profile")}
                style={active == "profile" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </a>

              <a
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 text-white hover:text-[#E83678]"
                onClick={() => setActive("notice")}
                style={active == "notice" ? clStyle:null}
              >
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>Notice</span>
              </a>
            </nav>
          </div>
        </aside>

        <main id="content" class="flex-1 p-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            {/* <!-- Replace with your content / */}
            {active == "dashboard" ? <HomeDash /> : <></>}
            {active == "createrole" ? <CreateRole /> : <></>}
            {active == "managerole" ? <ManageRole /> :  <></>}
            {active == "joinreq" ? <JoinReq /> :  <></>}
            {active == "members" ? <Members /> :  <></>}
            {active == "profile" ? <Profile /> :  <></>}
            {active == "notice" ? <Notice /> :  <></>}
          
            <div class="px-4 py-6 sm:px-0">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace / */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
