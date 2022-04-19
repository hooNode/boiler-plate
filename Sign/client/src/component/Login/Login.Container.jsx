import React, { useEffect } from "react";
import LoginPageUI from "./Login.Presenter";
import axios from "axios";

export default function LoginPage() {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);
  return <LoginPageUI />;
}
