import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroBanner.module.css";

export function HeroBanner({
  as: _Component = _Builtin.Block,
  heading2Text = "About us",
  textSizeRegluarText = "About",
}) {
  return (
    <_Component className={_utils.cx(_styles, "header-banner")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "header-banner-component")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header-banner-content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading")}
              tag="h2"
            >
              {heading2Text}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
