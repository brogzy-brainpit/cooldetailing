"use client"

import React, { useEffect, useRef, Children, cloneElement, isValidElement } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_PX_STEPS = [2, 5, 6, 8, 100]

const PixelImage = ({
  children,
  pxSteps = DEFAULT_PX_STEPS,
  triggerStart = "top+=20% bottom",
  speed = 80,
  initialDelay = 300,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const stateRef = useRef({
    pxIndex: 0,
    imgRatio: 1,
    img: null,
    animationDone: false,
  })

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    const hiddenImg = container.querySelector("img[data-pixel-src]")
    const state = stateRef.current

    if (!hiddenImg) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = hiddenImg.getAttribute("data-pixel-src") || hiddenImg.src
    state.img = img

    const resizeCanvas = () => {
      const cw = container.offsetWidth
      const ch = container.offsetHeight
      canvas.width = cw
      canvas.height = ch
    }

    const draw = (pixelSize = 1) => {
      const cw = container.offsetWidth
      const ch = container.offsetHeight

      const w = cw * 1.05
      const h = ch * 1.05

      let newWidth = w
      let newHeight = h
      let newX = 0
      let newY = 0

      if (w / h > state.imgRatio) {
        newHeight = Math.round(w / state.imgRatio)
      } else {
        newWidth = Math.round(h * state.imgRatio)
        newX = (w - newWidth) / 2
      }

      ctx.clearRect(0, 0, cw, ch)

      ctx.imageSmoothingEnabled = pixelSize === 1

      if (pixelSize < 1) {
        const smallW = w * pixelSize
        const smallH = h * pixelSize

        ctx.drawImage(img, 0, 0, smallW, smallH)
        ctx.drawImage(
          canvas,
          0,
          0,
          smallW,
          smallH,
          newX,
          newY,
          newWidth,
          newHeight
        )
      } else {
        ctx.drawImage(img, newX, newY, newWidth, newHeight)
      }
    }

    const renderStep = () => {
      const step =
        pxSteps[state.pxIndex] ?? pxSteps[pxSteps.length - 1]

      const pixelSize = step * 0.01
      draw(pixelSize)
    }

    const renderFinal = () => {
      state.animationDone = true
      draw(1)
    }

    const animatePixels = () => {
      if (state.animationDone) return

      if (state.pxIndex >= pxSteps.length) {
        renderFinal()
        return
      }

      setTimeout(() => {
        renderStep()
        state.pxIndex++
        animatePixels()
      }, state.pxIndex === 0 ? initialDelay : speed)
    }

    img.onload = () => {
      state.imgRatio = img.width / img.height

      resizeCanvas()
      renderStep()

      window.addEventListener("resize", () => {
        resizeCanvas()
        if (!state.animationDone) renderStep()
        else renderFinal()
      })

      ScrollTrigger.create({
        trigger: container,
        start: triggerStart,
        onEnter: animatePixels,
        once: true,
      })

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        onEnter: () => gsap.set(container, { opacity: 1 }),
        once: true,
      })
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [pxSteps, triggerStart, speed, initialDelay])

  const wrappedChildren = Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      (child.type === "img" ||
        child.type?.displayName === "Image" ||
        child.type?.name === "Image")
    ) {
      return cloneElement(child, {
        "data-pixel-src": child.props.src,
        style: {
          ...child.props.style,
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
        },
      })
    }
  })

  return (
    <div
      ref={containerRef}
      className={`relative opacity-0 overflow-hidden ${className}`}
      style={style}
    >
      {wrappedChildren}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}

export default PixelImage