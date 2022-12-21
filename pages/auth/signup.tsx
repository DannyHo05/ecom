import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  colors,
  Container,
  CssBaseline,
  FilledInput,
  IconButton,
  InputAdornment,
  NoSsr,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import bgAuth from "@/assets/images/bg2.jpeg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
type Props = {};

const Signup = (props: Props) => {
  const router = useRouter();
  const [isHide, setIsHide] = useState(true);
  const handleMouseDownPassword = (event:React.MouseEvent) => {
    event.preventDefault();
  };
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
              Sign Up
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
            <OutlinedInput
              required
              type={!isHide ? "text" : "password"}
              label="Password"
              fullWidth
              size="small"
              sx={{
                color:"black",
                "& label":{
                    color:"black",
                }
                
              }}
              inputProps={{
                style: { color: '#000' },
              }}
            //   value={values.password}
            //   onChange={handleChange("password")}
            //   endAdornment={
            //     <InputAdornment position="end">
            //       <IconButton
            //         aria-label="toggle password visibility"
            //         onClick={()=>setIsHide(!isHide)}
            //         onMouseDown={handleMouseDownPassword}
            //         edge="end"
            //       >
            //         {!isHide ? <VisibilityOffIcon /> : <VisibilityIcon />}
            //       </IconButton>
            //     </InputAdornment>
            //   }
            />

            <Button variant="contained" className="bg-primary w-full mt-6">
              Sign Up
            </Button>
            <Typography variant="subtitle1" className="text-primary-2">
              Have account?
              <Link
                href="/auth/login"
                className="ml-2 text-primary-3 hover:opacity-70"
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Signup;
