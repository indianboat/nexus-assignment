"use client";

import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import Drawer from "../DrawerComponent/Drawer";
import Image from "next/image";

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  const drawerHandler = () => {
    toggleOpen(!isOpen);
  };

  const drawerVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%" },
  };

  const handleLinkClick = () => {
    if (isOpen) {
      drawerHandler();
    }
  };


  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed z-50 bg-white dark:bg-[#16181C] top-0 w-full py-7 shadow px-8"
      >
        <div className="2xl:container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-6">
              <button
                className="p-[8px] rounded-xl bg-[#F2F2F2] dark:bg-[#16181A] shadow-lg duration-[0.3s] transition-all relative hover:shadow-none hover:translate-y-[1px] lg:hidden md:flex sm:flex flex"
                onClick={drawerHandler}
              >
                <LuMenu size={20} className="text-[#2C3E50] dark:text-white" /> 
              </button>
              <Link href={"/"} className="text-2xl font-bold">
                <Image src="geeks-logo-white.svg" width={260} height={260} alt="Logo" />
              </Link>
            </div>
            
             <div className="lg:flex md:flex sm:hidden hidden items-center justify-between gap-8">
              <Link href={"/"} className="text-[14px] uppercase navLink">Home</Link>
              <Link href={"/"} className="text-[14px] uppercase navLink">Works</Link>
              <Link href={"/"} className="text-[14px] uppercase navLink">technologies</Link>
              <Link href={"/"} className="text-[14px] uppercase navLink">services</Link>
              <Link href={"/"} className="text-[14px] uppercase navLink">company</Link>
              <Link href={"/"} className="text-[14px] uppercase navLink">contacts</Link>
            </div>
      
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={drawerVariants}
                className="fixed bg-white z-50 dark:bg-[#18191C] overflow-auto shadow-red-200 h-screen lg:w-64 md:w-60 sm:w-52 w-48 inset-0"
              >
                <div className=" flex justify-between items-center p-3">
                  <span className="text-lg font-semibold">Geeks Intention</span>
                  <button
                    onClick={() => toggleOpen()}
                    className="rounded-lg p-1 bg-[#EEF2F5] dark:bg-neutral-950 text-[#3F3D56] hover:text-black dark:text-[#EEF2F5]"
                  >
                    <CgClose size={16} />
                  </button>
                </div>
                {/* Checking Session */}
                
                <Drawer handleLinkClick={handleLinkClick} />
                
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Drawer OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black backdrop-blur opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleOpen()}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;