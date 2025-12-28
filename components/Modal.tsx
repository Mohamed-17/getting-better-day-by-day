/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import * as motion from "motion/react-client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { addBook } from "@/actions/addBook";
import { useSession } from "next-auth/react";

function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data: session } = useSession();
  const isUser = session?.user?.email === "mohamedsneaky1@gmail.com";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: 0.3 }}
        className={`fixed rounded-lg top-1/2 left-1/2 transform text-black -translate-x-1/2 -translate-y-1/2 bg-white z-10 w-250 h-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex p-5 mt-10">
          <form action={addBook as any} className="flex flex-col gap-10">
            <Input type="text" placeholder="Title" name="title" />
            <Input type="text" placeholder="Author" name="author" />
            <Input type="file" placeholder="Image" name="image" />
            <Select name="status">
              <SelectTrigger className="w-[180px] bg-[#314158] text-black">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>

                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="finished">Completed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {isUser ? (
              <Button
                type="submit"
                className="text-white p-2 bg-[#314158] hover:bg-[#213148] cursor-pointer"
              >
                Add Book
              </Button>
            ) : (
              <p className="text-red-500">
                You are not an admin (only Mo can add a book ):
              </p>
            )}
          </form>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-9"
        onClick={() => setIsOpen(false)}
      ></motion.div>
    </>
  );
}

export default Modal;
