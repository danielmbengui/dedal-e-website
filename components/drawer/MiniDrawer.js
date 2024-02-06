import * as React from 'react';
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
import { Card, CardContent, Stack } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      //minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      //top:25
    }}>
      {/* <CssBaseline /> */}

      <MenuComponent zIndex={theme.zIndex.drawer + 1} isGallery={true} />


      <div style={{ marginLeft: open ? drawerWidth : drawerWidthClosed, display: 'none' }}>
        <HeroBanner heading2Text="Gallery 3D" textSizeRegluarText="Creation" />
      </div>
      <Drawer variant="permanent" open={open} >
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
            >Filtrer</Chip>
          </Stack>

        </DrawerHeader>
        <Divider />
        <List>
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
                <Typography sx={{ color: 'var(--white)' }}>Arts graphiques</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{
              color: 'var(--black)', width: '100%', overflow: "clip", verticalAlign: 'middle', cursor: 'pointer', ":hover": {
                backgroundColor: 'var(--yellow-dark)'
              }
            }}>
              <Typography sx={{ width: '100%', color: 'var(--black)' }}>Images</Typography>
            </AccordionDetails>
            <AccordionDetails sx={{
              color: 'var(--black)', width: '100%', overflow: "clip", cursor: 'pointer', ":hover": {
                backgroundColor: 'var(--yellow-dark)'
              }
            }}>
              <Typography sx={{ width: '100%', color: 'var(--black)' }}>Photos</Typography>
            </AccordionDetails>
            <AccordionDetails sx={{
              color: 'var(--black)', width: '100%', overflow: "clip", cursor: 'pointer', ":hover": {
                backgroundColor: 'var(--yellow-dark)'
              }
            }}>
              <Typography sx={{ width: '100%', color: 'var(--black)' }}>Dessins</Typography>
            </AccordionDetails>
            <AccordionDetails sx={{
              color: 'var(--black)', width: '100%', overflow: "clip", cursor: 'pointer', ":hover": {
                backgroundColor: 'var(--yellow-dark)'
              },
            }}>
              <Typography sx={{ width: '100%', color: 'var(--black)' }}>Sculpture</Typography>
            </AccordionDetails>
            <AccordionDetails sx={{
              color: 'var(--black)', width: '100%', overflow: "clip", cursor: 'pointer', ":hover": {
                backgroundColor: 'var(--yellow-dark)'
              }
            }}>
              <Typography sx={{ width: '100%', color: 'var(--black)' }}>Peintures</Typography>
            </AccordionDetails>
          </Accordion>
          <ListItem key={'graphics'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<InboxIcon sx={{ color: 'var(--white)' }} />}
              </ListItemIcon>
              <ListItemText primary={"Arts graphiques"} sx={{ opacity: open ? 1 : 0, color: 'var(--white)' }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'musics'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<InboxIcon sx={{ color: 'var(--white)' }} />}
              </ListItemIcon>
              <ListItemText primary={"Musiques"} sx={{ opacity: open ? 1 : 0, color: 'var(--white)' }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'animations'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<InboxIcon sx={{ color: 'var(--white)' }} />}
              </ListItemIcon>
              <ListItemText primary={"Animations"} sx={{ opacity: open ? 1 : 0, color: 'var(--white)' }} />
            </ListItemButton>
          </ListItem>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon sx={{ color: 'var(--white)' }} /> : <MailIcon sx={{ color: 'var(--white)' }} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'var(--white)' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ marginTop: '4rem', marginLeft: open ? drawerWidth : drawerWidthClosed, paddingLeft: 30, paddingRight: 30, flex: 1, position: 'relative', border: '5px solid red', }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Box>
      </div>
      <div style={{ marginLeft: open ? drawerWidth : drawerWidthClosed, flex: 1, position: 'relative', }}>
        <FooterComponent isGallery={true} />
      </div>


    </Box>
  );
}