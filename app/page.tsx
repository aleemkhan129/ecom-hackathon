import FeaturedProducts from "@/components/FeaturedProducts";
import FeatureSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Promotions from "@/components/Promotion";

export default function Home(){
  return(
    <div className="mt-20">
      <Hero/>
      <Promotions/>
      <FeaturedProducts/>
      <FeatureSection/>
      <NewsLetter/>
    </div>
  )
}