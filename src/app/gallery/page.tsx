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
    <div className="flex">
      <Carousel
        className=""
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <div className="border max-w-lg">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.order}>
                <Image
                  src={photo.url}
                  alt="Wedding photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
const Logo = () => {
  return <div className="size-64 border"></div>;
};

export default Gallery;
