"use client";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem, navItems, navLabel } from "@/app/data/nav";

export function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box sx={{ display: { xs: "block", md: "none"} }}>
      <IconButton
        aria-label="Menu"
        onClick={ () => setOpen(true) }
        edge="start"
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={ () => setOpen(false) }>
        <List sx={{ width: 260 } } component="nav" aria-label="Primary">
          { navItems.map((item: NavItem) => (
            <ListItemButton
              key={item.id}
              href={item.href}
              onClick={ () => setOpen(false) }
            >
              <ListItemText primary={ navLabel(item.id) }/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}