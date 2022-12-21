import { MainLayout } from "@/components/Layout";
import React from "react";

const Home = () => {
    
    return (
      <>
      <Box>
        Hello
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
import { Box } from "@mui/material";

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;
  const { data } = await axiosClient.get("/categories");
  console.log(data);
  return {
    props: {
      product: {},
    },
  };
}
export default Home;
