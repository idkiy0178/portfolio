import { useState } from "react";

const SignateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "default-modal") {
      toggleModal();
    }
  };

  return (
    <>
      <p
        onClick={toggleModal}
        className="mt-2 sm:mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 font-medium cursor-pointer"
      >
        Read more
        <svg
          className="flex-shrink-0 size-4 translate-y-0.5 -translate-x-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </p>

      {isModalVisible && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleOutsideClick}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 pb-0 sm:p-6 sm:pb-0 md:p-10 md:pb-0 rounded-t">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                  SIGNATE Student Cup 2023
                </h3>
                <h3 className="pl-7 pr-2 text-lg sm:text-xl md:text-2xl text-gray-400">
                  2023.07
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 pb-0 sm:p-6 sm:pb-0 md:p-10 md:pb-0">
                <div className="relative rounded-xl overflow-hidden w-full h-44">
                  <img
                    className="transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src="./img/signate_student_cup.png"
                    alt="Image Description"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-10 space-y-4">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                  「SIGNATE Student Cup 2023【モデリング部門】:中古車の価格予測チャレンジ」に参加しました！データ分析系のコンペは初めての挑戦で、先輩に教わりながら取り組みました。思うような結果は得られませんでしたが、データの前処理からモデルの実装まで一連のプロセスを学ぶことができました。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignateModal;
