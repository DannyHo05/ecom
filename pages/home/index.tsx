import { MainLayout } from "@/components/Layout";
import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, error, mutate } = useSWR("/cats");
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}`;
  };
  const getItemProductById = (id: number) => {
    return products?.filter((value: ProductType) => {
      return value.productCategory.id == id;
    });
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          marginTop: "300px",
        }}
      >
        {data &&
          data.data?.map((value: { id: number; name: string }) => {
            return (
              <div className="my-[40px] cursor-pointer">
                <div className="text-2xl pb-3 font-bold border-b-2">
                  {value.name}
                </div>
                <div className="min-h-[400px]">
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all 1s linear"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="h-400px"
                  >
                     {getItemProductById(value.id).map((value) => {
                        return (
                          <div className="flex flex-col mt-2 border  border-solid rounded-lg mx-4 pb-4 border-primary overflow-hidden">
                            <Image
                              loader={myLoader}
                              alt="image product"
                              src={value.image}
                              width={500}
                              height={500}
                            ></Image>
                            <div className="flex flex-col px-4">
                              <div className="font-bold text-lgtext-ellipsis overflow-hidden whitespace-nowrap">
                                {value.title}
                              </div>
                              <span className="text-primary-3 text-lg">${value.price}</span>
                              <Rating name="read-only" value={value.rating} readOnly />
                              <Button variant="contained" className="mt-3 bg-primary">Thêm Vào giỏ hàng</Button>
                            </div>
                          </div>
                        )
                      })}
                  </Carousel>
                </div>
              </div>
            );
          })}
      </Box>
    </>
  );
};
Home.Layout = MainLayout;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import axios from "axios";
import axiosClient from "@/api-app/AxiosClient";
import { Box, Button, Rating } from "@mui/material";

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProductType } from "@/models/product";
import { Head } from "next/document";
import Image, { ImageLoaderProps } from "next/image";
import { Navigation } from "swiper";
export const getStaticProps: GetStaticProps<{
  products: ProductType[];
}> = async (ctx) => {
  const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;
  const { data } = await axiosClient.get("/products");
  console.log(data);

  return {
    props: {
      products: data,
    },
    revalidate: 300,
  };
};
export default Home;
