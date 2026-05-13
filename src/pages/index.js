
import Landing from "@/home/Landing";
import Section01 from "../home/Section01";
import SmoothScroll from "@/providers/Lenis";
import WhiteStripes from "@/home/WhiteStripes";
import Footer from "@/home/Footer";



export default function Home() {
  return (
  <SmoothScroll>
    <main
      className={`w-full bg-brand-white`}
    > 
    
    {/* landing */}
    <Landing/>
      {/* section 01 */}
      <Section01/>
     <WhiteStripes>
      
    </WhiteStripes>
    <Footer/>
    </main>

  </SmoothScroll>
  );
}
