"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addBook = async (formData: FormData) => {
  const title = formData.get("title");
  const author = formData.get("author");
  const imageFile = formData.get("image") as File;
  const status = formData.get("status");

  let imageBase64 = "";
  if (imageFile && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    imageBase64 = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  const book = await prisma.book.create({
    data: {
      title: title as string,
      author: author as string,
      image: imageBase64,
      status: status as string,
    },
  });
  revalidatePath("/");
  return book;
};
