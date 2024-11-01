import { sharp } from "~/app/assets/font";
import { cn } from "~/lib/utils"

function Heading({ className, title }: { className?: string, title: string }) {
  return (
    <h1 className={cn(
      `${sharp.className} text-3xl text-white`,
      className
    )}>
      {title}
    </h1>
  );
}

export default Heading;