import { useNavigate } from "react-router-dom";
import { useMediaDevices } from "../../hooks";
import Dropdown from "../Dropdown";
import Link from "../Link";
import { StyledFooter } from "./styles";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dowpDownKids = [
    {action: () => navigate("/faq"), label: t("linkShipment")},
    {action: () => navigate("/faq"), label: t("linkPay")},
    {action: () => navigate("/aboutus"), label: t("linkAboutUs")},
    {action: () => navigate("/contact"), label: t("linkContact")},
    {action: () => navigate("/faq"), label: t("linkFAQ")},
    {action: () => navigate("/tips"), label: t("linkTips")},
];
  return (
  <StyledFooter>
    {
      mediaIsPhone ? <Dropdown button={<>📄</>} elements={dowpDownKids} orientation="up" /> :
      <>
        <Link label={t("linkShipment")} href={"/faq"}/>
        <Link label={t("linkPay")} href={"/faq"}/>
        <Link label={t("linkAboutUs")} href="/aboutus" />
        <Link label={t("linkContact")} href={"/contact"}/>
        <Link label={t("linkFAQ")} href={"/faq"}/>
        <Link label={t("linkTips")} href={"/tips"}/>
      </>
    }
  </StyledFooter>
)}


export default Footer;