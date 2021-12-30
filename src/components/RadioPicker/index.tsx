import React from "react";
import { RadioGroup } from "@headlessui/react";

type RadioOptionProps =
  | string
  | ((bag: { active: boolean; checked: boolean; disabled: boolean }) => string)
  | undefined;

type RadioPickerOption<T> = T;

type RenderValueMethod<T> = (
  option: RadioPickerOption<T>,
  checked: boolean,
  key: number
) => React.ReactNode;

type OnSelectValueMethod<T> = (option: RadioPickerOption<T>) => void;

interface RadioPickerProps<T> {
  options: RadioPickerOption<T>[];
  disabled?: boolean;
  handlers: {
    selectedValue: RadioPickerOption<T>;
    onSelectedValue: OnSelectValueMethod<T>;
  };
  renderValue: RenderValueMethod<T>;
  className?: RadioOptionProps;
}

export const RadioPicker = <T extends {}>({
  options,
  disabled,
  handlers,
  renderValue,
  className,
}: RadioPickerProps<T>) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup
          disabled={disabled}
          value={handlers.selectedValue}
          onChange={handlers.onSelectedValue}
        >
          <div className="space-y-2">
            {options.map((option, key) => (
              <RadioGroup.Option
                key={key}
                value={option}
                className={
                  className ??
                  (({ active, checked, disabled: optDisabled }) => `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
              ${
                checked
                  ? `${
                      optDisabled ? "bg-gray-400" : "bg-sky-900 bg-opacity-75"
                    } text-white`
                  : "bg-white"
              }
              relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`)
                }
              >
                {({ checked }) => renderValue(option, checked, key)}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
