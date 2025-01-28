import Link from "../Link";
import { StyledFooter } from "./styles";

const Footer: React.FC = () => {
    return (
    <StyledFooter>
        <Link label={"Shipment"} href={""}/>
        <Link label={"Pay"} href={""}/>
        <Link label={"About Us"} href={""}/>
        <Link label={"FAQ"} href={""}/>
    </StyledFooter>
)}


export default Footer;