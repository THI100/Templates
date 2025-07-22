import { useState } from "react";

export default function PricingPlans() {
  const [plans, setPlans] = useState(0);

  const renderPlans = () => {
    switch (plans) {
      case 1:
        return freePlan();
      case 2:
        return plusPlan();
      case 3:
        return premiumPlan();
      default:
        return dftPage();
    }
  };

  const dftPage = () => {
    return (
      <section>
        <h1>Plans and their prices</h1>
        <div>
          <h2>Free</h2>
          <hr />
          <li>Basic features</li>
          <h3>$0/month</h3>
          <button onClick={() => setPlans(1)}>Click here to see more</button>
        </div>
        <div>
          <h2>Plus</h2>
          <hr />
          <li>Extra features</li>
          <h3>$9.99/month</h3>
          <button onClick={() => setPlans(2)}>Click here to see more</button>
        </div>
        <div>
          <h2>Premium</h2>
          <hr />
          <li>All features</li>
          <h3>$19.99/month</h3>
          <button onClick={() => setPlans(3)}>Click here to see more</button>
        </div>
      </section>
    );
  };

  const freePlan = () => (
    <section>
      <h1>Free Plan</h1>
      <p>Details about the Free plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  const plusPlan = () => (
    <section>
      <h1>Plus Plan</h1>
      <p>Details about the Plus plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  const premiumPlan = () => (
    <section>
      <h1>Premium Plan</h1>
      <p>Details about the Premium plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  return renderPlans();
}