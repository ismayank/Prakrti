import React, { useState } from "react";
import GooglePayButton from '@google-pay/button-react';
import "../css/Order.css";
import { Link } from "react-router-dom";
import elogo from '../images/images-small-globe.svg';
import axios from "axios";
import productbox from '../images/productbox.png'
import shopbag from '../images/shopping-bag-2.png'
import sealedbag from '../images/sealed-bag-2.png'

function Order() {
  const [items, setItems] = useState([

    {
      name: "Product Box",
      price: 7,
      quantity: 0,
      image: productbox,
    },
    {
      name: "Shopping Bag",
      price: 4,
      quantity: 0,
      image: shopbag,
    },
    {
      name: "Sealed Bag ",
      price: 3,
      quantity: 0,
      image: sealedbag,
    },
    //  {
    //   name: "Tray",
    //   price: 8,
    //   quantity: 0,
    //   image: tray,
    // },
    // {
    //   name: "Trash Bag",
    //   price: 4,
    //   quantity: 0,
    //   image: trash,
    // },
    // {
    //   name: "Wood Plate",
    //   price: 29,
    //   quantity: 0,
    //   image: woodp,
    // },
    
   
    // {
    //   name: "EggCart",
    //   price: 4,
    //   quantity: 0,
    //   image: eggc,
    // },
  
  
  ]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleQuantityChange = (index, quantity) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
  };
  const handlePlaceOrder = () => {
    const orderData = {
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        total: item.price * item.quantity,
      })),
      subtotal,
      tax,
      total,
    };

    const url = 'http://localhost//order.php';
    const formData = new FormData();
    formData.append('subtotal', subtotal);
    formData.append('total', total);
  
    // Send orderData to the server using an HTTP request
    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data);
        // Handle the response from the server if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  
    // Reset the quantity of items to 0
    const resetItems = items.map((item) => ({ ...item, quantity: 0 }));
    setItems(resetItems);
  };

  return (
    <>
      <div className="bg1">
        <a href="/Dash">
          <img className="img2" src={elogo} alt="logo1" />
        </a>
        <div className="order-items-container">
          <h2 className="nm"> Products</h2>
          <ul className="order-items-list">
            {items.map((item, index) => (
              <li key={index} className="order-item">
                <div className="order-item-image">
                  <img className="imgs" src={item.image} alt={item.name} />
                </div>
                <div className="order-item-name">{item.name}</div>

                <div className="order-item-quantity">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                </div>
                <div class="separator"></div>
                <div className="order-item-price">₹{item.price.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-summary-container">
          <h2>Order Summary:</h2>
          <div className="order-summary-row">
            <div>Subtotal:</div>
            <div>₹{subtotal.toFixed(2)}</div>
          </div>
          <div className="order-summary-row">
            <div>Tax:</div>
            <div>₹{tax.toFixed(2)}</div>
          </div>
          <div className="order-summary-row">
            <div>Total:</div>
            <div>₹{total.toFixed(2)}</div>
          </div>

          <GooglePayButton
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

  
             <Link className="Link" to="/Userin">
          <button className="btn" onClick={handlePlaceOrder}>Place Your Order</button>
          </Link>





        </div>
      </div>
    </>
  );
}

export default Order;

