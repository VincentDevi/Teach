import type { Meta, StoryObj } from "@storybook/react-vite";
import CarDetails from "../car/CarDetails";

const meta = {
  title: "Car/CarDetails",
  component: CarDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CarDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "BMW-X5",
    model: "Series 2",
    brand: "BMW",
    year: 2022,
    oilType: "Diesel",
    oilQuantity: 100,
    cc: 100,
  },
};
