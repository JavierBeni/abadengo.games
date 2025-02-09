import { useState, useEffect } from "react";
import useWindowDimensions from './useWindowDimensions';

export default function useMediaDevices() {
  const [typeOfDevice, setTypeOfDevice] = useState({
    mediaIsPhone: false,
    mediaIsTablet: false,
    mediaIsSmallDesktop: false,
    mediaIsDesktop: false
  });
  const { width } = useWindowDimensions();

  useEffect(() => {
    switch (true) {
      case width < 768:
        setTypeOfDevice({
          mediaIsPhone: true,
          mediaIsTablet: false,
          mediaIsSmallDesktop: false,
          mediaIsDesktop: false
        });
        break;
      case width < 1020:
        setTypeOfDevice({
          mediaIsPhone: false,
          mediaIsTablet: true,
          mediaIsSmallDesktop: false,
          mediaIsDesktop: false
        });
        break;
      case width < 1280:
        setTypeOfDevice({
          mediaIsPhone: false,
          mediaIsTablet: false,
          mediaIsSmallDesktop: true,
          mediaIsDesktop: false
        });
        break;
      default:
        setTypeOfDevice({
          mediaIsPhone: false,
          mediaIsTablet: false,
          mediaIsSmallDesktop: false,
          mediaIsDesktop: true
        });
        break;
    }
  }, [width]);

  return typeOfDevice;
}
