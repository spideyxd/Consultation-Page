/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Grid,
  Container,
  Button,
  Heading,
  Text,
} from "theme-ui";
import { rgba } from "polished";
import { IoIosArrowForward } from "react-icons/io";
import Image from "components/image";
import illustration from "assets/images/banner.png";

import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Flex   as="figure" sx={styles.illustration}>
            <Image src={illustration} alt="illustration"  style={{width: "100%",
    maxWidth: "543px",
    height:" auto",
    boxSizing: "border-box",
    height: "auto",
    marginRight:"auto",
    marginLeft:"auto"
    }}  />
          </Flex>
          <Box sx={styles.content}>
            <div sx={styles.try}
              style={{
                boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
                borderRadius: 5,
              
              }}
            >
              <Heading as="h1">
                World's First Data Driven Astrology Platform
              </Heading>
              <Text as="p">
                Additional layer of data analysis on top of analysis of
                individual horoscope driven by Vedic Astrology. 70% increase in
                accuracy of forecasting than the generalised traditional
                horoscope prediction.
              </Text>
            </div>

            <div sx={styles.buttonGroup}>

               <Link  offset={-200}
      duration={500} to="steps" smooth={true} > <Button variant="primary" className="myColor" >Book us</Button> </Link> 
              <Button variant="white" className="white">
                Free Trial
              </Button>
            </div>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {

  try:{
    px:1,
    mt:[null,null,null,null,null,19]
  },

  section: {
    // pt: [8, null, null, null,null,0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    mt:[null,null,null,10 ,null,-10],
    alignItems: ["center"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
    minHeight: [null, null, null, null, "45vh", "100vh"],
    pt: [null, null, null, null,null,null],
  },
  content: {
    mt:[10,null,19,1,null,-20],
    ml:[null,null,null],
    textAlign: ["center", null, null, null, "left"],
    h1: {
      color: "textSecondary",
      fontWeight: "bold",
      fontSize: [9, null, null, null, 12, 14, 15],
      lineHeight: [1.33, null, null, null, 1.36],
      letterSpacing: "heading",
      
    },
    p: {
      color: "textSecondary",
      fontSize: [1, null, null, 2],
      lineHeight: 2.62,
      maxWidth: 480,
      mx: [null, null, null, "auto", "unset"],
      marginTop: [1, null, null, 3],
    },
  },
  newsUpdate: {
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(67, 99, 136, 0.07)",
    borderRadius: 50,
    padding: "4px 15px 4px 5px",
    display: "inline-flex",
    alignItems: "center",
    color: rgba("#02073E", 0.9),
    fontSize: ["12px", null, null, 1],
    mb: 4,
    textAlign: "left",
    span: {
      backgroundColor: "primary",
      color: "white",
      fontSize: ["10px", null, null, "13px"],
      fontWeight: 700,
      display: "inline-flex",
      minHeight: 24,
      alignItems: "center",
      px: "11px",
      borderRadius: 50, 
      mr: "12px",
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ["17px", 4],
      ml:6
    },

    ".myColor":{
      backgroundColor:" #F28C28"
    },
    ".white": {
    
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
    },
  },
  illustration: {
    mx: [null, null, null, "auto", "unset"],
    mt: [6, null, null, null, 0],
    alignItems: "center",
  },
};
