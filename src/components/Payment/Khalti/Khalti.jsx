
import KhaltiCheckout from "khalti-checkout-web";
import './Khalti.css'
let config = {
    // replace this key with yours
    "publicKey": "test_public_key_c5d30234c2d94beeaa07e6e03eb04dae",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//     // minimum transaction amount must be 10, i.e 1000 in paisa.
//     checkout.show({amount: 1000});
// }

const khalti = () => {
  return (
    <div>
        <button className = "khaltiButton" onClick = {() => checkout.show({amount: 1000}) }>Pay With Khalti</button>
    </div>
  )
}

export default khalti