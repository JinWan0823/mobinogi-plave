"use client";
import ClassBtn from "../Youtube/ClassBtn";
import useGuide, { mobinogiClasses } from "@/_hooks/useGuide";
import GuideCard from "../Youtube/GuideCard";
import { AnimatePresence, motion } from "framer-motion";

export default function YoutubeSection() {
  const { videos, activeIdx, setActiveIdx } = useGuide();

  return (
    <section className="w-full py-40">
      <div className="inner">
        <p
          className="text-3xl font-bold
          pb-2 border-b-4 border-[#000]"
        >
          클래스별 유튜브 가이드
        </p>
        <ul className="flex flex-wrap items-center mt-4 gap-2">
          {mobinogiClasses.map((item, idx) => (
            <ClassBtn
              key={idx}
              item={item}
              isActive={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.ul
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {videos.map((item, idx) => (
              <GuideCard key={idx} item={item} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
