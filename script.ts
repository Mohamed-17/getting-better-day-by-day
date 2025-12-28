import { prisma } from "./lib/prisma";
const books = [
  {
    title: "grokking algorithms",
    author: "Aditya",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/e3/4e/e7/e34ee7cf-9274-14cc-b022-eb5b69850827/9781638354567.jpg/313x0w.webp",
    status: "reading",
  },
  {
    title: "Clean code",
    author: "Robert C. Martin",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/3b/e5/c4/3be5c448-78d3-7bc4-e3d5-e471803eb028/9780135398548.jpg/313x0w.webp",
    status: "reading",
  },
  {
    title: "You Don't Know JS: Up & Going",
    author: "Kyle Simpson",
    image: "https://www.oreilly.com/covers/urn:orm:book:9781491924471/300w",
    status: "finished",
  },
];
async function main() {
  await prisma.book.deleteMany();
  await prisma.book.createMany({
    data: books,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//   const data = [
//   {
//     name: "Shopper",
//     createDate: "Sep 17, 2025",
//     image: "/shopper.png",
//     category: "ecommerce",
//     description:
//       "Full-stack E-commerce App with Next.js, Tailwind CSS, Clerk, Sanity, Stripe",
//     link: "shopper-store-beta.vercel.app",
//   },
//   {
//     name: "fincent online bookkeeping",
//     createDate: "Oct 6, 2025",
//     image: "/fincent.png",
//     category: "design",
//     description:
//       "practice my styling skills using Tailwind CSS, Shadcn UI, and Clerk.",
//     link: "fincent-online-bookkeeping.vercel.app",
//   },
//   {
//     name: "Instrument Studio",
//     createDate: "Oct 23, 2025",
//     image: "/inst.png",
//     category: "design",
//     description:
//       "Instrument Design Studio built with Next.js, Tailwind CSS and Motion.dev (Framer motion)",
//     link: "instrument-studio-theta.vercel.app",
//   },
//   {
//     name: "Blogs",
//     createDate: "Sep 5, 2025",
//     category: "portfolio",
//     image: "/blogs.png",
//     description:
//       "this website is a responsive website that i use in daily routine to add my blogs and check it every weekend i used in this website (Nextjs 15 / CSS Modules style / quill library ) Check it out",
//     link: "my-blogs1.vercel.app",
//   },
//   {
//     name: "Portfolio",
//     createDate: "Nov 30, 2025",
//     category: "portfolio",
//     image: "/portfolio.png",
//     description:
//       "My Portfolio website built with Next.js, Tailwind CSS and Motion.dev (Framer motion)",
//     link: "moelmshaly.vercel.app",
//   },
// ];
