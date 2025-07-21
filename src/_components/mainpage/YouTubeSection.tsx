"use client";
import ClassBtn from "../Youtube/ClassBtn";
import useGuide, { mobinogiClasses } from "@/_hooks/useGuide";
import GuideCard from "../Youtube/GuideCard";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "../common/LoadingSpinner";
import ManagerBtn from "../common/ManagerBtn";

export default function YoutubeSection() {
  const { videos, activeIdx, setActiveIdx, loading } = useGuide();

  return (
    <section className="w-full py-40">
      <div className="inner">
        <div
          className="pb-2 border-b-4 border-[#000]
          flex items-cener justify-between
        "
        >
          <p className="text-3xl font-bold">클래스별 유튜브 가이드</p>
          <ManagerBtn link="/guide/list" />
        </div>
        <ul className="flex flex-wrap items-center mt-4 mb-8 gap-2">
          {mobinogiClasses.map((item, idx) => (
            <ClassBtn
              key={idx}
              item={item}
              isActive={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}
        </ul>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {videos.map((item, idx) => (
                <GuideCard key={idx} item={item} />
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
