import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaDevices } from "../../hooks";
import Dropdown from "../Dropdown";
import Link from "../Link";
import { StyledFooter } from "./styles";
import { useTranslation } from "react-i18next";
import React from "react";

const FooterComponent: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dropdownElements = useMemo(
    () => [
      { id: "shipment", action: () => navigate("/faq"), label: t("linkShipment") },
      { id: "pay", action: () => navigate("/faq"), label: t("linkPay") },
      { id: "about", action: () => navigate("/aboutus"), label: t("linkAboutUs") },
      { id: "contact", action: () => navigate("/contact"), label: t("linkContact") },
      { id: "faq", action: () => navigate("/faq"), label: t("linkFAQ") },
      { id: "tips", action: () => navigate("/tips"), label: t("linkTips") },
    ],
    [navigate, t]
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