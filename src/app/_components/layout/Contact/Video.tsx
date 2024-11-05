export default function Video() {
  return (
    <div className="absolute inset-0 w-full h-[100vh] overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full [transform:rotateY(180deg)]"
      >
        <source src="https://cdn.pixabay.com/video/2021/05/12/73911-549744858.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black to-transparent opacity-10" />
    </div>
  );
}