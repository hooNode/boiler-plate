import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarUI from "./Navbar.Presenter";
import styled from "styled-components";

const LoadingNavBar = styled.div`
  height: 33px;
`;

export default function Nabar() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getLoginUser = async () => {
    const result = await axios.get("/api/users/auth").then((res) => res.data);
    setIsLogin(result.isAuth);
  };

  const onClickLogOut = async () => {
    await axios.get("/api/users/logout").then((res) => {
      if (res.status == 200) {
        alert(res.data.message);
        navigate("/login");
      } else {
        alert("로그아웃이 되지 않았습니다.");
      }
    });
  };

  useEffect(() => {
    getLoginUser();
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [navigate]);

  if (isLoading) return <LoadingNavBar />;

  return (
    <NavbarUI
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
      navigate={navigate}
    />
  );
}
