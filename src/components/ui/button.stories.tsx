import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";
import { Mail } from "lucide-react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "secondary", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Hover: Story = {
  args: {
    variant: "default",
    children: "Hover me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    disabled: true,
    children: "Disabled",
  },
};

export const Loading: Story = {
  args: {
    variant: "default",
    loading: true,
    children: "Loading",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <Mail /> Enviar e-mail
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon">
        <Mail />
      </Button>
    </div>
  ),
};

export const AllStates: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Default</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} loading>
        Loading
      </Button>
    </div>
  ),
};
