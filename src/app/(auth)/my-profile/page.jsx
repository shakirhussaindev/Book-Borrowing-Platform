import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const MyProfilePage = () => {
  const user = {
    name: "Shakir Hussain",
    email: "shakir@example.com",
    phone: "+8801712345678",
    bio: "Passionate reader and web developer.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?q=80&w=400&auto=format&fit=crop",
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center">Profile</h1>

        {/* Profile Card */}
        <div className="card bg-base-100 border border-base-300 shadow-md">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-primary ring-offset-2">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-3">{user.name}</h2>

            <p className="text-base-content/70 mt-2">{user.bio}</p>
          </div>

          {/* User Information */}
          <div className="card ">
            <div className="card-body">
              <h3 className="font-bold text-lg mb-3">User Information</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Email</span>
                  <span className="text-base-content/70">{user.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Phone</span>
                  <span className="text-base-content/70"></span>
                </div>
              </div>

              <Link
                href="/update-profile"
                className="btn btn-primary w-full mt-6"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
