import { Box, IconButton } from "@mui/material";

import userImage from "../../assets/images/image-avatar.png";
import { useTheme } from "@emotion/react";

const UserIcon = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                borderRadius: "50%",
                cursor: "pointer",
                width: "50px",
                height: "50px",
                [":hover"]: {
                    outline: `2px solid ${theme.palette.primary.main}`,
                },
                ["@media(max-width:740px)"]: {
                    width: "35px",
                    height: "35px",
                },
                ["@media(max-width:435px)"]: {
                    width: "27px",
                    height: "27px",
                },
            }}
        >
            <img
                src={userImage}
                alt="avatar"
                width="100%"
                height="100%"
                style={{ verticalAlign: "top" }}
            />
        </Box>
    );
};

export default UserIcon;
