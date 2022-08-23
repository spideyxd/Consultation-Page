/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

import icon1 from "assets/images/icons/services/1.png";
import icon2 from "assets/images/icons/services/2.png";
import icon3 from "assets/images/icons/services/3.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Why Astroanalytics",
    description: `Additional layer of data analysis on top of analysis of
    individual horoscope driven by Vedic Astrology.
    70% increase in accuracy of forecasting than the generalised traditional
    horoscope prediction.
    Get the range of easiest while most logical and practical no-cost remedies.
    Greater than 80% client retention rate.`,
  },
  {
    id: 2,
    icon: icon2,
    title: "Our Values",
    description: `Whether you're seeking for future forecast or best practices to restructure the areas of life. Our mantra is : analyze, identify,advise,execute,identify,advise,execute.Our mission is to create relationships, not transactions. Our key value of focus is to provide the detailed while scientific analysis to strengthen the reliability. Our promise is that we'll be there ,as questions or issues arise ,every step of the way.`,
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Services = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Go beyond ultimate Services"
        />
        <Slider sx={styles.features} {...settings}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 12, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ["none", null, null, 565, null, "none"],
  },
  features: {
    gap: [6, null, null, 8],
    display: [null, null, null, null, "grid"],
    maxWidth: 1175,
    mx: "auto",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [null, null, null, "repeat(3, 1fr)"],
    ".slick-list": {
      paddingTop: ["31px", null, null, null, 0],
    },
    ".slick-dots": {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex !important",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      li: {
        display: "flex",
      },
      button: {
        backgroundColor: "#CED7E1",
        border: 0,
        outline: 0,
        padding: 0,
        margin: "0 3.5px",
        width: 10,
        height: 10,
        borderRadius: "50%",
        overflow: "hidden",
        textIndent: "-9999rem",
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: "heading",
        width: 13,
        height: 13,
      },
    },
  },
};
