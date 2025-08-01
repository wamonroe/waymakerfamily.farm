import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppSection from "../components/AppSection";
import Heading from "../components/Heading";
import Logo from "../components/Logo";

function Root() {
  return (
    <div className="flex flex-col items-center mb-4 space-y-4">
      <AppSection>
        <Logo className="w-full max-w-md mx-auto" />
        <Heading className="my-6 text-4xl text-center">Way Maker Family Farm</Heading>
        <Outlet />
      </AppSection>
      <AppFooter />
    </div>
  );
}

export default Root;
