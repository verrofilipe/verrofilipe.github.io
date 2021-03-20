import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export default ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      padding: "0 0.5rem",
      minWidth: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151515",
    },
    main: {
      padding: "5rem 0",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    description: {
      lineHeight: 1.5,
      fontSize: "1.5rem",
    },
    code: {
      background: "#fafafa",
      borderRadius: "5px",
      padding: "0.75rem",
      fontSize: "1.1rem",
      fontFamily:
        "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    },
    grid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "800px",
      marginTop: "3rem",
    },
    card: {
      margin: "1rem",
      flexBasis: "45%",
      padding: "1.5rem",
      textAlign: "left",
      color: "inherit",
      textDecoration: "none",
      border: "1px solid #eaeaea",
      borderRadius: "10px",
      transition: "color 0.15s ease, border-color 0.15s ease",
    },
    title: {
      color: "#6fafff",
    },
  });
