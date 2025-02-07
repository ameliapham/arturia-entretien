import type { Meta, StoryFn } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    range: {
      control: { type: "select" },
      options: ["lab", "brute", "freak", "step", "fuse"],
    },
    class: { control: "text" },
    default: { control: "text", description: "Button label (slot content)" },
  },
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args">{{ args.default }}</Button>`,
});

export const Lab = Template.bind({});
Lab.args = {
  range: "lab",
  class: "",
  default: "Lab Button",
};

export const Brute = Template.bind({});
Brute.args = {
  range: "brute",
  class: "",
  default: "Brute Button",
};

export const Freak = Template.bind({});
Freak.args = {
  range: "freak",
  class: "",
  default: "Freak Button",
};

export const Step = Template.bind({});
Step.args = {
  range: "step",
  class: "",
  default: "Step Button",
};

export const Fuse = Template.bind({});
Fuse.args = {
  range: "fuse",
  class: "",
  default: "Fuse Button",
};