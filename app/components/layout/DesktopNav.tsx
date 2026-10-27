"use client";
import { navItems, navLabel } from "@/app/data/nav";
import { Button, Stack } from "@mui/material";

export function DesktopNav() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: { xs: "none", md: "flex" } }}
      component="nav"
      aria-label="Primary"
    >
      { navItems.map((item) => (
        <Button
          key={item.id}
          href={item.href}
          color="inherit"
          size="small"
        >
          {navLabel(item.id)}
        </Button>
      ))}
    </Stack>
  );
}