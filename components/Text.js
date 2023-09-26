"use client";
import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";

const Paystack = () => {
  const [ref, setRef] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
    setRef("" + Math.floor(Math.random() * 1000000000 + 1));
  }, [success]);

  const config = {
    reference: ref,
    email: email,
    firstname: name,
    lastname: surname,
    label: name + " " + surname,
    amount: (amount * 100) | 0,
    publicKey: "pk_test_e23be9b1d36684d1aac346d5630fe55846e10cb6", // Use your Paystack public key here
    currency: "GHS", // Set the currency to Ghanaian Cedi
  };

  const onSuccess = async (reference) => {
    const res = await fetch(`/api/verify/${reference.reference}`);
    const verifyData = await res.json();

    if (verifyData.data.status === "success") {
      setSuccess(true);
      setEmail("");
      setAmount(0);
      setName("");
      setSurname("");
    }
  };

  const onClose = () => {
    alert("Payment cancelled.");
  };

  const componentProps = {
    ...config,
    text: `Pay GHS ${amount | 0}`,
    // onSuccess,
    onClose,
  };

  return (
    <div id="paymentForm">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email-address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          step="0.01"
          min={0}
          id="amount"
          required
          value={amount}
          onChange={(e) => setAmount(Number.parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>

      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Paystack;
