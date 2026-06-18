"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    const { name, email, photo, password } = data;
    // console.log(name,email,photo,password)
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if(res){
      alert("Signup succssful")
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleSignup = async () => {
    const data = await authClient.signUp.social({
      provider: "google",
    });
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-primary">
              Create an Account
            </h1>

            <p className="text-base-content/70 mt-2">
              and explore thousands of books.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">
                  Name<span className="text-red-400">*</span>
                </span>
              </label>

              <input
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: "Name field is required",
                })}
                className="input input-bordered w-full outline-none text-white"
              />
              {errors.name && (
                <p className="text-red-500 font-light">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Email<span className="text-red-400">*</span>
                </span>
              </label>

              <input
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Email field is required",
                })}
                className="input input-bordered w-full outline-none text-white"
              />
              {errors.email && (
                <p className="text-red-500 font-light">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Photo URL<span className="text-red-400">*</span>
                </span>
              </label>

              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo", {
                  required: "Photo URL field is required",
                })}
                className="input input-bordered w-full outline-none text-white"
              />
              {errors.photo && (
                <p className="text-red-500 font-light">
                  {errors.photo.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="label">
                <span className="label-text">
                  Password<span className="text-red-400">*</span>
                </span>
              </label>

              <input
                type={isShowPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password field is required",
                })}
                placeholder="Create password"
                className="input input-bordered w-full outline-none text-white"
              />
              <span
                className="absolute top-8 right-4 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500 font-light">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <div className="divider">OR</div>

          <button onClick={handleSignup} className="btn btn-outline w-full">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
