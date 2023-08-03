import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

const navigation = [{ name: "Home", path: "/" }, { name: "About us", path: "/about" }, { name: "Gallery", path: "/gallery" }, { name: "US location", path: "/location" }, { name: "Blog", path: "/blog" }]

export default function NavigationDrawer({ open, setOpen }) {
    // const [open, setOpen] = React.useState(false);

    // const toggleDrawer = (open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setOpen(open)
    // };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
            <List>
                {navigation.map((route) => (
                    <Link to={route.path} style={{ textDecoration: "none", color: "#343434" }} onClick={() => { if (route.path === "/location") { sessionStorage.setItem("path", "/location") } }}>
                        <ListItem button key={route.name}>
                            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
                            <ListItemText primary={route.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />

        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={() => setOpen(false)}
                    transitionDuration={{ enter: 500, appear: 1000, exit: 500 }}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
