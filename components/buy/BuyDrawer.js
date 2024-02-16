import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TuneIcon from '@mui/icons-material/Tune';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuComponent from '../menu/MenuComponent';
import { FooterComponent } from '../footer/FooterComponent';
import { HeroBanner } from '@/devlink';
import { Button, ButtonGroup, Chip } from "@nextui-org/react";
import { Card, CardContent, Container, Stack } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Masonry from '@mui/lab/Masonry';
import BuyMasonry from './BuyMasonry';
import { BuyContent } from './BuyContent';

import { useTranslation } from 'next-i18next';


//import AppBar from '@mui/material/AppBar';


const drawerWidth = 240;
const drawerWidthClosed = 0;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'var(--black)',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'var(--black)',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: drawerWidthClosed,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 70,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function BuyDrawer({ connectedUser, setConnectedUser }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const { t } = useTranslation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MENU_DRAWER = [
    {
      title: "Arts graphiques",
      menu: [
        "Images",
        "Photos",
        "Dessins",
        "Sculpture",
        "Peintures",
      ]
    },
    {
      title: "Animations",
      menu: [
        
      ]
    },
    {
      title: "Musiques",
      menu: [
        "Classique",
        "Rock",
        "Pop",
        "Hip Hop & Rap",
        "Country",
        "Jazz",
        "Blues",
        "Electronic",
        "R&B",
        "Reggae",
        "Metal",
        "Folk",
        "Musiques du monde",
      ]
    }
  ];

  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      //minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      left: 0
      //top:25
    }}>
      {/* <CssBaseline /> */}



      <div style={{ marginLeft: open ? drawerWidth : drawerWidthClosed, display: 'none' }}>
        <HeroBanner heading2Text="Gallery 3D" textSizeRegluarText="Creation" />
      </div>
      <Drawer variant="permanent" open={open} sx={{display: {xs:'none', md:'block'}}} >
        <DrawerHeader sx={{
          px: 2.5,
          //minWidth: 40
        }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ width: '100%' }}
          //spacing={8}
          >
            <Chip
              color="warning"
              variant="bordered"
              size='lg'
              startContent={<TuneIcon fontSize='small' />}
            >Filtrer
            </Chip>
          </Stack>

        </DrawerHeader>
        <Divider />
        <List>
          {
            MENU_DRAWER.map((element, index) => {
              return(
                <div key={element.title + index} >
                  <Accordion sx={{ color: 'var(--white)', width: '100%', backgroundColor: 'var(--grey-dedal)' }}>
            <AccordionSummary
              sx={{ color: 'var(--white)', width: '100%', backgroundColor: 'var(--black)' }}
              expandIcon={<ExpandMoreIcon sx={{ color: 'var(--white)' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ width: '100%', }}
                spacing={2}
              >
                {<InboxIcon sx={{ color: 'var(--white)' }} />}
                <Typography sx={{ color: 'var(--white)' }}>{element.title}</Typography>
              </Stack>
            </AccordionSummary>
            {
              element.menu.map((subtitle, index) => {
                return(
                  <AccordionDetails key={subtitle + index} sx={{
                    color: 'var(--black)', width: '100%', overflow: "clip", verticalAlign: 'middle', cursor: 'pointer', ":hover": {
                      backgroundColor: 'var(--yellow-dark)'
                    }
                  }}>
                    <Typography sx={{ width: '100%', color: 'var(--black)' }}>{subtitle}</Typography>
                  </AccordionDetails>
                )
              })
            }
          </Accordion>
          <Divider color='white' variant="middle" />
                </div>
              )
            })
          }
        </List>
      </Drawer>
      <div style={{
        marginTop: '4rem',
        marginLeft: open ? drawerWidth : drawerWidthClosed,
        paddingLeft: 30, paddingRight: 30, flex: 1, position: 'relative',
        //right:0,
        //border: '5px solid red',
        //width:'100%',
        //backgroundColor:'var(--grey-dark-dedal)',
        //backgroundColor:'green',
      }}>

        <Stack
          sx={{
            pt: {xs:0, md:3},
            width: '100%',
            //background:'cyan'
          }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <BuyContent />
          {/**<BuyMasonry /> */}
        </Stack>
      </div>
      <div style={{ marginLeft: open ? drawerWidth : drawerWidthClosed, flex: 1, position: 'relative', }}>
        <FooterComponent isGallery={true} />
      </div>


    </Box>
  );
}