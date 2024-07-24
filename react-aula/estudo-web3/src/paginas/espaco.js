import "@coreui/coreui/dist/css/coreui.min.css";
import { CImage, CLink } from "@coreui/react";
import "./pagis.css";

export default function Espaco() {
  return (
    <CLink href="/" className="fullBackground">
      <CImage fluid align="center" className="max" src="oespaco.png" alt="logo"/>
    </CLink>
  );
}
