"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export const removeBook = async (id: string) => {
  try {
    const session = await auth();

    if (
      !session?.user?.email ||
      session.user.email !== "mohamedsneaky1@gmail.com"
    ) {
      throw new Error(
        "Unauthorized: You must be logged in as an authorized user to remove books"
      );
    }

    const result = await prisma.book.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
