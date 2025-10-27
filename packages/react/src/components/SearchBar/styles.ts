import { styled } from "../../styles"

export const SearchBarContainer = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: "768px",
  margin: "0 auto",
})

export const SearchBarIcon = styled("div", {
  position: "absolute",
  left: "$4",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray400",
  pointerEvents: "none",
  transition: "color 0.2s",

  svg: {
    width: "$5",
    height: "$5",
  },
})

export const SearchBarInput = styled("input", {
  width: "100%",
  height: "$12",
  padding: "0 $12",
  paddingLeft: "$12",
  fontSize: "$md",
  fontFamily: "$default",
  color: "$gray100",
  backgroundColor: "$gray800",
  border: "1px solid $gray700",
  borderRadius: "$md",
  outline: "none",
  transition: "all 0.2s",

  "&::placeholder": {
    color: "$gray400",
  },

  "&:hover": {
    borderColor: "$gray600",
  },

  "&:focus": {
    borderColor: "$gray500",
    boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.05)",
  },

  "&:focus + ${SearchBarIcon}": {
    color: "$gray100",
  },
})

export const ClearButton = styled("button", {
  position: "absolute",
  right: "$2",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$9",
  height: "$9",
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "$sm",
  color: "$gray400",
  cursor: "pointer",
  transition: "all 0.2s",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:hover": {
    backgroundColor: "$gray700",
    color: "$gray100",
  },
})
