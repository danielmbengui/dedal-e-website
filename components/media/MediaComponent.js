import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { HeroBanner } from "@/devlink/HeroBanner";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { useTranslation } from 'next-i18next';

export function MediaComponent({ as: _Component = _Builtin.Block, connectedUser, setConnectedUser }) {
    const { t, i18n } = useTranslation();

  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner
          heading2Text={t('media-library', { ns: 'navbar' })}
          textSizeRegluarText="Creation"
        />
        <_Builtin.Block className="section-change-log" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="padding-section-large" tag="div">
                <_Builtin.List tag="ul" unstyled={false}>
                  <_Builtin.ListItem />
                  <_Builtin.ListItem />
                  <_Builtin.ListItem />
                </_Builtin.List>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
