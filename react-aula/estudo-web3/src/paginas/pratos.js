import { CImage, CLink } from "@coreui/react";
import "./pagis.css";
export default function Pratos() {
  return (
    <CLink href="/" className="fullBackground">
      <CImage fluid align="center" className="max" src="pratosda.png" alt="logo"/>
    </CLink>
  );
}
