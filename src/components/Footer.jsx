const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Portfolio. All
          rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#home"
            className="text-sm text-gray-600 hover:text-black"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 hover:text-black"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;