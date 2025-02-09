import { useNavigate } from "react-router-dom";
import { useMediaDevices } from "../../hooks";
import Dropdown from "../Dropdown";
import Link from "../Link";
import { StyledFooter } from "./styles";

const Footer: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const dowpDownKids = [
    {action: () => navigate("/faq"), label: "Shipment"},
    {action: () => navigate("/faq"), label: "Pay"},
    {action: () => navigate("/aboutus"), label: "About Us"},
    {action: () => navigate("/contact"), label: "Contact"},
    {action: () => navigate("/faq"), label: "FAQ"},
];
  return (
  <StyledFooter>
    {
      mediaIsPhone ? <Dropdown button={<>📄</>} elements={dowpDownKids} orientation="up" /> :
      <>
        <Link label={"Shipment"} href={"/faq"}/>
        <Link label={"Pay"} href={"/faq"}/>
        <Link label="About Us" href="/aboutus" />
        <Link label={"Contact"} href={"/contact"}/>
        <Link label={"FAQ"} href={"/faq"}/>
      </>
    }
  </StyledFooter>
)}


export default Footer;