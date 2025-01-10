import { ReactNode } from "react";

interface FlexColProps {
  children: ReactNode;  // Content inside the Box
  className?: string;   // Optional custom styles
}

export default function FlexCol({ children, className = "" }: FlexColProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
}