import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";
import ResponsiveDrawer from "@/components/drawer/ResponsiveDrawer";
import MiniDrawer from "@/components/drawer/MiniDrawer";


export function GalleryPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent />
      <MiniDrawer />
      {/*
      <ResponsiveDrawer 
      menu={<MenuComponent isGallery={true} />}
      footer={<FooterComponent isGallery={true} />}
      header={<HeroBanner heading2Text="Gallery 3D" textSizeRegluarText="Creation" />}
      component={
<_Builtin.Block className="main-wrapper" tag="div">
        
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
      }
      />
      */}
      
      
      
      
    </_Component>
  );
}
