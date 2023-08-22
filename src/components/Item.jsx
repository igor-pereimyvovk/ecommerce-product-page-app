import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const Item = ({ value, currentValue, handleClicked }) => {
    const theme = useTheme();

    const isClicked = value === currentValue;

    return (
        <Box
            sx={{
                color: isClicked
                    ? theme.palette.neutral.veryDarkBlue
                    : theme.palette.neutral.darkGrayishBlue,
                cursor: "pointer",
                position: "relative",
                [":after"]: isClicked
                    ? {
                          content: "''",
                          cursor: "default",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          margin: "auto",
                          bottom: "-2.77rem",
                          height: "4px",
                          background: theme.palette.primary.main,
                          borderRadius: "2px 2px 0 0",
                          zIndex: 1,
                          //   transition: "width 0.23s ease-in-out", // 0.23 ease-in-out
                      }
                    : {
                          content: "''",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          margin: "auto",
                          width: 0,
                          bottom: "-2.77rem",
                          height: "4px",
                          background: theme.palette.primary.dark,
                          zIndex: 1,
                          transition: "width 0.23s ease",
                      },
                [":hover"]: {
                    color: theme.palette.neutral.veryDarkBlue,
                    [":after"]: {
                        width: "100%",
                    },
                },
            }}
            onClick={() => handleClicked(value)}
        >
            {value}
        </Box>
    );
};

export default Item;
