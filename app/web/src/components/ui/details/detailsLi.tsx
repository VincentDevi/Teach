import type { ReactNode } from "react";

function DetailsLi({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
      {label}
      {children}
    </li>
  );
}

export { DetailsLi };
