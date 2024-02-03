import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { SectionMain } from "./SectionMain";
import { Footer } from "./Footer";
import * as _utils from "./utils";
import _styles from "./VrPage.module.css";

export function VrPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <HeroBanner heading2Text="VR" textSizeRegluarText="Creation" />
        <SectionMain />
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
