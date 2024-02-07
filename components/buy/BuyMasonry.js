import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { PauseCircleIcon } from "@/components/icons/PauseCircleIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { PreviousIcon } from "@/components/icons/PreviousIcon";
import { RepeatOneIcon } from "@/components/icons/RepeatOneIcon";
import { ShuffleIcon } from "@/components/icons/ShuffleIcon";
import { LOGO_192, LOGO_512 } from "@/constants/images";
const RANDOM_IMG = "/images/aideal-hwa-OYzbqk2y26c-unsplash-1-p-500.jpg";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const OneCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="sm" color="warning" size="md" src={LOGO_512} />
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
      <CardBody className="overflow-visible py-2">
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={RANDOM_IMG}
            width={80}
            height={80}
          />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        Description image<br />
        Description music<br />
        Description animation
      </CardFooter>
    </Card>
  );
}

const OneMusicCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <Card
      //isBlurred
      //className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      className="max-w-[400px]"
      //shadow="sm"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="sm" color="warning" size="md" src={LOGO_512} />
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
      <CardBody>
      <Stack>
            <h1 style={{color:'red'}} className="text-large font-medium">Nom musique</h1>
            <div>
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </Button>
            </div>
            </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        Description image<br />
        Description music<br />
        Description animation
      </CardFooter>
    </Card>
  );
}



const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function BuyMasonry() {
  return (
    <Box sx={{ minHeight: 377 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          
            index % 2 === 0 ? <OneCard key={index} /> : <OneMusicCard key={index} />
          
        ))}
      </Masonry>
    </Box>
  );
}