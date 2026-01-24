import clsx from 'clsx'
import styles from './Button.module.css'
import type { ButtonProps } from "./Button.types"

export const Button = ({
  version = "standart",
  className = "",
  children,
  ...props
}: ButtonProps) => {
    const classes = clsx(styles.button, styles[version], className);
    return (
        <button className={classes} {...props} >{children}</button>
    )
}
