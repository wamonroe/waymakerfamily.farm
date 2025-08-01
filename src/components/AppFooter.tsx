import IconInstagram from "./icons/IconInstagram";
import SocialIcon from "./SocialIcon";

const AppFooter = () => (
  <footer className="flex items-center space-x-4">
    <SocialIcon href="https://instagram.com/monroepost7">
      <IconInstagram className="w-6 h-6" />
    </SocialIcon>
  </footer>
);

export default AppFooter;
