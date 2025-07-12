import { cn } from "@/lib/utils";

interface CustomIconProps {
  className?: string;
}

export function CustomIcon({ className }: CustomIconProps) {
  return (
    <img
      src="https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1"
      alt="Custom Icon"
      className={cn("size-full object-contain", className)}
    />
  );
} 