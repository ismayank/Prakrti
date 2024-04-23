
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyCheckAlt, faMobile, faPiggyBank, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import '../css/Pay.css';
import elogo from '../images/images-small-globe.svg';
import GooglePayButton from '@google-pay/button-react';

function Pay() {
  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Payment Page</h1>
        <a href='/Dash'>
          <img className='payment-logo' src={elogo} alt='logo1'/>
        </a>
      </div>

      <div className="total-payment">
        <h2>Choose your Payment Mode</h2>
      </div>

      <div className="payment-options">
        <a className='payment-option' href="/Cp2">
          <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
          Pay through Card
        </a>
        <a className='payment-option' href="/Cp2">
          <FontAwesomeIcon icon={faMobile} className="payment-icon" />
          Pay through UPI
        </a>
        <a className='payment-option' href="/Cp2">
          <FontAwesomeIcon icon={faMoneyCheckAlt} className="payment-icon" />
          Pay through Netbanking
        </a>
        <a className='payment-option' href="/Cp2">
          <FontAwesomeIcon icon={faHandHoldingUsd} className="payment-icon" />
          Pay through COD
        </a>
        <a className='payment-option' href="/Cp2">
          <FontAwesomeIcon icon={faPiggyBank} className="payment-icon" />
          Pay Later
        </a>
        <h1 className='or'>or</h1>
        <GooglePayButton
          className="custom-google-pay-button"  // Add a custom class
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'WASTEWISE',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '1',
              currencyCode: 'INR',
              countryCode: 'IN',
            },
            shippingAddressRequired: true,
            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('Success', paymentRequest);
          }}
          onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS' }
          }
          }
          onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return {}
          }
          }
          existingPaymentMethodRequired='false'
          buttonColor='black'
          buttonType='Buy'
        />
      </div>
    </div>
  );
}

export default Pay;

