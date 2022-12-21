import React, { FC } from "react";
import { useRouter } from "next/router";
import { AuthLayout } from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  colors,
  Container,
  CssBaseline,
  NoSsr,
  TextField,
  Typography,
} from "@mui/material";
import bgAuth from "@/assets/images/bg2.jpeg";
import fgAuth from "@/assets/images/bg3-removebg-preview.png";
import { NextPageWithLayout } from "@/models/common";
const styles = (theme: any) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
});
const Login: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-1/2 opacity-[0.8] -z-50">
        <Image src={bgAuth} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="w-screen h-full  flex items-center justify-center">
        <CssBaseline />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
          disableGutters
          maxWidth={false}
          className="lg:justify-end"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "60%",
              borderRadius: "10px",
              px: "16px",
              my: "auto",
              pb: "100px",
              bgcolor: "#fff",
              zIndex: 1,
            }}
            autoComplete="off"
            className="lg:w-[40%] md:w-[50%] w-[600%] lg:mr-[10%]"
          >
            <Typography variant="h4" className="mb-[50px] text-primary-2">
              Login
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Username"
              inputProps={{
                style: {
                  color: "black",
                  borderColor: "white",
                },
              }}
              size="small"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className=""
              style={{
                borderColor: "red",
                color: "#fff",
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              size="small"
            />
            <div className="flex justify-start w-full">
              <Typography variant="subtitle1" className=" text-primary-2 cursor-pointer hover:text-primary-3">
              Forgot Password?
              </Typography>
            </div>
            <Button variant="contained" className="bg-primary w-full mt-6">
              Login
            </Button>
            <Typography variant="subtitle1" className="text-primary-2">
              New to my shop?
              <Link href="/auth/signup" className="ml-2 text-primary-3 hover:opacity-70">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

Login.Layout = AuthLayout;

export default Login;
