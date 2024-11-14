import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./AppBar.css";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Services", to: "/services", current: false },
  { name: "Resume", to: "resume", current: false },
  { name: "Work", to: "work", current: false },
  { name: "Contact", to: "contact", current: false },
  { name: "Hire me", to: "contact", current: true }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppBar() {
  return (
    <Disclosure as="nav" className=" container mt-4 animate__animated  animate__slideInDown">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-8 items-center justify-between">
          <div className="absolute inset-y-0 right-0 block items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group  relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex  w-full flex-1 items-center   sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <h1 className="text-3xl m-0 font-semibold text-white">Vishu</h1>
              </Link>
            </div>
            <div className="hidden sm:ml-6 md:block">
              <div className="flex items-center gap-4 space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`nav_items text-base py-2 ${classNames(
                      item.current
                        ? "bg-green-400 text-black border-green-400 px-3 border-none"
                        : "text-gray-300 hover:border-green-400 rounded-none  hover:text-green-400",
                      "rounded-md  py-1 text-sm font-medium"
                    )}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              to={item.to}
              key={item.name}
              className={classNames(
                item.current
                  ? "bg-green-400 text-black"
                  : "text-gray-300 hover:bg-green-400 hover:text-black",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
