import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Kumbh Sans, sans-serif",
    },
    palette: {
        primary: {
            main: "hsl(26, 100%, 55%)", // Orange
            dark: "hsl(25, 100%, 82%)",
            light: "hsl(25, 100%, 94%)",
        },
        neutral: {
            veryDarkBlue: "hsl(220, 13%, 13%)", // Very dark blue
            darkGrayishBlue: "hsl(219, 9%, 45%)", // Dark grayish blue
            grayishBlue: "hsl(220, 14%, 75%)", // Grayish blue
            lightGrayishBlue: "hsl(223, 64%, 98%)", // Light grayish blue
            white: "hsl(0, 0%, 100%)", // White
            black: "rgba(0, 0, 0, 0.75)", // Black with 75% opacity for lightbox background
        },
        background: {
            default: "hsl(0, 0%, 100%)",
        },
    },
    breakpoints: {
        values: {
            ["main-container"]: 1080,
        },
    },
});
