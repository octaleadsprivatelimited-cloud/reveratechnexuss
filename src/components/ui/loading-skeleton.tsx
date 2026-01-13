import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "avatar";
}

export const LoadingSkeleton = ({ 
  className, 
  variant = "text" 
}: LoadingSkeletonProps) => {
  const baseClasses = "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] rounded-md";
  
  const variants = {
    text: "h-4 w-full",
    card: "h-48 w-full rounded-xl",
    image: "h-64 w-full rounded-xl",
    avatar: "h-12 w-12 rounded-full",
  };

  return (
    <motion.div
      className={cn(baseClasses, variants[variant], className)}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn("fixed inset-0 z-50 flex items-center justify-center bg-background", className)}>
      <motion.div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-primary"
            animate={{
              y: [-8, 0, -8],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner = ({ size = "md", className }: SpinnerProps) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <motion.div
      className={cn(
        "rounded-full border-muted border-t-primary",
        sizes[size],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

interface PulseLoaderProps {
  className?: string;
}

export const PulseLoader = ({ className }: PulseLoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className="h-16 w-16 rounded-full bg-primary/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-primary/40"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};
