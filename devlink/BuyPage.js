import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";

export function BuyPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <Navbar />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="Buy" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block
                className="padding-section-large gallery-3d"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="combine-section_gallery3" tag="section">
              <_Builtin.Block className="combine-padding-global" tag="div">
                <_Builtin.Block
                  className="combine-padding-section-medium gallery-3d"
                  tag="div"
                >
                  <_Builtin.Block
                    className="combine-container-small"
                    tag="div"
                  />
                  <_Builtin.Block className="combine-container-large" tag="div">
                    <_Builtin.Block
                      className="combine-gallery3_component"
                      tag="div"
                    >
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                      <_Builtin.NotSupported _atom="LightboxWrapper" />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
