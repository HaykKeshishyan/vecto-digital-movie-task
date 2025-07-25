import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem, NavigationFooter } from "@/components/utils";
import NavigationProfile from "@/components/utils/MavigationProfile.tsx";
import { menuItems } from "@/constants";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)",
        }}
      />

      <motion.aside
        className="fixed left-0 top-0 h-full bg-netflix-gray z-50 flex flex-col"
        initial={{ width: "4rem" }}
        animate={{ width: isHovered ? "16rem" : "4rem" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavigationProfile isHovered={isHovered} />

        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <MenuItem
                  key={item.id}
                  item={item}
                  isHovered={isHovered}
                  isActive={isActive}
                  onNavigate={onNavigate}
                />
              );
            })}
          </ul>
        </nav>

        <NavigationFooter isHovered={isHovered} />
      </motion.aside>
    </>
  );
}
