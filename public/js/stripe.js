/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KDkJvIpIGEtB5Y1UVugXiYp2LbuH6YtVKnb0ZGOJAKFO5Pj6kxTZargr8UooVqJSwOVKNU7qBBpBb5V043q7XmH00PqSXtqal'
);

export const bookTour = async (tourId) => {
  // console.log(tourId);
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
