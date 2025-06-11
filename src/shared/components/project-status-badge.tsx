"use client";

import { cn } from "@/lib/utils";

interface ProjectStatusBadgeProps {
  status: string;
}

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "in progress":
      return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
    case "completed":
      return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800";
    default:
      return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700";
  }
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return (
    <span className={cn("px-2 py-1 text-sm font-medium rounded border", getStatusClass(status))}>
      {status}
    </span>
  );
}
