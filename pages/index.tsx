import FeatureBar from "@/components/common/FeatureBar";
import { Footer } from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { MainLayout } from "@/components/Layout";
import { useAcceptCookies } from "@/hooks";
import LoadingDots from "@/ui/LoadingDots";
import { Box, Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/home")
  }, [])
  
  return (
  <div>
    
  </div>

)};

export default Home;
