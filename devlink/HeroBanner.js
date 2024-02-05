import React from "react";
import * as _Builtin from "./_Builtin";

export function HeroBanner({
  as: _Component = _Builtin.Block,
  heading2Text = "About us",
  textSizeRegluarText = "About",
}) {
  return (
    <_Component className="header-banner" tag="div">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="header-banner-component" tag="div">
          <_Builtin.Block className="header-banner-content" tag="div">
            <_Builtin.Heading className="heading" tag="h2">
              {heading2Text}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
