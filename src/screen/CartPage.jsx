import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  clearCart,
  selectTotalPrice,
} from "../redux/slice/cartSlice";
import bgImage from "../assets/common/Frame.png";
import { BodyOne, Title } from "../components/Molecules/MoleculesComponents";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import StripeCheckout from "react-stripe-checkout";

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleToken = (token) => {
    console.log("=" * 8);
    console.log(token);
    console.log("=" * 8);
    dispatch(clearCart());
  };

  console.log("cart items", cartItems);
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2">
            <img src={bgImage} alt="" className=" w-full h-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <Title level={1}>Cart</Title>
          </div>
        </div>
        <div className="container flex justify-between">
          <div className="w-2/3">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className=" text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <td scope="col" className="px-16 py-5 ">
                      Thumnail
                    </td>
                    <td scope="col" className="px-6 py-3">
                      Product
                    </td>
                    <td scope="col" className="px-6 py-3">
                      Price
                    </td>
                    <td scope="col" className="px-6 py-3">
                      Quantity
                    </td>
                    <td scope="col" className="px-6 py-3">
                      Subtotal
                    </td>
                    <td scope="col" className="px-6 py-3"></td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <CartPageCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      cover={item.cover}
                      quantity={item.quantity}
                      price={item.price}
                      totalPrice={item.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/6 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart Totals</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p className="text-sm font-normal">
                  Enter Your address to view shipping options.
                </p>
              </div>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>

              <StripeCheckout
                token={handleToken}
                stripeKey=""
                amount={totalPrice * 100}
                name="Marcell Andreas"
                email="marcellandreas.123@gmail.com"
                description="Payment Test using stripe"
              >
                <button className="primary-btn mt-5">
                  Proceed to checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CartPageCard({ id, name, cover, quantity, price, totalPrice }) {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(CartActions.addToCart({ id, name, price }));
  };
  const removeCartitem = () => {
    dispatch(CartActions.removeToCart(id));
  };
  const removeCartitems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover.slice(0, 1).map((image, i) => (
            <img
              key={i}
              src={image.image}
              alt={i}
              className="w-24 h-24 object-cover"
            />
          ))}
        </td>

        <td className="px-6 py-4">
          <BodyOne>{name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={incCartitems}
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiPlus size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readonly
              className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
            />
            <button
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
              onClick={removeCartitem}
            >
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={removeCartitems}
            className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white"
          >
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
}
