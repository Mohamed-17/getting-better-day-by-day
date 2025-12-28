import React from "react";
import { getBooks } from "@/actions/getBooks";
import Image from "next/image";
import BookButton from "./BookButton";
import BookModel from "./BookModel";

async function RecentBooks() {
  const result = await getBooks();

  return (
    <div className="mt-20 px-10">
      <div className="flex items-center w-[80%] justify-between">
        <h1 className="text-xl font-bold ">My Reading List</h1>
        <BookModel />
      </div>
      <div className="grid gap-4 mt-5">
        {result.length > 0 ? (
          result.map((book) => (
            <div className="flex items-center gap-10" key={book.id}>
              <div className="w-[80%] border p-4 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={100}
                    height={100}
                    className="w-16 h-20 object-cover "
                  />
                  <div>
                    <h2 className="font-semibold">{book.title}</h2>
                    <p className="text-sm">{book.author}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`w-fit text-center rounded-xl text-sm    px-4 py-0.5 ${
                      book.status === "reading" ? "bg-green-500" : "bg-black"
                    }
                `}
                  >
                    <span className="text-white">{book.status}</span>
                  </p>
                </div>
              </div>
              <BookButton id={book.id} />
            </div>
          ))
        ) : (
          <div className="text-center">No books found</div>
        )}
      </div>
    </div>
  );
}

export default RecentBooks;
