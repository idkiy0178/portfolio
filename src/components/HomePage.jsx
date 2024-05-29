import ProfilePage from "./ProfilePage";
import WorkPage from "./WorkPage";
import HobbyPage from "./HobbyPage";

function HomePage() {
  return (
    <section className="text-gray-700" id="home">
      <div className="md:max-w-[70%] max-w-[85%] mx-auto py-5 sm:py-10 md:py-20">
        <div className="flex md:flex-row flex-col items-center md:justify-between xl:pt-43 pt-31 xl:pb-28 md:pb-20 pb-10 mx-auto">
          <div className="font-bold whitespace-nowrap md:pb-0 pb-5">
            <h1 className="md:text-left text-center xl:text-3xl md:text-2xl sm:text-2xl text-xl md:pl-1 pl-0">
              Keiya Ida
            </h1>
            <h1 className="xl:text-4xl sm:text-3xl text-2xl">井田 圭哉</h1>
          </div>

          <div className="">
            <img
              className="xl:w-64 sm:w-48 w-32 rounded-full"
              src="./img/portfolio_face_icon.jpg"
              alt="Face Icon"
            />
          </div>
        </div>

        <div className="">
          <h3 className="text-base sm:text-lg md:text-xl">
            大阪公立大学大学院 情報学研究科 知能メディア処理研究室所属の修士１年生。
            現在は「会話中に分かったふりをする人を見つけるシステムの構築」というテーマで研究中。<br />
            島根県松江市出身。
          </h3>
        </div>

        <ProfilePage />

        <WorkPage />

        <HobbyPage />

      </div>
    </section>
  );
}

export default HomePage;
