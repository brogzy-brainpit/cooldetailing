"use client";

import React from "react";

import {
  ChevronRight,
  TrendingUp,
} from "lucide-react";

/* ----------------------------- */
/* Utils */
/* ----------------------------- */

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ----------------------------- */
/* Orb Button */
/* ----------------------------- */

const CustomBtn = React.forwardRef(
  (
    {
      className = "",
      size = "default",
      children,
      Icon,
      icon,
      dotClassName = "",
      ...props
    },
    ref
  ) => {

    const timeoutRef =
      React.useRef(null);

    const buttonRef =
      React.useRef(null);

    /* ----------------------------- */
    /* Size Classes */
    /* ----------------------------- */

    const sizeClasses = {
      sm: `
        h-9
        text-xs
        pl-4
        pr-4
        gap-3
        hover:pl-1.5
        hover:gap-2
      `,

      default: `
        h-11
        text-sm
        pl-4
        pr-4
        gap-3
        hover:pl-1.5
        hover:gap-2
      `,

      lg: `
        h-13
        text-base
        pl-5
        pr-5
        gap-3
        hover:pl-2
        hover:gap-2
      `,
    };

    const dotExpanded = {
      sm: `
        group-hover:w-6
        group-hover:h-6
        group-data-[touched=true]:w-6
        group-data-[touched=true]:h-6
      `,

      default: `
        group-hover:w-8
        group-hover:h-8
        group-data-[touched=true]:w-8
        group-data-[touched=true]:h-8
      `,

      lg: `
        group-hover:w-9
        group-hover:h-9
        group-data-[touched=true]:w-9
        group-data-[touched=true]:h-9
      `,
    };

    /* ----------------------------- */
    /* Touch Support */
    /* ----------------------------- */

    const handleTouchStart = () => {

      if (buttonRef.current) {
        buttonRef.current.dataset.touched =
          "true";
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current =
        setTimeout(() => {

          if (buttonRef.current) {
            buttonRef.current.dataset.touched =
              "false";
          }

        }, 1500);
    };

    React.useEffect(() => {

      return () => {

        if (timeoutRef.current) {
          clearTimeout(
            timeoutRef.current
          );
        }
      };

    }, []);

    /* ----------------------------- */
    /* Icon */
    /* ----------------------------- */

    const resolvedIcon = Icon ? (
      <Icon className="w-4 h-4" />
    ) : icon ? (
      icon
    ) : (
      <ChevronRight className="w-4 h-4" />
    );

    /* ----------------------------- */
    /* Render */
    /* ----------------------------- */

    return (
      <button
        ref={(node) => {

          buttonRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        onTouchStart={
          handleTouchStart
        }
        className={cn(
          `
          font-custom
          group
          relative
          inline-flex
          items-center
          whitespace-nowrap
          font-bold
          transition-all
          duration-500
          overflow-hidden
          rounded-full
          border
          border-brand-secondary/30
          hover:border-brand-secondary/60
          bg-transparent
          disabled:pointer-events-none
          disabled:opacity-50
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-brand-white/20
        `,
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Orb */}

        <span
          className={cn(
            `
            relative
            shrink-0
            rounded-full
            flex
            items-center
            justify-center
           
            transition-all
            duration-500
            w-2.5
            h-2.5
          `,
            dotExpanded[size],
            dotClassName
          )}
        >
          <span
            className="
            flex
            items-center
            justify-center
            opacity-0
            scale-50
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:scale-100
            group-data-[touched=true]:opacity-100
            group-data-[touched=true]:scale-100
          "
          >
            {resolvedIcon}
          </span>
        </span>

        {/* Text */}

        <span
          className="
          relative
          z-10
          tracking-wide
          text-brand-secondary
          transition-transform
          duration-500
          group-hover:translate-x-1
          group-data-[touched=true]:translate-x-1
        "
        >
          {children}
        </span>
      </button>
    );
  }
);

CustomBtn.displayName =
  "CustomBtn";

/* ----------------------------- */
/* Demo */
/* ----------------------------- */

export default CustomBtn
