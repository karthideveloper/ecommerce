import styled from "@emotion/styled";

export const LoginContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  ".login-wrapper": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ".login": {
      display: "flex",
      flexDirection: "column",
      gap:'16px',
    },
  },
});
