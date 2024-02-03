import React from "react";
import * as _Builtin from "./_Builtin";
import { ContainerLarge } from "./ContainerLarge";
import * as _utils from "./utils";
import _styles from "./PaddingGlobal.module.css";

export function PaddingGlobal({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "padding-global")} tag="div">
      <ContainerLarge />
    </_Component>
  );
}
