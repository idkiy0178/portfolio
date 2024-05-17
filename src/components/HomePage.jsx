function HomePage() {
  return (
    <section className="text-gray-700" id="home">
      <div className="md:max-w-[60%] max-w-[80%] mx-auto py-20">
        <div className="flex md:flex-row flex-col items-center md:justify-between xl:pt-43 sm:pt-31 pt-31 xl:pb-26 pb-24 mx-auto">
          <div className="font-bold whitespace-nowrap md:pb-0 pb-5">
            <h1 class="md:text-left text-center xl:text-3xl md:text-2xl sm:text-2xl text-xl md:pl-1 pl-0">
              Keiya Ida
            </h1>
            <h1 class="xl:text-4xl sm:text-3xl text-2xl">井田 圭哉</h1>
          </div>

          <div className="">
            <img
              class="xl:w-64 sm:w-48 w-32 rounded-full"
              src="./img/portfolio_face_icon.jpg"
              alt="Face Icon"
            />
          </div>
        </div>

        <div className="">
          <h3 className="text-xl">
            大阪公立大学大学院
            知能メディア処理研究室所属。現在は会話補助について研究中。島根県松江市出身。
          </h3>
        </div>

        <div>
          <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-5">
            Profile
          </h2>
          <table className="text-xl">
            <tbody>
              <tr>
                <td className="pr-8">2024 - 現在</td>
                <td>大阪公立大学大学院 情報学研究科</td>
              </tr>
              <tr>
                <td className="pr-8">2020 - 2024</td>
                <td>大阪府立大学 工学域 電気電子系学類 情報工学課程 </td>
              </tr>
              <tr>
                <td className="pr-8">2017 - 2020</td>
                <td>島根県立松江北高等学校</td>
              </tr>
            </tbody>
            {/* <tbody>
              <tr className="text-xl flex">
                <td className="pr-8">2024 - 現在</td>
                <td className="">大阪公立大学大学院 情報学研究科</td>
              </tr>
              <tr className="text-xl flex">
                <td className="pr-8">2020 - 2024</td>
                <td>大阪府立大学 工学域 電気電子系学類 情報工学課程 </td>
              </tr>
              <tr className="text-xl flex">
                <td className="pr-8">2017 - 2020</td>
                <td>島根県立松江北高等学校</td>
              </tr>
            </tbody> */}
          </table>
        </div>

        <div>
          <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-10">
            Works
          </h2>

          {/* <div class="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
          {/* <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"> */}
          <div class="max-w-[85rem] mx-auto">
            <div class="grid grid-cols-1 gap-10">
              <a class="group rounded-xl overflow-hidden" href="#">
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
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

              <a class="group rounded-xl overflow-hidden" href="#">
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
                      「SIGNATE Student Cup 2023【モデリング部門】:中古車の価格予測チャレンジ」に参加
                    </p>
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

              <a class="group rounded-xl overflow-hidden" href="#">
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
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>




        <div>
          <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-10">
            Hobbies
          </h2>
          
          {/* <div class="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
          {/* <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"> */}
          <div class="max-w-[85rem] mx-auto">
            <div class="grid grid-cols-1 gap-10">
              <a class="group rounded-xl overflow-hidden" href="#">
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
                      サッカー
                    </h3>
                    <p class="mt-3 text-gray-600 dark:text-neutral-400">
                      小学校2年生から現在まで15年間サッカーを続けて来ました。
                    </p>
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

              <a class="group rounded-xl overflow-hidden" href="#">
                <div class="sm:flex">
                  <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <img
                      class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                      旅行
                    </h3>
                    <p class="mt-3 text-gray-600 dark:text-neutral-400">
                      Optimize your in-person experience with best-in-class
                      capabilities like badge printing and lead retrieval
                    </p>
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

              <a class="group rounded-xl overflow-hidden" href="#">
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
                      料理
                    </h3>
                    <p class="mt-3 text-gray-600 dark:text-neutral-400">
                      How to make objectives and key results work for your
                      company
                    </p>
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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
                    </p>
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomePage;
