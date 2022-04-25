import React, { ComponentType, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";

export const withAuth =
  (Component: ComponentType, option: boolean | null, adminRoute = null) =>
  <P extends {}>(props: P) => {
    // option : true => 로그인한 유저만, false => 로그인한 유저는 불가능
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      // @ts-ignore
      dispatch(auth()).then((res) => {
        console.log(res);
        if (!res.payload.isAuth) {
          if (option) {
            alert("로그인을 헤주세요.");
            navigate("/login");
          }
        } else {
          if (option === false) {
            alert("이미 로그인 하셨습니다.");
            navigate(-1);
          }
        }
      });
    }, []);

    return <Component {...props} />;
  };
