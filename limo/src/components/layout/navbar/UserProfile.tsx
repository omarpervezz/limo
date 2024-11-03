import { Button } from "@/components/common/Button";
import { UserRoundX } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="register">
      <div className="block lg:hidden">
        <button className="avatar border-none flex justify-center items-center cursor-pointer font-medium text-[14px] text-white bg-[#2b2b2b] rounded-full h-10 w-10">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden lg:block">
        {/* <Link
          href={`#`}
          className="text-[15px] text-inherit no-underline cursor-pointer"
        >
          Log in
        </Link> */}
        <Link href="#">
          <Button
            variant="signUpBtn"
            className="border border-[#015f86] bg-[#015f86] text-white rounded-md"
          >
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
