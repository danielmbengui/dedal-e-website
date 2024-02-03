import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PaddingSmall.module.css";

export function PaddingSmall({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "padding-bottom", "padding-small")}
      tag="div"
    />
  );
}
