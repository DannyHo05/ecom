import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache, theme } from "@/utils/index";
import { EmptyLayout } from "@/components/Layout";
import { AppPropsWithLayout } from "@/models/common";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";
import { url } from "inspector";
import axiosClient from "@/api-app/AxiosClient";
import "swiper/css/bundle";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Layout>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="HaHa"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <SWRConfig value={{fetcher:(url)=>axiosClient.get(url),shouldRetryOnError:false}}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          </SWRConfig>
        </CacheProvider>
      </Layout>
    );
  }
};

export default appWithTranslation(MyApp);
