"use client";
import { motion } from "motion/react";
import type { Transition } from "motion/react";

const transition = {
  type: "tween",
  damping: 15,
  stiffness: 110,
  duration: 1,
  repeatType: "mirror",
  // repeatDelay: 3,
  // repeat: 2,
  ease: "easeInOut",
} as Transition;

export default function AnimatedHero({ delay }: { delay: number }) {
  return (
    <>
      <div className="flex items-center justify-between perspective-midrange transform-3d">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            y: -160,
            z: 50,
            rotateX: -40,
            rotateZ: 40,
            rotateY: 40,
            scale: 1.5,
            opacity: 1,
          }}
          transition={{ ...transition, delay }}
        >
          <div className="perspective-midrange transform-3d">
            <div className="flex h-44 w-64 rotate-x-55 rotate-y-0 -rotate-z-40 flex-col justify-between rounded-2xl border-4 border-t-0 border-r-0 border-b-fuchsia-400 border-l-fuchsia-300 bg-linear-to-tr from-violet-600 to-indigo-600 p-4">
              {/* <div className="text-4xl font-extrabold">1</div>
              <p>1 000 000 $</p> */}
              <video
                className="h-full w-full rounded-xl bg-black"
                muted
                src="/videos/cox.mp4"
                autoPlay
                playsInline
              />
              <div>Tonight</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
