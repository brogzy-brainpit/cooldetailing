import React, { useEffect, useState } from 'react'
import { AnimatePresence,motion } from "framer-motion";
import { useRouter } from "next/router";
import { Instrument_Serif,Instrument_Sans, Lora, DM_Sans, Plus_Jakarta_Sans, } from "next/font/google";

import "../styles/mostHave.css";
import "../styles/globals.css";

// import Footer from "@/components/Footer";
import localFont from "next/font/local";
import Script from "next/script";
// import SlideUpText from '@/effects/SlideUpText';
// import Header from '@/components/Header';
import Head from 'next/head';
import Nav from '@/home/Nav';

const body= DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const custom = localFont({
 
  src:  "./fonts/Beatrice.ttf",
  variable: "--font-custom",
  weight: "100 200 300 400 500 600 700 800 900",
});
const custom2 = localFont({
 
  src:  "./fonts/Workbench-Regular.ttf",
  variable: "--font-custom2",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
// console.log(router.pathname)
const [pageName,setPageName]= useState(router.pathname)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

   const routeTitles= {
    '/':'welcome',
    '/about':'about us',
    '/contact':'contact',
    '/faqs':'FAQS',
    '/gallery':'Gallery [portfolio]',
    '/blog':'blog',
    
   }
   const getTitle= (route)=>{
    return routeTitles[route] || 'page'
   }
  useEffect(() => {
    setPreLoaderOut(true)

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const handleRouteChange=(url)=>{
      setPageName(url)
    }
    router.events.on('routeChangeStart',handleRouteChange)
    return ()=>{
    router.events.off('routeChangeStart',handleRouteChange)

    }
    // setPageName(router.pathname.replace('/',''))
  }, [router.events]);
  const AnimateSvg = {
  initial: {
    pathLength: 1 ,// ⬅️ start invisible
    strokeWidth:['60%'],
    //  transition:{ duration:1}

  },
  enter: {
    pathLength: 0, // ⬅️ draw forward
     strokeWidth:['60%', '30%', '20%', '18%','16%','10%','0%',],
     strokeLinecap:"round",
     transition:{ duration:1,delay:1.2}
  },
  exit: (i) => ({
    pathLength: 1, // ⬅️ reverse “cleaning” direction (end → start)
    strokeLinecap:"round",
    strokeWidth:['0%', '20%', '40%', '60%',],
    transition: { duration: 1,}
    
  })
}
  return (
    <AnimatePresence
      mode="wait"
      // onExitComplete={() =>setPreLoaderOut(true)}
    >
      {/* <Header preLoaderOut={preLoaderOut}/> */}
 {/* 🔥 GLOBAL SEO METADATA */}
      <Head>
        <title>Shine Carwash Mobile | Car Detailing in Miami, FL</title>

        <meta
          name="description"
          content="Premium mobile car detailing in Miami, FL. Interior and exterior cleaning that restores shine, comfort, and showroom-quality results. Book today."
        />

        <meta
          name="keywords"
          content="car detailing Miami, mobile car wash Miami, auto detailing Miami FL, interior car cleaning Miami, exterior car detailing Miami"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Mobile Car Detailing in Miami, FL" />
        <meta
          property="og:description"
          content="Restore your car to showroom condition with Shine Carwash Mobile. Professional interior & exterior detailing."
        />
        <meta property="og:image" content="http://res.cloudinary.com/brainpit/image/upload/v1775918888/vjmy1mrnjmnxeixuxhnq.png" />
        <meta property="og:url" content="https://shine-carwash-mobile.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shine Carwash Mobile" />
        <meta
          name="twitter:description"
          content="Expert mobile car detailing in Miami. Interior & exterior services that bring back your car’s shine."
        />
        <meta name="twitter:image" content="http://res.cloudinary.com/brainpit/image/upload/v1775918888/vjmy1mrnjmnxeixuxhnq.png" />

        {/* Geo */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami" />

        {/* JSON-LD (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoWash",
              name: "Shine Carwash Mobile",
              url: "https://shine-carwash-mobile.vercel.app/",
              image: "http://res.cloudinary.com/brainpit/image/upload/v1775918888/vjmy1mrnjmnxeixuxhnq.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "250 NE 25th St",
                addressLocality: "Miami",
                addressRegion: "FL",
                postalCode: "33137",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Miami",
              },
              serviceType: [
                "Car Detailing",
                "Mobile Car Wash",
                "Interior Detailing",
                "Exterior Detailing"
              ],
              description:
                "Shine Carwash Mobile provides premium mobile car detailing services in Miami, Florida.",
            }),
          }}
        />
      </Head>
<Nav/>
      <div
        key={router.asPath}
        className={`${body.variable} ${custom.variable} ${custom2.variable}`}
      >
       <div className='fixed top left-0 w-full h-full bg-purple600 z-preloader pointer-events-none'> 
         <div className='absolute w-full h-full inset-0 bg-red50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" 
           viewBox="0 0 3222 3114" fill="none" preserveAspectRatio="none"
            class="transition-scribble text-brand-accent">
        <motion.path  d="M299.654 453.865C505.574 319.225 711.494 184.585 836.054 109.945C960.614 35.3048 997.574 24.7448 944.014 110.385C890.454 196.025 745.254 378.185 571.454 634.385C397.654 890.585 199.654 1215.3 110.854 1382.58C22.0544 1549.86 48.4544 1549.86 77.8944 1540.62C107.334 1531.38 139.014 1512.9 367.854 1319.9C596.694 1126.9 1021.73 759.945 1255.21 555.065C1488.69 350.185 1517.73 318.505 1527.41 306.145C1537.09 293.785 1526.53 301.705 1346.85 618.625C1167.17 935.545 818.694 1561.22 635.214 1896.74C451.734 2232.26 443.814 2258.66 447.654 2268.3C451.494 2277.94 467.334 2270.02 511.134 2236.9C554.934 2203.78 626.214 2145.7 966.534 1817.46C1306.85 1489.22 1914.05 892.585 2263.81 557.505C2613.57 222.425 2687.49 166.985 2741.41 129.185C2795.33 91.3848 2827.01 72.9048 2843.33 67.3448C2859.65 61.7848 2859.65 69.7048 2849.09 96.2248C2838.53 122.745 2817.41 167.625 2584.77 544.505C2352.13 921.385 1370.37 2165.43 1139.25 2537.83C908.134 2910.23 902.854 2926.07 902.774 2939.51C902.694 2952.95 907.974 2963.51 1255.21 2613.87C1602.45 2264.23 2829.73 1017.54 2903.53 1071.46C2977.33 1125.38 2176.12 2817.04 2128 3037C2079.88 3256.96 2911.24 2018.56 3172 1793"
         stroke="currentColor" 
         stroke-width="37%" 
         stroke-linecap="round" 
         variants={AnimateSvg}     

          animate={'enter'}  initial='initial' exit='exit'
         
         ></motion.path></svg>
        </div>


        <div className='relative   flex items-center justify-center h-full w-full'>
        <motion.h2 className='flex gap-3 capitalize text-white font-custom text-heading1  items-center justify-center'
        animate={{
          opacity:[0,1,1,0],
          y:[20,0,0,-20]
        }}
        initial={{y:20,opacity:0}}
        transition={{
          duration:1,
          times:[.02,.2,.9,1]
        }}
        >
        {/* hello wrold */}
        <span className='w-5 h-5 bg-brand-text-dark  rounded-full'>&nbsp;</span>
        {getTitle(pageName)}
        {/* {getTitle(pageName)=='welcome'?'home':getTitle(pageName)} */}
       </motion.h2>
       {/* {preLoaderOut &&
       } */}
         {/* <SlideUpText   text= {getTitle(pageName)} preLoaderOut={preLoaderOut}/> */}
        </div>
       </div>
       
        <Component {...pageProps} />     
        {/* <Footer /> */}
      </div>
    </AnimatePresence>
  );
}
