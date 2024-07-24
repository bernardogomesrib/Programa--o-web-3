import { CImage, CLink } from "@coreui/react";
import "./pagis.css";
export default function Sobre() {
  return (
    <CLink href="/" className="fullBackground">
      <CImage fluid align="center" className="max" src="SOBRE.png" alt="logo" />
    </CLink>
  );
}
