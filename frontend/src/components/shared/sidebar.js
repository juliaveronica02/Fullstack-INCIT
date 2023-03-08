import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import {
    DASHBOARD_SIDEBAR_LINKS,
    DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../library/navigation";

const linkClass =
  "bg-white flex items-center gap-2 px-3 py-2 hover:bg-gray-100 hover:no-underline active:bg-gray-100 rounded-sm text-base";
export default function sidebar() {
  return (
    <div className="bg-white w-60 p-3 flex flex-col text-white">
      <div className="bg-sky-600 flex items-center gap-2 px-4 py-3 m-0">
        <span className="text-neutral-100 text-lg">Manning & Co</span>
      </div>
      {/* top part navigation */}
      <div className="ml-4 inline-flex py-8 flex flex-col gap-0.5">
                    <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}} />
                    <strong className="text-gray-700 font-xs mt-2">Radhika Dhawan Puri</strong>
                    <span className='pt-1 text-xs text-gray-400'>Senior Client Services</span>
      </div>
      {/* dashboard for center part - sidebar */}
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
      <span className='ml-4 inline-flex pt-2 mb-3 text-xs text-gray-400'>Navigation</span>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        
      </div>
      {/* dashboard for bottom part - sidebar */}
      <div className="flex flex-col gap-0.5 mt-3 pt-3 border-t border-neutral-700">
      <span className='ml-4 inline-flex pt-2 mb-3 text-xs text-gray-400'>My Account</span>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    // <Link to={item.path} className={classNames("text-white",linkClass)}>
    <Link
      to={item.path}
      className={classNames(pathname === item.path ? "bg-gray-100 text-black" : "text-neutral-400", linkClass)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
