"use client";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";

const OffcanvasMenu = () => {
  const [open, setOpen] = useState(false);

  const slideInVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>Open Menu</button>
      </SheetTrigger>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={slideInVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SheetContent side="left" className="p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </motion.div>
    </Sheet>
  );
};

export default OffcanvasMenu;
