import type { ReactNode } from "react";

function DetailsUl({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col gap-4 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
      {children}
    </ul>
  );
}

export { DetailsUl };
