"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
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

            <div>
              <label className="label">
                <span className="label-text">
                  Password<span className="text-red-400">*</span>
                </span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password field is required",
                })}
                placeholder="Create password"
                className="input input-bordered w-full outline-none text-white"
              />
              {errors.password && (
                <p className="text-red-500 font-light">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">
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
