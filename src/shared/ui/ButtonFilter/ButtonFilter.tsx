import { Button } from "../Button/Button";


interface Option<T> {
  value: T;
  label: string;
}

interface Props<T> {
  options: Option<T>[];
  selectedValues: T[];
  onChange: (values: T[]) => void;

  isOptionActive?: (option: Option<T>, selected: T[]) => boolean;
  getNextValues?: (option: Option<T>, selected: T[]) => T[];

  className?: string;
  buttonClassName?: string;
}

export function ButtonFilter<T>({
  options,
  selectedValues,
  onChange,
  isOptionActive,
  getNextValues,
  className,
  buttonClassName,
}: Props<T>) {
  const handleClick = (option: Option<T>) => {
    let next: T[];

    if (getNextValues) {
      next = getNextValues(option, selectedValues);
    } else {
      const exists = selectedValues.includes(option.value);
      next = exists
        ? selectedValues.filter((v) => v !== option.value)
        : [...selectedValues, option.value];
    }

    onChange(next);
  };
  

  return (
    <div className={className}>
      {options.map((option) => {
        const isActive = isOptionActive
          ? isOptionActive(option, selectedValues)
          : selectedValues.includes(option.value);

        return (
          <Button
            key={String(option.label)}
            version="small"
            className={`${buttonClassName} ${isActive ? "active" : ""}`}
            onClick={() => handleClick(option)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
