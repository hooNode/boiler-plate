import React, { ComponentType, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";

export const withAuth =
  (Component: ComponentType, option: boolean, adminRoute = null) =>
  <P extends {}>(props: P) => {
    // option : true => 로그인한 유저만, false => 로그인한 유저는 불가능
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      if (!option) {
        // alert("이미 로그인 하셨습니다.");
        navigate(-1);
      }

      // @ts-ignore
      dispatch(auth()).then((res) => {
        console.log(res);
      });
    }, []);

    return <Component {...props} />;
  };
