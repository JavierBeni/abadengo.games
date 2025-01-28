
import Link from "../Link"
import Logo from "../Logo";
import { StyledHeader, MenuOptions, UserIcon } from "./styles"
import ezg from "../../assets/ezg.png"
import CartCounter from "../CartCounter";

interface HeaderProps {
    label: string;
}

const Header: React.FC<HeaderProps> = () => { 
    return (
    <StyledHeader>
        <Logo src={ezg} href="/" alt="abadengoGames"/>
        <MenuOptions>
          <Link label="Catalog" href="/catalog" />
          <Link label="About Us" href="/aboutus" />
        </MenuOptions>
        <>
            <CartCounter/>
            <UserIcon>👤</UserIcon>
        </>
    </StyledHeader>
)}

export default Header;