
import { ReactNode } from "react";
import { ButtonMedium } from "../../styles/buttons"

interface IButtonProps {
    children: ReactNode;
    variant: string;
    className?: string;
}


const Button = ({ children, variant, className }: IButtonProps) => {
  
    return <ButtonMedium className={className} variant={variant}>{children}</ButtonMedium>  
}
export default Button 