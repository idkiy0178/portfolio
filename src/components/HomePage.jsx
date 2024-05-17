import ProfilePage from "./ProfilePage";
import WorkPage from "./WorkPage";
import HobbyPage from "./HobbyPage";
import Modal from "./Modal";

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

        <ProfilePage />

        <Modal />

        <WorkPage />

        <HobbyPage />

      </div>
    </section>
  );
}

export default HomePage;
