import React, { useEffect } from "react";
import LandingPageUI from "./Landing.Presenter";
import axios from "axios";

export default function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);
  return <LandingPageUI />;
}
