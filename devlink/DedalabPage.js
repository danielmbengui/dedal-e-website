import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import * as _utils from "./utils";
import _styles from "./DedalabPage.module.css";

export function DedalabPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <HeroBanner heading2Text="Dedalab" textSizeRegluarText="Creation" />
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
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
