import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import React, { Fragment } from "react";
import backgroundMain from "../../assests/images/backgroundMain.png";
import NotificationImg from "../../assests/images/NotificationImg.png";

const Main = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          backgroundImage: `url(${backgroundMain})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "656px",
          width: "auto",
        }}
      >
        <Stack
          direction={{sm : 'column' , md :'row'}}
          justifyContent="space-between"
          alignItems= 'center'
          sx={{ pt: {xs : '120px',sm : '150px',lg : '150px' , xlg : '200px'} }}
        >
          <Box
           sx={{
            // width : '60%',
            ml : {xlg :'120px' , md : '50px'},
            flexGrow : 1
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontFamily: "Helvetica",
                fontSize: {xlg : '72px' , sm : '60px', xs :'50px'},
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: 1.31,
                textAlign: "left",
              }}
            >
              The World's Leading Cryptocurrency Exchange
            </Typography>
          </Box>

          <Box
           component='img'
           src={NotificationImg}
           sx={{
            flexGrow : 1,
            // width : '455px',
            // height : '224px',
            width : {xlg : 'auto' , md : '400px'},
            height : {xlg : 'auto' , md : '224px'},

            
            }}
          >
            
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Main;
