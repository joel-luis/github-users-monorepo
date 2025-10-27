import { styled } from "../../styles"

export const UserGridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "$6",

  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@media (min-width: 1280px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
})

export const LoadingContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$16",
  minHeight: "400px",
})

export const EmptyContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$16",
  minHeight: "400px",
})
