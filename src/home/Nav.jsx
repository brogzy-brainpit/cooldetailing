"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Book,
  Contact,
  DollarSign,
  Home,
  Newspaper,
} from "lucide-react";

/* ---------------- UTIL ---------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ---------------- COMPONENT ---------------- */
function SlidingCapsuleNav({
  tabs,
  className,
  activeTabClassName,
  tabClassName,
  layoutId = "capsule-nav",
  currentTab,
  onChange,
}) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const activeTabId = useMemo(() => {
    if (currentTab) return currentTab;
    return tabs[0]?.url || null;
  }, [tabs, currentTab]);

  const handleLinkClick = (e, url) => {
    if (onChange) {
      e.preventDefault();
      onChange(url);
    }
  };

  return (
    <nav
      className={cn(
        "relative flex font-custom items-center gap-1 rounded-full bg-brand-accent p-1 shadow-sm",
        className
      )}
      onMouseLeave={() => setHoveredTab(null)}
    >
      {tabs.map((tab) => {
        const isActive = activeTabId === tab.url;
        const isHovered = hoveredTab === tab.url;

        return (
          <Link
            key={tab.url}
            href={tab.url}
            onClick={(e) => handleLinkClick(e, tab.url)}
            onMouseEnter={() => setHoveredTab(tab.url)}
            className={cn(
              "relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200",
              "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "text-brand-accent2"
                : "text-brown-200 hover:text-brand-accent2",
              tabClassName
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {/* Active Capsule */}
            {isActive && (
              <motion.div
                layoutId={`${layoutId}-active`}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className={cn(
                  "absolute inset-0 z-10 rounded-full bg-brand-secondary shadow-md",
                  activeTabClassName
                )}
              />
            )}

            {/* Hover Capsule */}
            {isHovered && !isActive && (
              <motion.div
                layoutId={`${layoutId}-hover`}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className="absolute inset-0 z-0 rounded-full bg-brand-secondary/55"
              />
            )}

            <span className="relative  z-20 flex items-center gap-2">
              <span>{tab.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

/* ---------------- DEMO ---------------- */
export default function DemoSlidingCapsuleNav() {
  const [activeTab, setActiveTab] = useState("/home");

  const tabs = [
    {
      title: "Home",
      url: "/home",
      icon: <Home size={14} />,
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: <DollarSign size={14} />,
    },
    {
      title: "Docs",
      url: "/docs",
      icon: <Book size={14} />,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: <Newspaper size={14} />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <Contact size={14} />,
    },
  ];

  return (
    <div className="flex w-full flex-row fixed top-[3%]  z-header items-center justify-center ">
      <div className="flex border-[.3em]  border-brand-secondary flex-row size-[3.8em] justify-center  flex-cl items-center text-brand-secondary bg-brand-accent p-1.5 rounded-full">
       <svg
      viewBox="0 0 4.3010612 3.2794199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[3em] animate-color-fade"
    >
      <path
        d="M0.417688 3.26813C0.666044 3.26813 0.829732 3.0988 0.829732 2.85609C0.829732 2.61902 0.666044 2.44404 0.417688 2.44404C0.169333 2.44404 0 2.61902 0 2.85609C0 3.0988 0.169333 3.26813 0.417688 3.26813ZM1.1176 1.64253C1.1176 2.55693 1.6764 3.27942 2.73191 3.27942C3.66324 3.27942 4.1656 2.72627 4.30106 2.00942L3.7592 1.89089C3.66889 2.43276 3.3528 2.794 2.73191 2.794C2.02635 2.794 1.65947 2.31987 1.65947 1.64253C1.65947 0.976489 2.04893 0.479778 2.73756 0.479778C3.36409 0.479778 3.66889 0.841022 3.74791 1.37724L4.28978 1.26436C4.15431 0.536222 3.66324 0 2.7432 0C1.72156 0 1.1176 0.745066 1.1176 1.64253Z"
        fill="#1a3526"
      />
    </svg>
      </div>
       <div className="flex flex-col items-center gap-4 bg-brand-secondary p-1.5 rounded-full">
        <SlidingCapsuleNav
          tabs={tabs}
          currentTab={activeTab}
          onChange={setActiveTab}
          className="p-2"
        />
      </div>
    </div>
  );
}