const colorTheme = ["#01bfff", "#F7F7F7", "#67D9FF", "#868e96"];

// https://plecosystems.com/wp-content/uploads/2019/06/AdobeStock_184811519-uai-2880x1620.jpeg

const theme = {
  //Edit your dashboard theme below...
  global: {
    fontFamily: `Poppins, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;`,
    color: {
      brand: "#01bfff",
      brandLight: "#F7F7F7",
    },
    overlay: {
      background: `brand`,
    },
    colorTheme,
    border: {
      color: "brand",
      size: "1px",
      style: "solid",
    },
    chart: {
      border: {
        color: "brand",
        size: "1px",
        style: "solid",
      },
    },
  },
  kpi: {
    wrapper: {
      backgroundColor: "brandLight",
    },
  },
  navItem: {
    color: { active: "brand", inactive: "#303133" },
  },
  spinner: {
    color: "brand",
  },
  selectionModal: {
    bckgColor: {
      confirm: "brand",
      cancel: "brandLight",
    },
    border: {
      color: { cancel: "brand" },
      size: { cancel: "1px" },
      style: { cancel: "solid" },
    },
    color: {
      cancel: "brand",
    },
  },

  sidebar: {
    color: {
      background: "brandLight",
      closeIcon: "brand",
    },
    border: {
      radius: "0px 0px 0px 0px",
    },
  },
};

export default theme;
