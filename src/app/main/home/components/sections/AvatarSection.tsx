const AvatarSection = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full overflow-hidden border-8 border-red-500">
        <img
          src="/assets/image/tu2.jpg"
          alt="Anh Tu"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AvatarSection;
