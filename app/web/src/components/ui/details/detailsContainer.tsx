import type { ReactNode } from "react";

function DetailsContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col gap-4 rounded-md border border-border bg-card p-6 shadow-sm dark:border-card/20 dark:bg-card/20">
      {children}
    </div>
  );
}

export { DetailsContainer };
