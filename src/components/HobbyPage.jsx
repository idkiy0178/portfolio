import FurugiyaModal from "./modal/FurugiyaModal";
import SoccerModal from "./modal/SoccerModal";
import TripModal from "./modal/TripModal";

const HobbyPage = () => {
  return (
    <div>
      <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-10">
        Hobbies
      </h2>

      {/* <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
      {/* <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"> */}
      <div className="max-w-[85rem] mx-auto">
        <div className="grid grid-cols-1 gap-14 sm:gap-10">
          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/soccer-all.JPG"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                  サッカー歴15年
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-700">
                  小学校2年生から現在まで、およそ15年間サッカーを続けています！
                </p>

                <SoccerModal />

                {/* <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p> */}
                
              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/mt-saint2.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                  旅行
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-700">
                  旅行が好きで、長期休暇は必ず旅行に行きます！
                </p>

                <TripModal />

                {/* <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p> */}


              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/giga.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  フェス・ライブ
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-600">
                  フェスやライブの高揚感は何度行っても格別です...！
                </p>

                <FurugiyaModal />

                {/* <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p> */}


              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default HobbyPage;
