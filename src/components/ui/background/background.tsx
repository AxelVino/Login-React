import * as React from "react";

import { cn } from "@/lib/utils";

function Background({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="background"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6",
        className
      )}
      {...props}
    />
  );
}

export { Background };
