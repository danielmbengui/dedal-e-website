import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { SectionMain } from "./SectionMain";
import { Footer } from "./Footer";
import { FooterComponent } from "@/components/footer/FooterComponent";
import MenuComponent from "@/components/menu/MenuComponent";

export function VrPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="VR" textSizeRegluarText="Creation" />
        <SectionMain />
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
