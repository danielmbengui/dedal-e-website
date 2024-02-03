import React from "react";
import * as _Builtin from "./_Builtin";
import { PaddingGlobalSectionLarge } from "./PaddingGlobalSectionLarge";
import * as _utils from "./utils";
import _styles from "./ContainerLarge.module.css";

export function ContainerLarge({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "container-large")} tag="div">
      <PaddingGlobalSectionLarge />
    </_Component>
  );
}
