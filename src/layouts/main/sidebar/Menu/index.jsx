import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "~/utils/consts";
import More from "./More";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="group block py-0.5">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex p-3 group hover:bg-[#eff3f41a] transition-[2s] items-center rounded-full text-xl",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26px] h-[26px] relative">
                {menu?.notifications && (
                  <span className="w-[18px] h-[18px] bg-blue-700 text-[11px] rounded-full absolute -top-1.5 -right-1 flex items-center justify-center">
                    {menu?.notifications}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <span className="text-bold mr-4 ml-5">{menu.title}</span>
            </div>
          )}
        </NavLink>
      ))}

     <More />

      <button className="bg-[#1d9bf0] w-[80%] h-[52px] px-[32px] rounded-full font-bold text-lg my-1">Post</button>
    </nav>
  );
}
