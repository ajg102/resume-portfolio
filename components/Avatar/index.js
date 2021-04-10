function Avatar({ src, className = "" }) {
  return (
    <img
      src={src}
      loading="lazy"
      alt="profile picture"
      className={`rounded-full w-10 h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
}

export default Avatar;
