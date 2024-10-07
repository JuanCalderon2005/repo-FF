"use client"
import { useSession } from "next-auth/react";
const HomePage = () => {

  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div>
      <h1></h1>
    </div>
  );
};
export default HomePage;