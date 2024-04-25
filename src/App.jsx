import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-grey-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Keiya Ida</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400">
              About
            </a>
            <a href="#work" className="mr-5 hover:text-blue-400">
              Work
            </a>
            <a href="#blog" className="hover:text-blue-400">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-grey-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16">
            <h1 className="text-3xl sm:text-6xl">
              Hi!
              <br />
              I'm Keiya Ida
              <br />
              Student
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              omnis eaque incidunt modi sequi magnam velit laudantium quisquam,
              labore reprehenderit ea nisi consequatur rem exercitationem
              inventore eius totam est sint?
            </p>
            <button>Contact me</button>
          </div>

          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/human.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
