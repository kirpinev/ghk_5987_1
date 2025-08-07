import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  // padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  margin: "1rem",
  overflow: "hidden",
  textAlign: "center",
  paddingBottom: "1rem",
  backgroundColor: "#F8F8F8",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  fontSize: "22px",
  textAlign: "center",
});

const products = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const product = style({
  backgroundColor: "white",
  borderRadius: "24px",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  margin: "0 12px",
  textAlign: "start",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "16px",
  marginBottom: "0.3rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
});

const productText = style({
  marginBottom: 0,
});

const slider = style({
  boxSizing: "border-box",
  padding: "12px",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "2px solid #F3F4F5",
  minHeight: "465px",
});

const sliderTop1 = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "contain",
  borderRadius: "24px",
  height: "80px",
  backgroundImage: "url('./assets/plane.png')",
});

const sliderTop2 = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "contain",
  borderRadius: "24px",
  height: "80px",
  backgroundImage: "url('./assets/city.png')",
});

const sliderTop3 = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "contain",
  borderRadius: "24px",
  height: "80px",
  backgroundImage: "url('./assets/zozh.png')",
});

const sliderTop4 = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "contain",
  borderRadius: "24px",
  height: "80px",
  backgroundImage: "url('./assets/food.png')",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  slider,
  sliderTop1,
  sliderTop2,
  sliderTop3,
  sliderTop4,
};
