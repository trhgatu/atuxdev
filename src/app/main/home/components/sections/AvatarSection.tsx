const AvatarSection = () => {
    return (
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="h-96 w-96 rounded-full overflow-hidden border-8 border-red-500">
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
