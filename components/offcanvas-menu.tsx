"use client";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const OffcanvasMenu = () => {
  const [open, setOpen] = useState(false);

  const slideInVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <svg viewBox="0 0 10 8" width="25" className="stroke-foreground">
            <path
              d="M1 1h8M1 4h 8M1 7h8"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={slideInVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <SheetContent side="left" className="p-6" aria-describedby={undefined}>
          <SheetTitle>Menu</SheetTitle>
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
