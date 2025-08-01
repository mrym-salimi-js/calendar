import { AnimatePresence, motion } from "framer-motion";
import React from "react";
type Props = {
  listToggle: boolean;
  setListToggle: React.Dispatch<React.SetStateAction<boolean>>;
  list: { en: string; fa: string }[];
  btnType: string;
};

export default function SimpleListModal({
  listToggle,
  setListToggle,
  list,
  btnType,
}: Props) {
  const handleViews = (event: MouseEvent) => {
    const target = event.target;

    if (target instanceof HTMLElement) {
      const text = target.innerText;
      if (btnType === "view") {
        localStorage.setItem("view", text);
      } else {
        localStorage.setItem("format", text);
      }
      setListToggle(false);
    }
  };

  return (
    <AnimatePresence>
      {listToggle && (
        <motion.div
          className={`w-28 h-auto flex flex-col gap-2 items-center justify-between overflow-hidden p-2  bg-white rounded-[15px] border border-gray-100 absolute top-30 right-20 z-20 `}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {list.map((i, index) => {
            return (
              <p
                key={index}
                onClick={handleViews}
                className="w-full rounded-lg p-2 cursor-pointer  hover:bg-gray-100 text-black text-center text-[0.8rem]"
              >
                {i.fa}
              </p>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
