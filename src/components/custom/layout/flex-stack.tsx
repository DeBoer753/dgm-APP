import { ReactNode } from "react";

interface FlexStackProps {
  children: ReactNode;  // Content inside the Box
  className?: string;   // Optional custom styles
}

export default function FlexStack({ children, className = "" }: FlexStackProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {children}
    </div>
  );
}