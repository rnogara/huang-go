import { sharp } from "~/app/assets/font";
import { cn } from "~/lib/utils";

type Props = {
  className?: string,
  children?: React.ReactNode
}

function Heading({ className, children }: Props) {
  return (
    <h1 className={cn(
      `${sharp.className} text-[5rem]`,
      className
    )}>
      {children}
    </h1>
  );
}

export default Heading;