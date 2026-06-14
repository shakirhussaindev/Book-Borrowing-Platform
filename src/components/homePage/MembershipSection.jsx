import {
  CreditCard,
  Star,
  Clock3,
  BadgePercent,
  ArrowUpRight,
} from "lucide-react";

export default function MembershipSection() {
  const benefits = [
    {
      icon: <CreditCard className="text-indigo-400" />,
      title: "Unlimited borrowing",
      description: "Borrow as many titles as you want with no monthly cap.",
      bg: "bg-indigo-500/10",
    },
    {
      icon: <Star className="text-emerald-400" />,
      title: "Early access to new arrivals",
      description: "Read new titles before they go public.",
      bg: "bg-emerald-500/10",
    },
    {
      icon: <Clock3 className="text-rose-400" />,
      title: "Extended borrow period",
      description: "Keep books for 30 days instead of the standard 14.",
      bg: "bg-rose-500/10",
    },
    {
      icon: <BadgePercent className="text-blue-400" />,
      title: "Exclusive member discounts",
      description: "Special offers and partner deals every month.",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="lg:flex gap-16 items-center justify-between">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Become a Member & Unlock More
            </h2>

            <p className="mt-5 text-base-content/70 text-lg max-w-xl">
              Get access to exclusive books, early releases, and premium
              features with a Bookshelf membership plan.
            </p>

            {/* Plans */}
            <div className="mt-10 space-y-5">
              {/* Free Plan */}
              <div className="border border-base-300 rounded-2xl p-6 flex justify-between items-center hover:border-primary transition">
                <div>
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-base-content/60">
                    Browse & borrow up to 3 books
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-4xl font-bold">$0</h3>
                  <p className="text-base-content/60">/ month</p>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="border-2 border-orange-500 rounded-2xl p-6 flex justify-between items-center bg-primary/5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold">Premium</h3>

                    <span className="badge badge-primary">POPULAR</span>
                  </div>

                  <p className="text-base-content/60">
                    Unlimited borrows + early access
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-4xl font-bold">$4.99</h3>
                  <p className="text-base-content/60">/ month</p>
                </div>
              </div>
            </div>

            <button className="btn btn-outline hover:bg-[#6ad8f1] hover:text-gray-700 rounded-xl mt-8">
              Learn More
              <ArrowUpRight size={18} />
            </button>

            <p className="mt-5 text-sm text-base-content/50">
              No credit card required for free plan.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="text-base-content/60 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
