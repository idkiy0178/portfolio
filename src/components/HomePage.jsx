function HomePage() {
  return (
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
  )
}

export default HomePage