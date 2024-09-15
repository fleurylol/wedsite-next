import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { photos } from "@/lib/gallery_url";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="google-slides-container ">
      <iframe
        src="https://docs.google.com/presentation/d/1PAsB3CbMwPJxs6B9peV4gw8m2aoWsLHQ2J7gH2P3gXY/embed?start=false&loop=false&delayms=3000"
        width="400"
        height="700"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Gallery;
