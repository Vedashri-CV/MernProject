import React, { useState } from 'react';
import './Payment.css';
import visa from './assets/images/visa.png';
import rupay from './assets/images/Rupay.webp';

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [netBankingOption, setNetBankingOption] = useState('');
    const [upiId, setUpiId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePaymentMethodChange = (e) => {
        setSelectedMethod(e.target.value);
    };

    const handleNetBankingChange = (e) => {
        setNetBankingOption(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePayment = () => {
        // Simulate a payment process
        // In a real application, you might perform some API calls here
        setPaymentSuccess(true);
    };

    return (
        <div className="payment-method-container">
            {!paymentSuccess ? (
                <>
                    <h3 className="payment-method-heading">Your available balance</h3>
                    <input type="text" placeholder="Enter Code" className="payment-method-input" />
                    <button className="payment-method-button">Apply</button>

                    <h3 className="payment-method-heading">Another payment method</h3>

                    <div className="payment-method-radio-group">
                        <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="Credit or debit card"
                            checked={selectedMethod === 'Credit or debit card'}
                            onChange={handlePaymentMethodChange}
                            className="payment-method-radio"
                        />
                        <label htmlFor="card" className="payment-method-label">Credit or debit card</label>
                        <div className="payment-method-logos">
                            <span className="payment-method-logo"><img src={visa} alt="VISA" /></span>
                            <span className="payment-method-logo"><img src={rupay} alt="RuPay" /></span>
                            <span className="payment-method-logo"><img src="amex.png" alt="American Express" /></span>
                            <span className="payment-method-logo"><img src="maestro.png" alt="Maestro" /></span>
                        </div>
                    </div>

                    <div className="payment-method-radio-group">
                        <input
                            type="radio"
                            id="netBanking"
                            name="paymentMethod"
                            value="Net Banking"
                            checked={selectedMethod === 'Net Banking'}
                            onChange={handlePaymentMethodChange}
                            className="payment-method-radio"
                        />
                        <label htmlFor="netBanking" className="payment-method-label">Net Banking</label>
                        {selectedMethod === 'Net Banking' && (
                            <select
                                value={netBankingOption}
                                onChange={handleNetBankingChange}
                                className="payment-method-select"
                            >
                                <option value="" disabled>Choose an Option</option>
                                <option value="bank1">Bank of Baroda</option>
                                <option value="bank2">Indian Overseas Bank</option>
                                <option value="bank3">Bank of India</option>
                                <option value="bank4">Punjab and Sind Bank</option>
                                <option value="bank5">Bank of Maharashtra</option>
                            </select>
                        )}
                    </div>

                    <div className="payment-method-radio-group upi-group">
                        <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="Other UPI Apps"
                            checked={selectedMethod === 'Other UPI Apps'}
                            onChange={handlePaymentMethodChange}
                            className="payment-method-radio"
                        />
                        <label htmlFor="upi" className="payment-method-label">Other UPI Apps</label>
                        {selectedMethod === 'Other UPI Apps' && (
                            <div className="upi-id-container">
                                <label className="upi-id-label">Please enter your UPI ID</label>
                                <div className="upi-id-input-container">
                                    <input
                                        type="text"
                                        placeholder="Enter UPI ID"
                                        value={upiId}
                                        onChange={handleUpiIdChange}
                                        className="payment-method-upi-input"
                                    />
                                    <button className="payment-method-verify-button">Verify</button>
                                </div>
                                <p className="upi-id-hint">The UPI ID is in the format of name/phone number@bankname</p>
                            </div>
                        )}
                    </div>

                    <div className="payment-method-user-info">
                        <h3 className="payment-method-heading">User Credentials</h3>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="payment-method-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="payment-method-input"
                        />
                    </div>

                    <button className="payment-method-primary-button" onClick={handlePayment}>
                        Use this payment method
                    </button>
                </>
            ) : (
                <div className="payment-success-message">
                    <h2>Payment Successful!</h2>
                    <p>Thank you for your payment.</p>
                </div>
            )}
        </div>
    );
};

export default Payment;
