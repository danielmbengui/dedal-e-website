import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import * as _utils from "./utils";
import _styles from "./GalleryPage.module.css";

export function GalleryPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <HeroBanner heading2Text="Gallery 3D" textSizeRegluarText="Creation" />
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
                className={_utils.cx(
                  _styles,
                  "padding-section-large",
                  "gallery-3d"
                )}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "combine-section_gallery3")}
              tag="section"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "combine-padding-global")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "combine-padding-section-medium",
                    "gallery-3d"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "combine-container-small")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "combine-container-large")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "combine-gallery3_component"
                      )}
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
