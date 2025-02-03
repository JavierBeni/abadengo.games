import Link from "../Link";
import { StyledFooter } from "./styles";

const Footer: React.FC = () => {
    return (
    <StyledFooter>
        <Link label={"Shipment"} href={"/faq"}/>
        <Link label={"Pay"} href={"/faq"}/>
        <Link label={"Contact"} href={"/contact"}/>
        <Link label={"FAQ"} href={"/faq"}/>
    </StyledFooter>
)}


export default Footer;