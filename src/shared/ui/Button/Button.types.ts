import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = 'small' | 'standart' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    version?: ButtonVariant;
    children?: ReactNode;
}