"use client";

import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await authClient.updateUser({
        name,
        image,
      });

      alert("Profile updated successfully");

      router.push("/my-profile");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-md mx-auto card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Update Profile
          </h1>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full text-white outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full text-white outline-none"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
