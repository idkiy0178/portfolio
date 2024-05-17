import HackModal from "./modal/HackModal";
import SignateModal from "./modal/SignateModal";
import WebModal from "./modal/WebModal";

const WorkPage = () => {
  return (
    <div>
      <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-10">
        Works
      </h2>

      {/* <div class="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
      {/* <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"> */}
      <div class="max-w-[85rem] mx-auto">
        <div class="grid grid-cols-1 gap-10">
          <a class="group rounded-xl overflow-hidden">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Image Description"
                />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Webサイト制作
                </h3>
                <p class="mt-3 text-gray-600 dark:text-neutral-400">
                  Produce professional, reliable streams easily leveraging
                  Preline's innovative broadcast studio
                </p>

                <WebModal />

                {/* <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    class="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
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

          <a class="group rounded-xl overflow-hidden">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="public\img\signate_student_cup.png"
                  alt="Image Description"
                />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  SIGNATE Student Cup 2023
                </h3>
                <p class="mt-3 text-gray-600 dark:text-neutral-400">
                  「SIGNATE Student Cup
                  2023【モデリング部門】:中古車の価格予測チャレンジ」に参加
                </p>

                <SignateModal />

                {/* <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    class="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
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

          <a class="group rounded-xl overflow-hidden">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="Image Description"
                />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  ハッカソン出場予定
                </h3>
                <p class="mt-3 text-gray-600 dark:text-neutral-400">
                  サポーターズ主催の1週間のハッカソンに出場予定
                </p>

                <HackModal />

                {/* <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    class="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
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

export default WorkPage;
