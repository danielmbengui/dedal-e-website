import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import MenuComponent from "@/components/menu/MenuComponent";
import MiniDrawer from "@/components/drawer/MiniDrawer";
import BuyDrawer from "@/components/buy/BuyDrawer";


export function BuyComponent({ as: _Component = _Builtin.Block, connectedUser, setConnectedUser }) {
  return (
    <_Component className="page-wrapper" tag="div" style={{backgroundColor:'var(--grey-dark-dedal)'}}>
     
      <BuyDrawer connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
      {/*
       <MenuComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
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
