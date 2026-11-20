import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaDevices } from "../../hooks";
import Dropdown from "../Dropdown";
import Link from "../Link";
import { StyledFooter } from "./styles";
import { useTranslation } from "react-i18next";
import React from "react";
import { localizedPath } from "../../utils/localizedRoutes";

const FooterComponent: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const dropdownElements = useMemo(
    () => [
      { id: "shipment", action: () => navigate(localizedPath("/faq", i18n.language)), label: t("linkShipment") },
      { id: "pay", action: () => navigate(localizedPath("/faq", i18n.language)), label: t("linkPay") },
      { id: "about", action: () => navigate(localizedPath("/aboutus", i18n.language)), label: t("linkAboutUs") },
      { id: "contact", action: () => navigate(localizedPath("/contact", i18n.language)), label: t("linkContact") },
      { id: "faq", action: () => navigate(localizedPath("/faq", i18n.language)), label: t("linkFAQ") },
      { id: "tips", action: () => navigate(localizedPath("/tips", i18n.language)), label: t("linkTips") },
    ],
    [i18n.language, navigate, t]
  );

  return (
    <StyledFooter as="footer" role="contentinfo">
      {mediaIsPhone ? (
        <Dropdown
          button={<>📄</>}
          elements={dropdownElements}
          orientation="up"
        />
      ) : (
        <nav aria-label="Footer links">
          <Link label={t("linkShipment")} href="/faq" />
          <Link label={t("linkPay")} href="/faq" />
          <Link label={t("linkAboutUs")} href="/aboutus" />
          <Link label={t("linkContact")} href="/contact" />
          <Link label={t("linkFAQ")} href="/faq" />
          <Link label={t("linkTips")} href="/tips" />
        </nav>
      )}
    </StyledFooter>
  );
};

export default React.memo(FooterComponent);