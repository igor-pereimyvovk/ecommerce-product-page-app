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
                [":hover"]: {
                    outline: `2px solid ${theme.palette.primary.main}`,
                },
            }}
        >
            <img
                src={userImage}
                alt="avatar"
                width="50px"
                height="50px"
                style={{ verticalAlign: "top" }}
            />
        </Box>
    );
};

export default UserIcon;
