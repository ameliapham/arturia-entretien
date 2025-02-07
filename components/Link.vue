<template>
    <a :href="href" class="link">
        <slot ></slot>
    </a>
</template>

<script setup lang="ts">
defineProps<{
    href: string
}>()
</script>

<style scoped lang="scss">
.link {
    color: blue;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>