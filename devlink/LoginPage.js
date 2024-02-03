import React from "react";
import * as _Builtin from "./_Builtin";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import * as _utils from "./utils";
import _styles from "./LoginPage.module.css";

export function LoginPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "main-wrapper")} tag="div">
      <HeroBanner heading2Text="Login" textSizeRegluarText="Creation" />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-change-log")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-section-large")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
