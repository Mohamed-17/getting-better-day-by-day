import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirect: false });
        redirect("/");
      }}
    >
      <Button type="submit" className="cursor-pointer" variant={"destructive"}>
        Logout
      </Button>
    </form>
  );
}

export default LogoutButton;
