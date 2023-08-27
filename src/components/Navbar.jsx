import { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import Item from "./Item";
import LogoSvgIcon from "./UI/LogoSvgIcon";
import NavbarWrapper from "./UI/NavbarWrapper";
import MenuItems from "./UI/MenuItems";
import CartWithModal from "./UI/CartWithModal";
import UserIcon from "./UI/UserIcon";
import { menuItems } from "../data/menuItems";
import { theme } from "../theme/theme";

const Navbar = () => {
    const [category, setCategory] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const media = useMediaQuery("@media(max-width:860px)");
    const handleClickedCategory = (clickedCategory) => {
        setCategory(clickedCategory);
    };
    const handleClickedLogo = () => {
        setCategory("");
    };

    return (
        <NavbarWrapper>
            <Box
                display="flex"
                gap={media ? "0.5rem" : "3rem"}
                alignItems="center"
                flexDirection={media && "row-reverse"}
            >
                <LogoSvgIcon handleClicked={handleClickedLogo} />
                {media ? (
                    <>
                        <IconButton onClick={() => setIsMobileMenuOpen(true)}>
                            <svg
                                width="16"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                                    fill="#69707D"
                                />
                            </svg>
                        </IconButton>
                        {isMobileMenuOpen && (
                            <Box
                                position="fixed"
                                sx={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: theme.palette.neutral.black,
                                    zIndex: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: "35%",
                                        background: theme.palette.neutral.white,
                                        padding: "2.8rem 3.6rem",
                                        ["@media(max-width:740px)"]: {
                                            padding: "2rem 3.6rem",
                                            width: "65%",
                                        },
                                        ["@media(max-width:435px)"]: {
                                            padding: "1.7rem 2.2rem",
                                            width: "67%",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{ mb: 5, cursor: "pointer" }}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        <svg
                                            width="17" //14
                                            height="16" // 15
                                            viewBox="0 0 14 15"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                                fill={
                                                    theme.palette.neutral
                                                        .darkGrayishBlue
                                                }
                                            />
                                        </svg>
                                    </Box>
                                    {menuItems.map((item) => {
                                        return (
                                            <Box
                                                key={item}
                                                sx={{
                                                    color: theme.palette.neutral
                                                        .veryDarkBlue,
                                                    fontWeight: "bold",
                                                    fontSize: "22px", // media smaller
                                                    mb: 2.5,
                                                    cursor: "pointer",
                                                    [":hover"]: {
                                                        opacity: 0.7,
                                                    },
                                                    ["@media(max-width:435px)"]:
                                                        {
                                                            fontSize: "19px",
                                                        },
                                                }}
                                                onClick={() =>
                                                    handleClickedCategory(item)
                                                }
                                            >
                                                {item}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                        )}
                    </>
                ) : (
                    <MenuItems>
                        {menuItems.map((item) => (
                            <Item
                                key={item}
                                value={item}
                                currentValue={category}
                                handleClicked={handleClickedCategory}
                            />
                        ))}
                    </MenuItems>
                )}
            </Box>
            <Box
                display="flex"
                gap="2.2rem"
                alignItems="center"
                sx={{
                    ["@media(max-width:740px)"]: {
                        gap: "1.4rem",
                    },
                }}
            >
                <CartWithModal />
                <UserIcon />
            </Box>
        </NavbarWrapper>
    );
};

export default Navbar;
