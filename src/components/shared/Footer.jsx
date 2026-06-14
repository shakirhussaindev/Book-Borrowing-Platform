import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black mt-20 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <Link href={"/"} className="flex items-center ">
              <Image src={logo} alt="logo" className="w-10 sm:w-12 md:w-14" />
            </Link>
            <p className="mt-3 text-gray-300">
              Discover, explore, and borrow your favorite books <br /> anytime
              from our digital library.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-primary" />
                <span>support@bookshelf.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-xl text-primary" />
                <span>+880 1234-567890</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <button className="btn btn-circle btn-outline">
                <FaFacebookF />
              </button>

              <button className="btn btn-circle btn-outline">
                <FaGithub />
              </button>

              <button className="btn btn-circle btn-outline">
                <FaLinkedinIn />
              </button>

              <button className="btn btn-circle btn-outline">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bookshelf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
