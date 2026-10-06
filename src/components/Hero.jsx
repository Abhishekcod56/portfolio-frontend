const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gray-50 px-6 pt-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Hi, I&apos;m a
            <span className="block">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I build modern, scalable and user-friendly
            web applications using modern technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gray-200 md:h-96 md:w-96">
            <span className="text-gray-500">
              Profile Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;