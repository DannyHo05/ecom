import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Footer } from "../common/footer";
import { Box } from "@mui/material";
import { Button, Container } from "@mui/material";
import Navbar from "@/components/common/navbar";
import FeatureBar from "@/components/common/FeatureBar";
import { useAcceptCookies } from "@/hooks";
import LoadingDots from "@/ui/LoadingDots";
import ElevationScroll from "@/utils/triggerscroll"
export const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const router = useRouter();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  const Loading = () => (
    <div className="w-80 h-80 flex items-center text-center justify-center p-3">
      <LoadingDots />
    </div>
  );
  return (
    <>
      <Container maxWidth={false} disableGutters className="min-h-screen text-primary" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}>
          <Navbar></Navbar>
        <Container maxWidth="lg" sx={{
          flexGrow: 1,
          backgroundColor:"white"
        }}>
        {children}
        </Container>
        <Footer></Footer>
      </Container>
      <FeatureBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button
            variant="contained"
            className="mx-5 text-primary hover:text-white bg-white"
            onClick={() => onAcceptCookies()}
          >
            Accept cookies
          </Button>
        }
      />
    </>
  );
};
