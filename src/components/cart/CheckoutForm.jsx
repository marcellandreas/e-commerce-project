import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export function CheckoutForm({ total, handlePaymentSuccess }) {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey=""
        amount={total * 100}
        name="Marcell Andreas"
        email="marcellandreas.123@gmail.com"
        description="Payment Test using stripe"
      >
        <button className=" w-full bg-gray-200 py-3.5 my-3 font-medium">
          pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
}
