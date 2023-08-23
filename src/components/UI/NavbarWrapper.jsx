import styled from "@emotion/styled";
import { Box } from "@mui/material";

const NavbarWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.93rem 0",
    borderBottom: `1px solid hsl(223, 64%, 94%)`, // theme.palette.neutral.lightGrayishBlue (98 => 94)
    marginBottom: "4.2rem",
}));

export default NavbarWrapper;
