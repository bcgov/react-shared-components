import React from "react";
import { Alert } from "../components/alert/Alert";

export function generateAlert(icon, type, styling, element) {
  return <Alert icon={icon} type={type} styling={styling} element={element} />;
}
