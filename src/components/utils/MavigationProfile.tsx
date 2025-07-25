import { AnimatePresence, motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { avatar } from "@/assets";
import * as React from "react";

interface Props {
  isHovered: boolean;
}

const NavigationProfile: React.FC<Props> = ({ isHovered }) => {
  return (
    <div className="p-4 border-b border-gray-700" style={{ minHeight: "80px" }}>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src={avatar} />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <h3 className="text-sm font-medium text-white">Daniel</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationProfile;
