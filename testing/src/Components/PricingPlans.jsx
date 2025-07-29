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
        <h2>Plans and their prices</h2>
        <div>
          <h3>Free</h3>
          <hr />
          <li>Basic features</li>
          <h4>$0/month</h4>
          <button onClick={() => setPlans(1)}>Click here to see more</button>
        </div>
        <div>
          <h3>Plus</h3>
          <hr />
          <li>Extra features</li>
          <h4>$9.99/month</h4>
          <button onClick={() => setPlans(2)}>Click here to see more</button>
        </div>
        <div>
          <h3>Premium</h3>
          <hr />
          <li>All features</li>
          <h4>$19.99/month</h4>
          <button onClick={() => setPlans(3)}>Click here to see more</button>
        </div>
      </section>
    );
  };

  const freePlan = () => (
    <section>
      <h2>Free Plan</h2>
      <p>Details about the Free plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  const plusPlan = () => (
    <section>
      <h2>Plus Plan</h2>
      <p>Details about the Plus plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  const premiumPlan = () => (
    <section>
      <h2>Premium Plan</h2>
      <p>Details about the Premium plan...</p>
      <button onClick={() => setPlans(0)}>Back to Plans</button>
    </section>
  );

  return renderPlans();
}