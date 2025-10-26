import type * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Extend Input props with custom args for the decorator
type InputStoryArgs = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
};

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
  decorators: [
    (Story, context) => {
      const { label, required, id } = context.args as InputStoryArgs;
      return (
        <div className="w-80">
          <div className="space-y-2">
            {label && (
              <Label htmlFor={id}>
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </Label>
            )}
            <Story />
          </div>
        </div>
      );
    },
  ],
} satisfies Meta<InputStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Text: Story = {
  args: {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Required: Story = {
  args: {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    id: "lastName",
    label: "Last Name",
    type: "text",
    value: "Doe",
    placeholder: "Enter last name",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabledInput",
    label: "Disabled Field",
    type: "text",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    id: "errorInput",
    label: "Email with Error",
    type: "email",
    placeholder: "invalid-email",
    "aria-invalid": true,
  },
};

export const NumberInput: Story = {
  args: {
    id: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    min: 0,
    max: 120,
  },
};

export const Search: Story = {
  args: {
    id: "search",
    label: "Search",
    type: "search",
    placeholder: "Search...",
  },
};

export const Tel: Story = {
  args: {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
};
