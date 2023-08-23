import { useState } from "react";
import { Box } from "@mui/material";
import Item from "./Item";
import LogoSvgIcon from "./UI/LogoSvgIcon";
import NavbarWrapper from "./UI/NavbarWrapper";
import MenuItems from "./UI/MenuItems";
import CartWithModal from "./UI/CartWithModal";
import UserIcon from "./UI/UserIcon";
import { menuItems } from "../data/menuItems";

const Navbar = () => {
    const [category, setCategory] = useState("");

    const handleClickedCategory = (clickedCategory) => {
        setCategory(clickedCategory);
    };
    const handleClickedLogo = () => {
        setCategory("");
    };

    return (
        <NavbarWrapper>
            <Box display="flex" gap="3rem" alignItems="center">
                <LogoSvgIcon handleClicked={handleClickedLogo} />
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
            </Box>
            <Box display="flex" gap="2.2rem" alignItems="center">
                <CartWithModal />
                <UserIcon />
            </Box>
        </NavbarWrapper>
    );
};

export default Navbar;
