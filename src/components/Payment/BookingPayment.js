// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe(
//   "pk_test_51Mr47xIrkfWin5GdgppkRUsrkOaHzHen7OePqx5dmatK2HVEyvY0Kx7wJmskiYNa5m7lRUdjQbNtiFlJqyflNUki00d48f8Gsp"
// );

// const BookingPayment = () => {
//   const [patientDetails, setPatientDetails] = useState({});
//   let params = useParams();

//   useEffect(() => {
//     fetch(
//       `http://localhost:2020/appointment/bookingPayment/${params.bookingId}`
//     )
//       .then((res) => res.json())
//       .then((data) => setPatientDetails(data));
//   }, [params.bookingId]);

//   return (
//     <div>
//       <h1>Make Payment</h1>
//       <br />
//       <p>Patient Name: {patientDetails.name}</p>
//       <p>Appointment: {patientDetails.service}</p>
//       <p>Schedule: {patientDetails.schedule}</p>
//       <p style={{ color: "blue", marginTop: "25px" }}>
//         Fee: {patientDetails.fee} Taka
//       </p>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm appointment={patientDetails} id={params.bookingId}/>
//       </Elements>
//     </div>
//   );
// };

// export default BookingPayment;

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";
import "./styles/2-Card-Detailed.css";
import "./styles/common.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const location= useLocation()
  const {fee}=location.state

  const handlePayment=()=>{
    // console.log(billingDetails)
    const body={...billingDetails, fee:fee}
    fetch("http://localhost:2020/create-payment-intent",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)

    })
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    if (error) {
      card.focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: "",
      phone: "",
      name: "",
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && (
        <ErrorMessage style={{ color: "red" }}>{error.message}</ErrorMessage>
      )}
      <SubmitButton onClick={handlePayment} processing={processing} error={error} disabled={!stripe}>
        Pay: ${fee}
      </SubmitButton>
    </form>
  );
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const BookingPayment = () => {
  return (
    <div className="bookingPayment">
      
      <div className="AppWrapper">
      <h1 style={{marginBottom:"2rem"}}>Enter Payment Information:</h1>
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default BookingPayment;
