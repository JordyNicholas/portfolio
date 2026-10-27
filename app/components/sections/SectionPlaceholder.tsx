import { Box, Typography } from "@mui/material";

type Props = { id: string; title: string; }

export function SectionPlaceholder({ id, title }: Props) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: 16,
        py: 4,
        minHeight: 120
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">Placeholder</Typography>
    </Box>
  )
}
