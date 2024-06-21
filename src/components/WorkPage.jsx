import WebModal from "./modal/WebModal";
import SignateModal from "./modal/SignateModal";
import HackModal from "./modal/HackModal";
import BiprogyModal from "./modal/BiprogyModal";

const WorkPage = () => {
  return (
    <div>
      <div className="flex items-center pt-28 pb-10">
        <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold">
          Works
        </h2>
        <div className="ml-5">
          <a href="https://github.com/idkiy0178" target="_blank" rel="noopener noreferrer">
            <img
              src="./img/github.png"
              className="h-9"
            />
          </a>
        </div>
      </div>

      {/* <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
      {/* <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"> */}
      <div className="max-w-[85rem] mx-auto">
        <div className="grid grid-cols-1 gap-14 sm:gap-10">
          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/jiji.png"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  BIPROGYのハッカソンに出場
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-600">
                  BIPROGY主催の1週間のハッカソンに出場しました。
                </p>

                <BiprogyModal />

              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/lab-store-app.png"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  サポーターズのハッカソンに出場
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-600">
                  サポーターズ主催の1週間のハッカソンに出場しました。
                </p>

                <HackModal />

              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="./img/keiya-portfolio.png"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                  Webサイト制作
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-700">
                  個人開発のアウトプットとしてこのWebサイトを作りました。
                </p>

                <WebModal />
                
              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src=".\img\signate_student_cup.png"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                  SIGNATE Student Cup 2023
                </h3>
                <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-700">
                  SIGNATE Student Cup 2023に参加しました。
                </p>

                <SignateModal />

              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default WorkPage;
