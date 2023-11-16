const Svg = () => {
  return (
    <>
      <div
        className="dark-light fixed bottom-[50px] right-[30px] shadow-custom 
      bg-[--dropdown-bg] cursor-pointer z-[3] rounded-full p-[8px]"
      >
        <svg
          className="w-[24px] "
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </>
  );
};

export default Svg;
