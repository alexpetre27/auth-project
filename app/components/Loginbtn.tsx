"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Loginbtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Salut, {session.user?.name}!</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Gmail</button>
    </div>
  );
}
