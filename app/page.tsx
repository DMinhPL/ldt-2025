import Banner from "./components/commons/Banner";
import Button from "./components/atoms/Button";
import hrBg from './assets/images/bg-hr.png';
import Image from "next/image";
import Link from "next/link";
import { SVGIcons } from "./utils/icons";

export default function Home() {
  return <>
    <Banner
      title="Unleash Automation, Unleash Potential"
      description="Transform complexity into seamless operations with cutting-edge technology. 
      Automate workflows effortlessly—no bottlenecks, no limits, just innovation."
      action={<Button className="max-w-[191px]">
        Get Started
      </Button>}
    />
    <section id="ai" className="py-[35px] lg:py-[60px] xl:py-[80px]">
      <div className="container mx-auto">
        {/* Chat AI  */}
        <div className="content text-center">
          <h2 className="text-[55px] text-raisin-black">Chat Live with LDT AI</h2>
          <p className="text-licorice text-lg mt-2 max-w-[641px] mx-auto">
            Experience our smart chat feature – ask questions and get instant responses,
            just like talking to a real expert!
          </p>
        </div>
        {/* Global HR Management  */}
        <div className="content mt-14">
          <h4 className="text-usafa-blue font-semibold text-xl">FROM OUT CASE STUDIES</h4>
          <h2 className="text-[55px] text-raisin-black">
            Global HR Management <br />
            Streamlining Workforce Operations
          </h2>
          <p className="text-licorice text-lg mt-2 max-w-[920px]">
            Our cutting-edge HR management software empowers businesses
            worldwide to efficiently manage their workforce,
            optimize operations, and drive productivity like never before.
          </p>
          <div className="thumbnail max-w-[1100px] xl:max-w-[1280px] mx-auto mt-10">
            <Image src={hrBg} alt="banner" />
          </div>
          <div className="text-center">
            <Link href='/case-studies' className="text-green-ryb font-bold text-xl underline inline-flex items-center gap-2">
              View more Case studies
              <Image src={SVGIcons.arrowRight} alt="arrow right" width={19} height={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
}
