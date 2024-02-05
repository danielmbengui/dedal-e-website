import React from "react";
import * as _Builtin from "./_Builtin";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";

export function CreateAccountPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="main-wrapper" tag="div">
      <HeroBanner
        heading2Text="Create Account"
        textSizeRegluarText="Creation"
      />
      <_Builtin.Block className="section-change-log" tag="div">
        <_Builtin.Block className="padding-global" tag="div">
          <_Builtin.Block className="container-large" tag="div">
            <_Builtin.Block className="padding-section-large" tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
