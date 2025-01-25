import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;  // Content inside the Box
  className?: string;   // Optional custom styles
}

export default function Box({ children, className = "" }: BoxProps) {
  return (
    <div className={`w-11/12 max-w-[1200px] ${className}`}>
      {children}
    </div>
  );
}