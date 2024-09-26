import Logo from "../../assets/common/logo.png";
import {
  BodyOne,
  Caption,
  CustomeLink,
  Title,
} from "../Molecules/MoleculesComponents";

export function Footer() {
  return (
    <>
      <footer className=" py-14">
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={Logo} alt="logoImg" className="h-7 " />
            <div className="flex flex-col gap-2 mt-5">
              <Caption>Addres: 451 Wall Street, UK, London</Caption>
              <Caption>Email: example@domain.com</Caption>
              <Caption>Call: 0000-0000-0000</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our NewsLetter</BodyOne>
            <input
              type="text"
              className="p-3 w-full bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="enter your email address"
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with sidebar</CustomeLink>
              <CustomeLink>Shop with category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>USefull link</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with sidebar</CustomeLink>
              <CustomeLink>Shop with category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with sidebar</CustomeLink>
              <CustomeLink>Shop with category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
