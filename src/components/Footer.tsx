import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

const socialLinks = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/" },
];

export default function Footer() {
  return (
    <footer className="h-[150px]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex gap-4 justify-center items-center mb-6">
          {socialLinks.map(({ icon, href }) => (
            <Link
              to={href}
              key={href}
              className="text-3xl text-[#21243D]"
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
        <Paragraph>Copyright &copy; 2024 All rights reserved</Paragraph>
      </div>
    </footer>
  );
}
