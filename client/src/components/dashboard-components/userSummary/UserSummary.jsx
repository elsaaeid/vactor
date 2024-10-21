import React, { useEffect } from "react";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_SUSPENDED_USER,
  CALC_VERIFIED_USER,
} from "../../../redux/features/auth/authSlice";
import InfoBox from "../infoBox/InfoBox";
import "./UsersSummary.scss";
import Header from "../Header";
import { useTranslation } from "react-i18next";


// Icons
const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const UserSummary = () => {
  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();
  // Translation
  const { t } = useTranslation();
  // To Access Auth State
  const { users, verifiedUsers, suspendedUsers } = useSelector(
    (state) => state.auth
  );
  const unverifiedUsers = users.length - verifiedUsers;

  // CALCULATING VERIFIED_USER
  useEffect(() => {
    dispatch(CALC_VERIFIED_USER());
    dispatch(CALC_SUSPENDED_USER());
  }, [dispatch, users]);

  return (
    <div className="user-summary w-full flex flex-col justify-center items-center">
      <Header title={t("dashboard.userStats")} />
      <div className="info-summary w-full flex flex-col justify-center items-center">
        <div className="info-users-summary w-full flex flex-row justify-evenly items-center">
        <InfoBox
          icon={icon1}
          title={t("dashboard.totalUsers")}
          count={users.length}
          bgColor="card1"
        />
        <InfoBox
          icon={icon2}
          title={t("dashboard.verifiedUsers")}
          count={verifiedUsers}
          bgColor="card2"
        />
        </div>
        <div className="info-users-summary w-full flex flex-row justify-evenly items-center">
        <InfoBox
          icon={icon3}
          title={t("dashboard.unverifiedUsers")}
          count={unverifiedUsers}
          bgColor="card3"
        />
        <InfoBox
          icon={icon4}
          title={t("dashboard.suspendedUsers")}
          count={suspendedUsers}
          bgColor="card4"
        />
        </div>
        </div>
    </div>
  );
};

export default UserSummary;