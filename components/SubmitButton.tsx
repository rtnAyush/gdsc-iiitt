"use client";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-hook-form";

interface SubmitButtonProps {
    text?: string;
    disable?: boolean;
    className?: string;
    form: any; // Receive isSubmitting as a prop
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, className, form }) => {
    const { isSubmitting } = useFormState({ control: form.control });

    return (
        <Button disabled={isSubmitting || !form.formState.isDirty} className={className}>
            {isSubmitting ? (text ? "Please wait..." : "Submitting...") : text ?? "Submit"}
        </Button>
    );
};

export default SubmitButton;
