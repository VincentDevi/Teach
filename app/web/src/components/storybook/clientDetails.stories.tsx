import type { Meta, StoryObj } from "@storybook/react-vite";
import ClientDetails from "../client/ClientDetails";

const meta = {
  title: "Client/ClientDetails",
  component: ClientDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClientDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "123456789",
    name: "Vincent Dev",
    email: "vincent@dev.com",
    phone: "123456789",
    address: {
      street: "Rue de la Paix",
      number: "177",
      city: "Charleroi",
      country: "Belgium",
      postalCode: "6061",
    },
  },
};

export const WithoutAddress: Story = {
  args: {
    id: "123456789",
    name: "Vincent Dev",
    email: "vincent@dev.com",
    phone: "123456789",
    address: undefined,
  },
};
