import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStipePromise = () => {
    const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51NirDkLHUDScRLBG3mi7FWMUqs7v6aqDe18gJzts4AoeDjG0U5oohnW0B0szxSucSzJ8yKisgPyGqoUMiYeqpOtE00wIxOAaeS"
  const key = NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  if (!stripePromise && !!key) {
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export default getStipePromise;