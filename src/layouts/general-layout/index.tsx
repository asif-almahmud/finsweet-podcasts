import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sponsors from "@/components/sponsors";
import { FC, ReactNode } from "react";

interface IGeneralLayoutProps {
  children: ReactNode;
}

const GeneralLayout: FC<IGeneralLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow lg-container">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
