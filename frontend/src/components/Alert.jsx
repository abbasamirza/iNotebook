import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../libs/shadcn/utils";
import useAlert from "../hooks/useAlert";
import { AlertCircle, CircleCheck } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm flex items-center [&>svg~*]:pl-3 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        error:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-red-100",
        success: "bg-green-100 border-green-200 text-green-900",
        warning: "bg-yellow-100 border-yellow-200 text-yellow-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {props.children}
  </h5>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertWrapper = () => {
  const { alertState } = useAlert();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (alertState.title || alertState.description) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [alertState]);

  if (!alertState.title && !alertState.description) {
    return null;
  }

  return (
    <div
      className={cn(
        "transform transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      )}
    >
      <Alert variant={alertState.variant}>
        {alertState.icon && alertState.icon}
        {alertState.title && <AlertTitle>{alertState.title}</AlertTitle>}
        {alertState.description && (
          <AlertDescription>{alertState.description}</AlertDescription>
        )}
      </Alert>
    </div>
  );
};

const errorAlert = ({
  title = "",
  description = "Something went wrong",
} = {}) => ({
  variant: "error",
  icon: <AlertCircle className="h-4 w-4" />,
  title,
  description,
});

const successAlert = ({ title = "", description = "" } = {}) => ({
  variant: "success",
  icon: <CircleCheck className="h-4 w-4" />,
  title,
  description,
});

export { Alert, AlertTitle, AlertDescription, errorAlert, successAlert };
export default AlertWrapper;
