import * as React from "react";
import { IMenuItemsType } from "@/models/types.ts";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  item: IMenuItemsType;
  isActive: boolean;
  isHovered: boolean;
  onNavigate: (page: string) => void;
}

const MenuItem: React.FC<Props> = ({
  item,
  isActive,
  onNavigate,
  isHovered,
}) => {
  const { id, label, iconSrc } = item;

  return (
    <li key={id}>
      <button
        onClick={() => onNavigate(id)}
        className={`w-full flex items-center px-4 py-3 transition-colors duration-200 ${
          isActive
            ? "text-white bg-gray-700"
            : "text-gray-300 hover:text-white hover:bg-gray-700"
        }`}
      >
        <img
          src={iconSrc}
          alt={label}
          className="w-6 h-6 flex-shrink-0 filter brightness-0 invert"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-3"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </li>
  );
};

export default MenuItem;
