import styled from "@emotion/styled";
import { Box } from "@mui/material";

const NavbarWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.93rem 0",
    borderBottom: `1px solid hsl(223, 64%, 94%)`, // theme.palette.neutral.lightGrayishBlue (98 => 94)
    marginBottom: "4.2rem",
    ["@media(max-width:860px)"]: {
        marginBottom: "2rem",
    },
    ["@media(max-width:740px)"]: {
        border: "none",
        padding: "1.5rem 0",
        marginBottom: "1rem",
    },
    ["@media(max-width:435px)"]: {
        padding: "1.2rem 1.8rem",
        marginBottom: "0",
    },
}));

export default NavbarWrapper;
