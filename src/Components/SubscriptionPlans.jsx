import React from "react";
import { NavLink } from "react-router-dom";
import "../Feature/style.css";
const SubscriptionPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$5/month",
      features: [
        "Access to all movies",
        "Standard streaming quality",
        "No ads",
      ],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "$10/month",
      features: [
        "Access to all movies",
        "HD streaming quality",
        "Exclusive content",
        "No ads",
        "Priority support",
      ],
    },
    {
      id: 3,
      name: "Ultimate Plan",
      price: "$15/month",
      features: [
        "Access to all movies",
        "4K streaming quality",
        "Exclusive content",
        "No ads",
        "Priority support",
        "Access to beta features",
      ],
    },
  ];

  return (
    <section className="subscription-plans-section py-1 mt-32 shadow-xl shadow-slate-500">
      <h2 className="text-2xl font-bold text-center mb-6">Join Movie Hive</h2>
      <p className="text-center mb-8">
        Choose a plan that suits you and unlock exclusive content and perks!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="plan-card flex flex-col p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
            <p className="text-center text-lg font-bold text-blue-500">
              {plan.price}
            </p>
            <ul className="mt-4 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11L12 14L22 4" />
                    <path d="M9 21L12 18L22 8" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <NavLink className="btn wonder-button  w-full py-2 px-4 text-white bg-[#0f9ccf] rounded-lg hover:bg-blue-700">
                Sign Up Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
