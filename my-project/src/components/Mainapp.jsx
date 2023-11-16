import Header from "./Header";

const Mainapp = () => {
  return (
    <>
      <div className="app bg-theme-bg max-w-1250 max-h-860 h-[90vh] font-[500] text-[15px]
      flex flex-col overflow-hidden relative w-full rounded-[14px] backdrop-blur-[20px]">
        <Header />
      </div>
    </>
  );
};

export default Mainapp;
