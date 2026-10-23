import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { createRoot } from "react-dom/client";
import "./index.css";
import img1 from "./assets/WhatsApp Image 2026-10-23 at 11.18.43 AM.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import logoWhite from "./assets/WhatsApp Image 2026-10-23 at 11.18.43 AM (1).jpeg";

createRoot(document.getElementById("root")).render(
  <div className="w-full h-dvh overflow-auto flex flex-col" data-theme="light">
    <header className="w-full border-b flex  justify-center">
      <div className="container justify-between flex items-center py-4 px-4 lg:px-0 ">
        <img className="w-16.25" src={img1} />
        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="search"
            className="input pl-12 bg-[#F5F5F5]"
          />
          <CiSearch className="absolute top-3 left-5 " />
        </div>
        <nav className="hidden lg:flex gap-13  ">
          <a href="#" className="font-roboto font-medium ">
            Home
          </a>
          <a href="#" className="font-roboto font-medium ">
            About
          </a>
          <a href="#" className="font-roboto font-medium ">
            contact US
          </a>
          <a href="#" className="font-roboto font-medium ">
            Blog
          </a>
        </nav>
        <div className="gap-7.5 hidden lg:flex">
          <CiHeart />
          <FaShoppingCart />
          <IoPerson />
        </div>
        <CiMenuBurger className="flex lg:hidden" />
      </div>
    </header>
    <section className="flex flex-col lg:flex-row gap-6 py-10 lg:py-20 px-4 lg:px-0 max-w-7xl mx-auto">
      <details
        className="collapse collapse-arrow bg-transparent rounded-none left w-full lg:w-60 lg:shrink-0"
        name="categories-accordion"
        open
      >
        <summary className="collapse-title min-h-0 px-0 pt-0 pb-3 text-base font-medium text-black border-b border-gray-200">
          Categories
        </summary>

        <div className="collapse-content px-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#f5f5f5] rounded-lg px-3 h-10 mt-4 oune-none text-sm placeholder:text-gray-400"
          />

          <div className="flex flex-col gap-3 mt-5">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs rounded-sm checked:bg-black checked:border-black"
              />
              smartphones
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              laptops
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              skincare
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              sunglasses
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              motorcycle
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              lighting
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              furniture
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              men shirts
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-black">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              women bags
            </label>
          </div>

          <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-6">
            Apply
          </button>
        </div>
      </details>

      <div className="flex-1">
        <h1 className="text-sm text-gray-500 mb-4">
          Available Products:{" "}
          <span className="text-black font-semibold text-base ml-1">85</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img2}
                alt="Apple iPhone 14 Pro"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$1437</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img3}
                alt="Apple iPhone 11"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$510</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img4}
                alt="Apple iPhone 11"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$550</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img2}
                alt="Apple iPhone 14 Pro"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$1437</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img3}
                alt="Apple iPhone 11"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$510</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card bg-[#f5f5f5] w-full h-92.5 rounded-xl p-4">
            <figure className="rounded-lg overflow-hidden shrink-0">
              <img
                className="w-full h-35 object-cover"
                src={img4}
                alt="Apple iPhone 11"
              />
            </figure>
            <div className="pt-4 flex flex-col gap-2 flex-1">
              <h2 className="text-base font-medium text-black leading-snug min-h-11">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <p className="text-base font-semibold text-black">$550</p>
              <button className="btn bg-black hover:bg-neutral-800 text-white border-none w-full h-11 min-h-0 rounded-lg text-sm font-normal mt-auto">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="join flex items-center justify-center gap-2 py-10">
          <input
            className="join-item btn btn-square  bg-black text-white text-sm font-medium"
            type="radio"
            name="options"
            aria-label="1"
            checked="checked"
          />
          <input
            className="join-item btn btn-square bg-[#f5f5f5] text-black text-sm hover:bg-gray-200"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square bg-[#f5f5f5] text-black text-sm hover:bg-gray-200"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square bg-[#f5f5f5] text-black text-sm hover:bg-gray-200"
            type="radio"
            name="options"
            aria-label="4"
          />
          <input
            className="join-item btn btn-square bg-[#f5f5f5] text-black text-sm hover:bg-gray-200"
            type="radio"
            name="options"
            aria-label="..."
          />
          <input
            className="join-item btn btn-square bg-[#f5f5f5] text-black text-sm hover:bg-gray-200"
            type="radio"
            name="options"
            aria-label="12"
          />
        </div>
      </div>
    </section>
    <footer className="w-full bg-[#111111] text-white flex justify-center">
      <div className="container px-4 lg:px-0 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-0">
        <div className="flex flex-col justify-between gap-10 lg:gap-0 lg:h-62.5">
          <div className="flex flex-col gap-5">
            <img className="w-16.25" src={logoWhite} alt="cyber" />
            <p className="text-sm leading-6 text-[#CFCFCF] max-w-60">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>

          <div className="flex items-center gap-8 text-base">
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium text-white">Services</h4>
          <div className="flex flex-col gap-4.5 text-sm text-[#CFCFCF]">
            <a href="#" className="hover:text-white">
              Bonus program
            </a>
            <a href="#" className="hover:text-white">
              Gift cards
            </a>
            <a href="#" className="hover:text-white">
              Credit and payment
            </a>
            <a href="#" className="hover:text-white">
              Service contracts
            </a>
            <a href="#" className="hover:text-white">
              Non-cash account
            </a>
            <a href="#" className="hover:text-white">
              Payment
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium text-white">
            Assistance to the buyer
          </h4>
          <div className="flex flex-col gap-4.5 text-sm text-[#CFCFCF]">
            <a href="#" className="hover:text-white">
              Find an order
            </a>
            <a href="#" className="hover:text-white">
              Terms of dvery
            </a>
            <a href="#" className="hover:text-white">
              Exchange and return of goods
            </a>
            <a href="#" className="hover:text-white">
              Guarantee
            </a>
            <a href="#" className="hover:text-white">
              Frequently asked questions
            </a>
            <a href="#" className="hover:text-white">
              Terms of use of the site
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>,
);
