"use client";
import React, { useState } from "react";

const PaymentPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000); // Reset message after 3 seconds
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Billing Address Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Billing Address</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Address :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter address"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">City :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter city"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">State :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter state"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Zip Code :</label>
                                    <input
                                        type="text"
                                        placeholder="123456"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Cards Accepted :</label>
                                    <div className="flex space-x-2 mt-2">
                                        <img src="/images/HBL.png" alt="PayPal" className="h-8" />
                                        <img src="/images/UBL.jpg" alt="MasterCard" className="h-8" />
                                        <img src="/images/Amazon.PNG" alt="Visa" className="h-8" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name on Card :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter card name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Credit Card Number :</label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 7234 4434"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Exp Month :</label>
                                        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                            <option>Choose month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            {/* Add other months */}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Exp Year :</label>
                                        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                            <option>Choose year</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            {/* Add other years */}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">CVV :</label>
                                    <input
                                        type="text"
                                        placeholder="1234"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Proceed to Checkout
                    </button>
                </form>

                {formSubmitted && (
                    <p className="mt-4 text-center text-green-600 font-semibold">
                        Payment successfully submitted!
                    </p>
                )}
            </div>
        </div>
    );
};

export default PaymentPage;
