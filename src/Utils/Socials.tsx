import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/tarekmonowar" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tarekmonowar/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/tarekmonowar53" },
  { icon: <FaTwitter />, path: "https://x.com/tarekmonowar53" },
];
interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({
  containerStyles = "",
  iconStyles = "",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
