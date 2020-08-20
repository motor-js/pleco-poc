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
      background: `rgba(1,191,255,0.3)`,
    },
    colorTheme,
  },
  navItem: {
    color: { active: "brand", inactive: "#303133" },
  },
  spinner: {
    // type: "ThreeDots",
    color: "brand",
    // size: 50,
    timeout: 5000,
  },
  selectionModal: {
    // buttonType: "icon",
    hoverBckgColor: {
      confirm: "#67D9FF",
      cancel: "rgba(247, 247, 247,0.3)",
    },
    bckgColor: {
      // confirm: "brand",
      // cancel: "brandLight",
      confirm: "#01bfff",
      cancel: "#F7F7F7",
    },
    border: {
      cancel: "solid 1px #01bfff",
    },
    color: {
      cancel: "#01bfff",
    },
  },

  sidebar: {
    // width: "300px",
    color: {
      background: "brandLight",
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
