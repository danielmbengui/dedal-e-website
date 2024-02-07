import React, { useState } from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import { Grid } from "@mui/material";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button } from "@nextui-org/react";


import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { LOGO_192, LOGO_512 } from "@/constants/images";


export function DedalabPage({ as: _Component = _Builtin.Block }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="Dedalab" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="padding-section-large" tag="div">
                <_Builtin.List tag="ul" unstyled={false}>
                  <_Builtin.ListItem />
                  <_Builtin.ListItem />
                  <_Builtin.ListItem />
                </_Builtin.List>
                <Grid container>
                  <Grid item>
                    <Card className="max-w-[400px]">
                      <CardHeader className="justify-between">
                        <div className="flex gap-5">
                          <Avatar isBordered radius="full" size="md" src={LOGO_512} />
                          <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Nom artiste</h4>
                            <h5 className="text-small tracking-tight text-default-400">Description artiste</h5>
                          </div>
                        </div>
                        <Button
                          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                          color="primary"
                          radius="full"
                          size="sm"
                          variant={isFollowed ? "bordered" : "solid"}
                          onPress={() => setIsFollowed(!isFollowed)}
                        >
                          {isFollowed ? "Message envoyé" : "Message"}
                        </Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="/images/aideal-hwa-OYzbqk2y26c-unsplash-1-p-500.jpg"
                          width={80}
                          height={80}
                        />
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Link
                          isExternal
                          showAnchorIcon
                          href="https://github.com/nextui-org/nextui"
                        >
                          Visit source code on GitHub.
                        </Link>
                      </CardFooter>
                    </Card>
                  </Grid>
                </Grid>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
