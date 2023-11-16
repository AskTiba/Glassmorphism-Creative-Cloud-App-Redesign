// import "./Header.css";
const Header = () => {
  return (
    <>
      <div
        className="header flex items-center flex-shrink-0 h-[58px] w-full py-0 px-[30px] 
      border-b border-solid border-b-[--border-color] "
      >
        <div
          className="menu-circle h-[15px] w-[15px] rounded-full bg-[#f96057] mr-[195px]
         flex-shrink-0 shadow-custom1 "
        ></div>
        <div className="header-menu flex items-center whitespace-nowrap">
          <a
            className="menu-link py-[20px] px-[30px] text-[--inactive-color] 
    border-b-2 border-solid border-transparent hover:border-[--theme-color]
     hover:border-b-2 transition duration-300 hover:text-[--theme-color]"
            href="#"
          >
            Apps 🫡
          </a>

          <a
            className="menu-link  py-[20px] px-[30px] text-[--inactive-color] 
          border-b-2 border-solid border-transparent hover:border-[--theme-color]
     hover:border-b-2 transition duration-300 hover:text-[--theme-color] notify relative"
            href="#"
          >
            Your work 🥷
          </a>
          <a
            className="menu-link py-[20px] px-[30px] text-[--inactive-color] 
          border-b-2 border-solid border-transparent hover:border-[--theme-color]
     hover:border-b-2 transition duration-300 hover:text-[--theme-color]"
            href="#"
          >
            Discover 🚀
          </a>
          <a
            className="menu-link py-[20px] px-[30px] text-[--inactive-color] 
          border-b-2 border-solid border-transparent hover:border-[--theme-color]
     hover:border-b-2 transition duration-300 hover:text-[--theme-color] notify"
            href="#"
          >
            Market ⚖️
          </a>
        </div>
        <div className="search-bar flex h-[40px] w-full max-w-[400px] pl-[16px] rounded-[4px]">
          <input
            className="h-full w-full border-none bg-[--search-bg] text-[15px]
            py-0 pr-[20px] pl-[40px] shadow-input font-body font-[500] rounded-[4px] 
            bg-no-repeat text-[--theme-color]"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="header-profile flex items-center flex-shrink-0 ml-auto py-0 pr-[16px] pl-[40px">
          <div className="notification relative">
            <span
              className="notification-number absolute w-[16px] h-[16px] rounded-full 
            bg-[#3a6df0] text-[10px] flex items-center justify-center text-[#fff] right-[-6px] top-[-6px]"
            >
              3
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell flex w-[22px] flex-shrink-0 text-[#f9fafb] ml-[22px]"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
          </svg>
          <img
            className="profile-img w-[32px] h-[32px] rounded-[50%] object-cover ml-[22px] 
            border-[2px] border-[--theme-color] border-solid"
            src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
