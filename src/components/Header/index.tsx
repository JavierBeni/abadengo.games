import { useTranslation } from "react-i18next";
import Link from "../Link"
import Logo from "../Logo";
import Dropdown from "../Dropdown";
import { StyledHeader, MenuOptions, IconWrapper, UserWrapper } from "./styles"
import aglogo from "../../assets/ag-logo.webp"
import CartCounter from "../CartCounter";
import { usePersistedLanguage, useMediaDevices } from "../../hooks";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    label: string;
}

const Header: React.FC<HeaderProps> = () => {
    const { i18n } = useTranslation();
    const { mediaIsPhone } = useMediaDevices();
    const navigate = useNavigate();
    const { changeLanguage } = usePersistedLanguage();
    const dowpDownKids = [
      {action: () => changeLanguage("es"), label: "es"},
      {action: () => changeLanguage("en"), label: "en"},
      {action: () => changeLanguage("pl"), label: "pl"},
    ];
    const menuKids = [
      {action: () => navigate("/catalog/pokemon"), label: "Catalog Pokemon"},
      {action: () => navigate("/catalog/others"), label: "Other products"},
    ];

    return (
    <StyledHeader>
        <Logo src={aglogo} href="/" alt="abadengoGames"/>
        {
          mediaIsPhone ?
            <Dropdown button={<>Ⓜ️</>} elements={menuKids} /> :
            <MenuOptions>
              <Link label="Catalog Pokemon" href="/catalog/pokemon" />
              <Link label="Other products" href="/catalog/others" />
            </MenuOptions>
        }
        <UserWrapper>
            <Dropdown button={<IconWrapper>🌐</IconWrapper>} elements={dowpDownKids} active={i18n.language}/>
            <CartCounter/>
            <IconWrapper>👤</IconWrapper>
        </UserWrapper>
    </StyledHeader>
)}

export default Header;