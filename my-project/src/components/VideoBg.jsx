import video from "../assets/videos/bg.mp4";

const VideoBg = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          width="320"
          height="240"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoBg;
