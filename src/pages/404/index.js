import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(function () {
    router.push("/1");
  });
  return null;
};

export default NotFound;
