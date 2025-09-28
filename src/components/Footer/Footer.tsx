import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black py-8 border-t border-gray-800">
      <div className="container">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} Ankita Rathod. Made with
            <FiHeart className="w-4 h-4 text-red-500 fill-current" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;