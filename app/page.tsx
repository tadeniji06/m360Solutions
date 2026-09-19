import FrameWork from "@/components/home/FrameWork";
import Hero from "@/components/home/Hero";
import ProductServiceBanner from "@/components/home/ProductServiceBanner";
import Vision from "@/components/home/Vision";
import WhatWeDo from "@/components/home/WhatWeDo";
import Why from "@/components/home/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductServiceBanner />
      <Vision />
      <WhatWeDo />
      <Why />
      <FrameWork />
    </>
  );
}

