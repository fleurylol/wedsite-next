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
    <iframe
      src="https://docs.google.com/presentation/d/1PAsB3CbMwPJxs6B9peV4gw8m2aoWsLHQ2J7gH2P3gXY/embed?start=false&loop=false&delayms=3000"
      width="960"
      height="569"
      allowFullScreen={true}
    ></iframe>
  );
};

export default Gallery;
