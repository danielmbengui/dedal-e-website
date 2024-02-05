import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { SectionMain } from "./SectionMain";
import { Footer } from "./Footer";

export function CartPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <Navbar />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="Cart" textSizeRegluarText="Creation" />
        <SectionMain />
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
