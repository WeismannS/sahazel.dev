import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date : Date) : string {
   const now = new Date();
   const diff = now.getTime() - date.getTime();
   const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

   if (diffInDays < 30) {
     return diffInDays === 0 ? "Today" : diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
   } else if (diffInDays < 365) {
     const months = Math.floor(diffInDays / 30);
     return months === 1 ? "1 month ago" : `${months} months ago`;
   } else {
     const years = Math.floor(diffInDays / 365);
     return years === 1 ? "1 year ago" : `${years} years ago`;
   }
}

