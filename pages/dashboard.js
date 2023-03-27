import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { UserAuth } from "../context/AuthContext";

import DashboardUI from "../components/Dashboard";

import Tab from "./../components/dashboard/Tab";

export default function Dashboard() {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user, isLoggedIn } = UserAuth();

  return (
    <>
      <DashboardUI />
    </>
  );
}
