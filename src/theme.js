const theme = {
  //Edit your dashboard theme below...
  global: {
    fontFamily: `Poppins, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;`,
    color: {
      brand: "#01bfff",
    },
    overlay: {
      background: `rgba(1,191,255,0.3)`,
    },
  },
  navItem: {
    color: { active: "brand", inactive: "#303133" },
  },

  sidebar: {
    // width: "300px",
    color: {
      background: "#F7F7F7",
      closeIcon: "brand",
      openIcon: "brand",
    },
    border: {
      // 1px dashed red; border-width: 1px 1px 0 1px;
      color: "brand",
      radius: "0px 20px 20px 0px",
      size: "1px",
      style: "solid",
    },
  },
};

export default theme;
