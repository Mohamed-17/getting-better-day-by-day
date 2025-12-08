"use client";
import { useToggleMood } from "@/context/ToggleMood";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToggleCategory } from "@/context/ToggleCategory";
import { useRouter } from "next/navigation";

function SelectCategory() {
  const { toggleMood } = useToggleMood();
  const { category, setCategory } = useToggleCategory();
  const router = useRouter();
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("category", category || "all");
    router.push(url.toString());
  }, [category, router]);
  return (
    <Select value={category} onValueChange={setCategory} defaultValue={"all"}>
      <SelectTrigger className="w-[180px] bg-[#314158] text-white">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent
        className={
          toggleMood ? "bg-white text-black" : "bg-[#314158] text-white"
        }
      >
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="ecommerce">Ecommerce</SelectItem>
          <SelectItem value="portfolio">Portfolio</SelectItem>
          <SelectItem value="design">Design</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectCategory;
