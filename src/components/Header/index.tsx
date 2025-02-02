
import Link from "../Link"
import Logo from "../Logo";
import { StyledHeader, MenuOptions, UserIcon, UserWrapper } from "./styles"
import aglogo from "../../assets/ag-logo.webp"
import CartCounter from "../CartCounter";

interface HeaderProps {
    label: string;
}

const Header: React.FC<HeaderProps> = () => { 
    return (
    <StyledHeader>
        <Logo src={aglogo} href="/" alt="abadengoGames"/>
        <MenuOptions>
          <Link label="Catalog" href="/catalog" />
          <Link label="About Us" href="/aboutus" />
        </MenuOptions>
        <UserWrapper>
            <CartCounter/>
            <UserIcon>👤</UserIcon>
        </UserWrapper>
    </StyledHeader>
)}

export default Header;