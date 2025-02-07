import type { Meta, StoryFn } from "@storybook/vue3";
import ProductCard from "./ProductCard.vue";
import type { Product } from "@/data/Product";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  argTypes: {
    class: { control: "text" },
  },
} satisfies Meta<typeof ProductCard>;

const Template: StoryFn<typeof ProductCard> = (args) => ({
  components: { ProductCard },
  setup() {
    return { args };
  },
  template: `<ProductCard v-bind="args" />`,
});

export const VCollectionX = Template.bind({});
VCollectionX.args = {
  product: {
    name: "V Collection X",
    description: "Reference instruments for music makers",
    price: 599,
    productCode: "v-collection",
    range: "lab",
    categories: ["software-instruments"],
    tag: "featured",
    size: "big",
  } as Product,
};

export const MiniFuse4 = Template.bind({});
MiniFuse4.args = {
  product: {
    name: "MiniFuse 4",
    description: "Versatile desktop audio interface.",
    price: 219,
    productCode: "minifuse4",
    range: "fuse",
    categories: ["audio"],
    tag: undefined,
    size: "small",
  } as Product,
};

export const MicroFreak = Template.bind({});
MicroFreak.args = {
  product: {
    name: "MicroFreak",
    description: "Experimental Hybrid Synth",
    price: 349,
    productCode: "microfreak",
    range: "freak",
    categories: ["hardware-synths"],
    tag: undefined,
    size: "small",
  } as Product,
};

export const MicroBrute = Template.bind({});
MicroBrute.args = {
  product: {
    name: "MicroBrute",
    description: "Looks Tiny, Sounds Massive",
    price: undefined,
    productCode: "microbrute",
    range: "brute",
    categories: ["hardware-synths"],
    tag: undefined,
    size: "small",
  } as Product,
};