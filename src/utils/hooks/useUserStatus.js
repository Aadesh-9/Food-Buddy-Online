import { useEffect, useState } from "react";

const useUserStatus = () => {
  const [userStatus, setUserStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setUserStatus(true);
    });
    window.addEventListener("offline", () => {
      setUserStatus(false);
    });
  }, []);
  return userStatus;
};

export default useUserStatus;
