import type { ReactNode } from "react";

function DetailsTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg font-semibold leading-none tracking-tight">
      {children}
    </h2>
  );
}

export { DetailsTitle };
