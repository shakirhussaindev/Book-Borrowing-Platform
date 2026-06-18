"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlinks from "./Navlinks";
import { MdOutlineMenuBook } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
// import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  // const pathname = usePathname();
  // const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");

  

  return (
    <div className="bg-black sticky top-0 z-100">
      <div className="text-white navbar container py-2 flex mx-auto shadow-sm px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-1"
            >
              <MdOutlineMenuBook color="#6ad8f1" className="text-4xl " />
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow border border-gray-700"
            >
              <li>
                <Navlinks href={"/"}>Home</Navlinks>
              </li>
              <li>
                <Navlinks href={"/all-books"}>All Books</Navlinks>
              </li>
              <li>
                <Navlinks href={"/my-profile"}>My Profile</Navlinks>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="flex items-center ">
            <Image src={logo} alt="logo" className="w-10 sm:w-12 md:w-14" />
          </Link>
        </div>

        {/* navbar middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <li>
              <Navlinks href={"/"}>Home</Navlinks>
            </li>
            <li>
              <Navlinks href={"/all-books"}>All Books</Navlinks>
            </li>
            <li>
              <Navlinks href={"/my-profile"}>My Profile</Navlinks>
            </li>
          </ul>
        </div>

        {/*navbar right  */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : user ? (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block text-right">
                <p className="text-xl font-bold">{user.name}</p>
              </div>

              <Link href={"/my-profile"}>
                <div className="avatar">
                  <div className="w-8 md:w-10 rounded-full flex items-center justify-center  text-white overflow-hidden">
                    {user?.image ? (
                      <Image
                        src={user?.image}
                        alt={user?.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-bold uppercase">
                        {user?.name?.[0]}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              <button
                onClick={async () =>await authClient.signOut()}
                className="btn btn-xs md:btn-md border  bg-[#79e4ff] text-black hover:bg-[#559daf]"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="btn btn-xs md:btn-md border  bg-[#79e4ff] text-black hover:bg-[#559daf]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
