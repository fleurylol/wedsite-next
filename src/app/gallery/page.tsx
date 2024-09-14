import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";

const Gallery = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Logo />
          </CarouselItem>
          <CarouselItem>
            <Logo />
          </CarouselItem>
          <CarouselItem>
            <Logo />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
const Logo = () => {
  return <div className="size-64 border"></div>;
};

export default Gallery;
