export const brand = {
  primaryDark: "#1E90FF",
  primaryLight: "#3D8FD9",
  status: {
    onGoing: "#F9A825",
    completed: "#2E7D32"
  }
} as const;
export type BrandColors = typeof brand;