"use client";
import { AppBar, Toolbar, Typography } from "@mui/material"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

export function AppShell() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jordy Nicholas
        </Typography>
        <DesktopNav />
        <MobileNav />
      </Toolbar>
    </AppBar>
  )
}