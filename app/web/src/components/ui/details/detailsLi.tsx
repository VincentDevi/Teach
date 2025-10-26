import type { ReactNode } from "react";

function DetailsLi({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <li className="flex justify-between gap-4 items-center text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
      <span className="text-gray-700 dark:text-gray-200 font-medium">
        {label}:
      </span>
      {children}
    </li>
  );
}

export { DetailsLi };
