import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PaddingLarge.module.css";

export function PaddingLarge({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "padding-bottom", "padding-large")}
      tag="div"
    />
  );
}
