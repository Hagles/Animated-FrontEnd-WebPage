import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "./border.css";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export default function Border() {
  return (
    <div className="max-w-[1920px] mx-auto  ">
      <div className="Container min-h-[44.75px] p-[6px] bg-gradient-to-r from-[#ff4d43] via-[#ff7e03] to-[#ff8000]  ">
        <div className="flex justify-center items-center space-x-14 max-sm:block ">
          <div>
            <a href="#" class="link no-underline">
              30% KEDVEZMÉNY
            </a>
          </div>
          <div>
            <a href="#" className="link no-underline">
              Limitált darabszám
            </a>
          </div>
          <div class="linkBorder ">
            <a href="#" className="borderLinkBordered no-underline">
              SZEREZZ TE IS KUPONT MOST
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
