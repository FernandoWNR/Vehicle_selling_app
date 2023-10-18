import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import LanguageDropdown from "./LanguageDropdown";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="NexTech car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="flex mx-auto justify-center items-center px-6 mr-0">
          <LanguageDropdown />
          <FiUser className="login-icon" />
          <CustomButton
            title="sign In / Register"
            btnType="button"
            containerStyles="text-primary-black bg-white font-extrabold  rounded-full  min-w-[190px] px-6"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
