import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51N1R8VLogd3U0qRPJxqqbkesf8ykdlOUt12RBYfIQ84qbQLVEsnS9sb3fp8yVTKAB6u2ZynrEjEBJ7TwOHPAAmBz00TQdZ4XOz');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const response = await fetch('http://localhost:8080/api/payment/pay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: id, amount: 1000 }), // Example amount in cents
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

const StripeCheckout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckout;
