import React from "react";
import * as _Builtin from "./_Builtin";
import { PaddingGlobal } from "./PaddingGlobal";
import * as _utils from "./utils";
import _styles from "./SectionMain.module.css";

export function SectionMain({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section-change-log")} tag="div">
      <PaddingGlobal />
    </_Component>
  );
}
