import React from "react";

const Profile = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl md:w-2/3 w-full dark:bg-gray-800">
      <img
        alt="profil"
        src="https://cdn.pixabay.com/photo/2023/06/01/13/12/background-8033597_640.png"
        className="w-full mb-4 rounded-t-lg h-[400px]"
      />
      <div className="flex flex-col items-center justify-center p-4 -mt-[110px]">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src="https://cdn.pixabay.com/photo/2023/01/11/08/05/humboldt-penguin-7711121_640.jpg"
            className="mx-auto object-cover rounded-full h-[150px] w-[150px]  border-2 border-white dark:border-gray-800"
          />
        </a>
        <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
          Charlie
        </p>
        {/* <p className="mb-4 text-xs text-gray-400">Nantes</p> */}
        <p className="p-2 px-4 text-xs text-white bg-pink-500 mt-2 rounded-full">
          Master
        </p>
        <div className="w-full p-2 mt-4 rounded-lg">
          <div className="grid grid-cols-3 justify-between text-sm text-gray-600 dark:text-gray-200">
            <div className="flex justify-center">
              <p className="flex flex-col">
                Number of Contests
                <span className="font-bold text-black dark:text-white text-center">34</span>
              </p>
            </div>
            <div className="flex justify-center">
              <p className="flex flex-col">
                Accuracy
                <span className="font-bold text-black dark:text-white text-center">34%</span>
              </p>
            </div>
            <div className="flex justify-center">
              <p className="flex flex-col">
                Top Speed
                <span className="font-bold text-black dark:text-white text-center">40WPM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
