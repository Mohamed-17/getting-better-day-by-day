"use client";
import { removeBook } from "@/actions/removeBook";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

function BookButton({ id }: { id: string }) {
  const [message, setMessage] = useState<string>("");
  const { data: session } = useSession();
  const isUser = session?.user?.email === "mohamedsneaky1@gmail.com";
  const handleRemove = async () => {
    if (isUser) {
      try {
        await removeBook(id);
        setMessage("Book removed successfully");
      } catch (error) {
        console.error("Failed to remove book:", error);
        setMessage("Sorry you're not an admin, only Mo can remove the book");
      }
    }
  };
  return (
    <>
      <button
        className={`text-xl  ${
          isUser
            ? "text-white cursor-pointer"
            : "text-white/60 cursor-not-allowed"
        }`}
        onClick={handleRemove}
        disabled={!isUser}
      >
        <Trash2 className="w-6 h-6" />
      </button>
      <p className="text-red-500">{message}</p>
    </>
  );
}

export default BookButton;
