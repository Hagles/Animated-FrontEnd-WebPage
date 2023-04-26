import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,  
  XMarkIcon,
} from "@heroicons/react/24/outline";
import './header.css'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" max-w-[1920px] mx-auto bg-white mb-[17px]  ">
      <nav
        className=" mx-auto   h-[37px]    pt-[11px] pb-[10px]   "
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="TextStyle lg:flex items-center max-lg:hidden  justify-between">
          <div className="flex items-center  gap-x-[19px]  text-[#003E7E]">        
          <a href="#" className="pl-[90px]">
            <span className="sr-only">Your Company</span>
            <img
              className="h-[37px] w-[107px]   "
              src={require("./IHBLogo.jpg")}
              alt=""
            />
          </a>

          <a href="#" className="pl-[45px] ">
            FŐOLDAL
          </a>
          <a href="#">ÁRAINK</a>
          <a href="#">ÁRKALKULÁTOR</a>
          <a href="#">SZOLGÁLTATÁSAINK</a>
          <a href="#">AJÁNLÁSOK</a>
          <a href="#" className="pr-[19px]">
            RÓLUNK
          </a>
          </div>
          <div className="flex items-center pr-[90px] ">
            <div className="   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="#0065C9"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <label
              for="language-select"
              className="block text-[#0065C9] text-[17px] font-bold  pr-[50px] "
            >
              <select >
                <option value="english">LANGUAGE</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="italian">Italian</option>
              </select>
            </label>
            <div className="">
              <button
                href="#"
                className=" h-[37px] w-[64px] rounded-[8px]  text-[17px] rounded-[8px] font-semibold leading-6 text-[#0065C9] border-[2.5px] border-[#0065C9]  "
              >
                LOGIN
              </button>
            </div>

            <div className="  pl-[11px] ">
              <button
                href="#"
                className="h-[37px] w-[79px] rounded-[8px] text-[17px] font-semibold text-[#FFFFFF] bg-[#0065C9] "
              >
                SIGN UP
              </button>
            </div>
          </div>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-[37px] w-[107px]  "
                src={require("./IHBLogo.jpg")}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                FŐOLDAL
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                ÁRAINK
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                ÁRKALKULÁTOR
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                SZOLGÁLTATÁSAINK
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                AJÁNLÁSOK
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                RÓLUNK
              </a>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SING UP
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
