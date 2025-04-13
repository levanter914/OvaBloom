const Footer = () => {
    return (
      <footer className="bg-transparent text-center text-gray-600 py-4 text-sm mt-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/levanter914"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            levanter914
          </a>
        </p>
        <p className="mt-1">All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  