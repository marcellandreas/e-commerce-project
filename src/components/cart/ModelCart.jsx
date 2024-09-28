import { useState } from "react";
import { IoCartOutline, IoCloseOutline, IoHeart } from "react-icons/io5";
import { Badges, BodyOne, Title } from "../Molecules/MoleculesComponents";
import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slice/cartSlice";

export const ModelCart = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  const totalPrice = useSelector(selectTotalPrice);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setIsActiveTab(tab);
  };
  return (
    <>
      <button className="relative " onClick={openModal}>
        <IoHeart size={30} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">0</Badges>
        </div>
      </button>
      <button className="relative" onClick={openModal}>
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModal}></div>
          <div
            className={` cartmodel p-16 text-primary z-50 ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  isActiveTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  isActiveTab === "wishlist" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                wishlist
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  0
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${isActiveTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${isActiveTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {isActiveTab === "cart" ? (
              <>
                {cartItems.map((item) => {
                  return (
                    <CardProduct
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      cover={item.cover}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  );
                })}
                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>Sub Total:</Title>
                  <Title level={6}>{totalPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <button className="primary-btn w-full">View Cart</button>
                </div>
              </>
            ) : (
              <>Show</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CardProduct = ({ id, name, cover, quantity, price }) => {
  const dispatch = useDispatch();

  const removeCartItems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };

  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((image, index) => (
              <img
                src={image?.image}
                alt={`product cart ${index}`}
                key={index}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className=" text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={removeCartItems} />
          </button>
        </div>
      </div>
    </>
  );
};
