import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Navigation utilities
export function isActivePage(currentPath: string, targetUrl: string): boolean {
  if (targetUrl === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(targetUrl);
}
