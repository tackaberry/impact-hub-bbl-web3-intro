// example Layout.js
import React from "react";
import styled from "styled-components";

const DivLight = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #000;
  }
  a {
    padding: 2px;
  }
`;

const DivDark = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #fff;
  }
  a {
    padding: 2px;
  }
  td {
    padding: 0.5em 1em;
  }
`;

export default ({ children, color, image, light, half }) => {
  let style = {
    width: "100vw",
    height: "100vw",
    padding: `0 ${half ? "25%" : "10%"}`,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    color: light ? "#000" : "#fff",
  };

  if (image) {
    style = {
      ...style,
      background: `url(${image})`,
      backgroundSize: "cover",
    };
  }

  if (light) {
    return <DivLight style={style}>{children}</DivLight>;
  } else {
    return <DivDark style={style}>{children}</DivDark>;
  }
};
