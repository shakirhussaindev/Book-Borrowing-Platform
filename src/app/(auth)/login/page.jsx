"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";



const LoginPage = () => {
const { register, handleSubmit, formState: {errors} } = useForm();

  const handleLogin = (data)=>{
    console.log(data)
  }
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-primary">
              Login your account
            </h1>
            <p className="text-base-content/70 mt-3">
              and continue your reading journey.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                {...register("email", {
                  required:  "Email field is required"
                }
              )}
                placeholder="Enter your email"
                className="input input-bordered w-full text-white outline-none"
              />
              {errors.email && (
                <p className="text-red-500 font-light">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password field is required",
                })}
                placeholder="Enter your password"
                className="input input-bordered w-full text-white outline-none"
              />
              {errors.password && (
                <p className="text-red-500 font-light">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
