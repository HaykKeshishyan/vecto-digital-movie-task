import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useToast } from "@/hooks/useToast.ts";
import { NavigationFooterEnum } from "@/models/enums.ts";

interface Props {
  isHovered: boolean;
}

const toastContents: Record<
  NavigationFooterEnum,
  { title: string; description: string }
> = {
  [NavigationFooterEnum.Language]: {
    title: "Language Settings",
    description: "Opening language preferences...",
  },
  [NavigationFooterEnum.GetHelp]: {
    title: "Help Center",
    description: "Opening help and support...",
  },
  [NavigationFooterEnum.Exit]: {
    title: "Exit Application",
    description: "Closing StreamFlix...",
  },
};

const NavigationFooter: React.FC<Props> = ({ isHovered }) => {
  const { toast } = useToast();

  const handleClick = (key: NavigationFooterEnum) => {
    toast(toastContents[key]);
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-gray-700 py-4 overflow-hidden"
        >
          <div className="space-y-1">
            <button
              onClick={() => handleClick(NavigationFooterEnum.Language)}
              className="w-full flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <span className="ml-3">LANGUAGE</span>
            </button>
            <button
              onClick={() => handleClick(NavigationFooterEnum.GetHelp)}
              className="w-full flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <span className="ml-3">GET HELP</span>
            </button>
            <button
              onClick={() => handleClick(NavigationFooterEnum.Exit)}
              className="w-full flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <span className="ml-3">EXIT</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationFooter;
