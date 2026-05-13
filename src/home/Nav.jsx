'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Book,
  Contact,
  DollarSign,
  Home,
  Newspaper,
} from 'lucide-react';

/* ---------------- UTIL ---------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/* ---------------- COMPONENT ---------------- */
function SlidingCapsuleNav({
  tabs,
  className,
  activeTabClassName,
  tabClassName,
  layoutId = 'capsule-nav',
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
        'relative flex font-custom items-center gap-1 rounded-full bg-brand-accent p-1 shadow-sm',
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
              'relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200',
              'rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              isActive
                ? 'text-brand-accent2'
                : 'text-brown-200 hover:text-brand-accent2',
              tabClassName
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {/* Active Capsule */}
            {isActive && (
              <motion.div
                layoutId={`${layoutId}-active`}
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className={cn(
                  'absolute inset-0 z-10 rounded-full bg-brand-secondary shadow-md',
                  activeTabClassName
                )}
              />
            )}

            {/* Hover Capsule */}
            {isHovered && !isActive && (
              <motion.div
                layoutId={`${layoutId}-hover`}
                transition={{
                  type: 'spring',
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
  const [activeTab, setActiveTab] = useState('/home');

  const tabs = [
    {
      title: 'Home',
      url: '/home',
      icon: <Home size={14} />,
    },
    {
      title: 'Pricing',
      url: '/pricing',
      icon: <DollarSign size={14} />,
    },
    {
      title: 'Docs',
      url: '/docs',
      icon: <Book size={14} />,
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: <Newspaper size={14} />,
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: <Contact size={14} />,
    },
  ];

  return (
    <div className="flex w-full flex-row fixed top-[3%]  z-header items-center justify-center ">
      <div className="flex border-[.3em]  border-brand-secondary flex-row size-[3.8em] justify-center  flex-cl items-center text-brand-secondary bg-brand-accent p-1.5 rounded-full">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.94 4.92">
     <g fill="#1A3526" stroke-width=".26" aria-label="c."
      font-family="Beatrice Headline Trial" 
      font-size="22.58" font-weight="700" 
      >
        <path d="M37.21 109.85c0 1.39.88 2.45 2.57 2.45 1.5 0 2.29-.81 2.5-1.93l-1.41-.31c-.08.62-.4 1.04-1.08 1.04-.76 0-1.17-.48-1.17-1.24 0-.77.41-1.28 1.16-1.28.68 0 1.01.39 1.08 1.02l1.41-.32c-.22-1.1-.99-1.9-2.49-1.9-1.6 0-2.57 1.1-2.57 2.47"
         font-size="8.47" 
        transform="translate(-37.21 -107.38)"/>
        <path d="M42.77 112.26c.22 0 .38-.16.38-.39a.37.37 0 0 0-.38-.38.37.37 0 0 0-.4.38c0 .23.17.39.4.39" 
        font-size="3.53" 
      transform="translate(-37.21 -107.38)"/></g></svg>
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