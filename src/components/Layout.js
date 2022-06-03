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
  ul li {
    text-align: left;
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
  ul li {
    text-align: left;
  }
`;

export default ({ children, color, image, light, half, twocolumn, leftTitle, serif}) => {
  let style = {
    width: twocolumn?"50vw":"100vw",
    height: "100vw",
    padding: `0 ${half ||twocolumn ? "25%" : "10%"}`,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: leftTitle?"left":"center",
    display: "flex",
    flexDirection: "column",
    color: light ? "#000" : "#fff",
    fontFamily: serif?"Times New Roman":"Nunito, Helvetica, Arial, Sans-Serif",
  };

  if (image) {
    style = {
      ...style,
      background: `url(${image})`,
      backgroundSize: "contain",
    };
  }

  if (light) {
    return <DivLight style={style}>{children}</DivLight>;
  } else {
    return <DivDark style={style}>{children}</DivDark>;
  }
};
