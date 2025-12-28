"use server";

import { prisma } from "@/lib/prisma";

export const getBooks = async () => {
  const books = await prisma.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return books;
};
