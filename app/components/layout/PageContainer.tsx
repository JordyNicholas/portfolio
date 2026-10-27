import { Container, ContainerProps } from "@mui/material";
import React from "react";

type PageContainerProps = {
  children?: React.ReactNode;
} & Pick<ContainerProps, "sx" | "component">;

export default function PageContainer({ children, sx, ...props }: PageContainerProps) {
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 4 },
          ...sx
        }}
        {...props}
      >
        {children}
      </Container>
    </React.Fragment>
  )
}