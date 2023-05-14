import { useState } from "react";
import { menus } from "./links";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {menus.map((data) => (
        <div>
          <div className="px-3  md:cursor-pointer">
            <h1
              className="py-7 hover:text-gray-400 transition-800 flex justify-between items-center sm:pr-0 pr-5 group  "
              onClick={() =>
                heading !== data.name ? setHeading(data.name) : setHeading("")
              }
            >
              {data.name}

              {/* down button */}
              <span className="text-xl sm:hidden inline">
                <ion-icon
                  name={`${
                    heading === data.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl sm:mt-1 sm:ml-2 sm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              {/* down button */}
            </h1>

            {data.submenu && (
              <div>
                <div className="hidden absolute top-20  left-64 w-7/12  group-hover:sm:block hover:sm:block ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-transparent rotate-45"></div>
                  </div>
                  <div className=" bg-white shadow-lg p-10 grid grid-cols-2 gap-4 rounded-lg project">
                    {data.subname.map((oursubmenu) => (
                      <div className=" flex flex-cols-2 gap-2 ">
                        {/* <div className=" border-l-0  hover:border-l-4 border-cyan-800 transition-all"> */}
                        <div className="sideBorder sideBorderL project">
                          {/* <span className="line"></span> */}
                          {/* <span className="animation absolute -left-3 h-[0%] w-1 bg-black group-hover:h-[100%] duration-200"></span> */}
                          <h1 className="text-xl font-semibold ml-2">
                            {oursubmenu.title}
                          </h1>
                          <h1 className="ml-2">{oursubmenu.desc}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu */}

          <div className={`${heading === data.name ? "sm:hidden" : "hidden"}`}>
            {/* sublinks */}
            {data.subname?.map((sname) => (
              <div>
                <div>
                  <h1 className="py-4 pl-7 font-semibold sm:pr-0 pr-5">
                    {sname.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
