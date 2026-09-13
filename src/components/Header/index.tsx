import { useTranslation } from "react-i18next";
import { useMemo } from "react";
// import Link from "../Link"
import Logo from "../Logo";
import Dropdown from "../Dropdown";
import { StyledHeader, MenuOptions, IconWrapper, UserWrapper } from "./styles"
import aglogo from "../../assets/ag-logo.webp"
// import CartCounter from "../CartCounter";
import { usePersistedLanguage } from "../../hooks";
// import { useNavigate } from "react-router-dom";

interface HeaderProps {
    label: string;
}

const Header: React.FC<HeaderProps> = () => {
    const { i18n } = useTranslation();
    // const { mediaIsPhone } = useMediaDevices();
    // const navigate = useNavigate();
    const { changeLanguage } = usePersistedLanguage();

    const dropdownKids = useMemo(() => [
      {action: () => changeLanguage("es"), label: "🇪🇸 ES", id: "lang-es"},
      {action: () => changeLanguage("en"), label: "🇬🇧 EN", id: "lang-en"},
      {action: () => changeLanguage("pl"), label: "🇵🇱 PL", id: "lang-pl"},
    ], [changeLanguage]);
    
    // const menuKids = useMemo(() => [
    //   {action: () => navigate("/catalog/all"), label: t("linkCatalog"), id: "menu-catalog"}
    // ], [navigate, t]);

    return (
    <StyledHeader>
        <Logo src={aglogo} href="/" alt="abadengoGames"/>
        {
          // mediaIsPhone ?
          //   <Dropdown button={<>Menu</>} elements={menuKids} /> :
            <MenuOptions>
              {/* <Link label={t("linkCatalogPokemon")} href="/catalog/pokemon" /> */}
              {/* <Link label={t("linkCards")} href="/cards" /> */}
              {/* <Link label={t("linkOtherProducts")} href="/catalog/others" /> */}
            </MenuOptions>
        }
        <UserWrapper>
            <Dropdown button={<IconWrapper>🌐</IconWrapper>} elements={dropdownKids} active={i18n.language}/>
            {/* <CartCounter/>
            <IconWrapper>👤</IconWrapper> */}
        </UserWrapper>
    </StyledHeader>
)}

export default Header;
