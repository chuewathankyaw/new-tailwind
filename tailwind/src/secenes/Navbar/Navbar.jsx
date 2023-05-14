import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLinks from "./Navlinks"
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "../footer/cookie";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="nav">
      <div className="flex flex-cols-2 justify-between items-center font-medium px-10 ">
        <div>
          <h1 className="text-xl md:cursor-pointer">SmilaxGolbal</h1>
        </div>
        <div
          className="sm:hidden text-black  text-3xl pt-5"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <NavLinks />
        </div>
      </div>
      <span className={`underline ${isLoading ? "loading" : ""}`}></span>
      {/* mobile */}

      <div
        className={
          open
            ? " z-10 bg-black absolute right-0 w-4/5 pt-16 h-full bottom-0 text-white pl-10 duration-500 "
            : " xs:hidden bg-black absolute right-0 w-4/5 pt-16 h-full bottom-0 text-white pl-10 duration-500 "
        }
      >
        <div
          className=" top-10 text-3xl right-10 "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="close"></ion-icon>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar








// import { useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import useMediaQuery from "../../hooks/useMediaQuery";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import NavLinks from "../Navlinks";

// const Link = ({ page, selectedPage, setSelectedPage }) => {
//   const lowerCasePage = page.toLowerCase();
//   return (
//     <AnchorLink
//       className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
//         hover: text-yellow transition duration-500`}
//       href={`#${lowerCasePage}`}
//       onClick={() => setSelectedPage(lowerCasePage)}
//     >
//       {page}
//     </AnchorLink>
//   );
// };

// const Navbar = ({ selectedPage, setSelectedPage }) => {
//   const [isMenuToggled, setIsMenuToggled] = useState(false);
//   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

//   return (
//     <nav className={`z-40 w-full fixed top-0 py-6`}>
//       <div className="flex items-center justify-between mx-auto w-5/6">
//         <h4 className="font-playfair text-3xl font-bold">CHUE</h4>

//         {/* Desktop Nav */}

//         {isAboveSmallScreens ? (
//           <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
//             <Link
//               page="Home"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//             <ChevronDownIcon />
//             <NavLinks />
//             <Link
//               page="Skills"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//             <Link
//               page="Projects"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//             <Link
//               page="Testiomonials"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//             <Link
//               page="Contact"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//           </div>
//         ) : (
//           <button
//             className="rounded-full bg-red p-2"
//             onClick={() => setIsMenuToggled(!isMenuToggled)}
//           >
//             <img src="../assets/menu-icon.svg" alt="menu-icon" />
//           </button>
//         )}

//         {/* mobile menu popup */}

//         {!isAboveSmallScreens && isMenuToggled && (
//           <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
//             {/* close icon */}

//             <div className="flex justify-end p-12">
//               <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
//                 <img src="../assets/close-icon.svg" alt="close-icon" />
//               </button>
//             </div>

//             {/* menu items */}
//             <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
//               <Link
//                 page="Home"
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//               <Link
//                 page="Skills"
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//               <Link
//                 page="Projects"
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//               <Link
//                 page="Testiomonials"
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//               <Link
//                 page="Contact"
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
