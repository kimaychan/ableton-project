<script lang="ts" setup>
interface MainTextContentProps {
  heading?: string;
  message?: string;
}

const props = defineProps<MainTextContentProps>()
</script>

<template>
  <div class="main-text">
    <h1 v-if="!$slots.heading">{{ props.heading }}</h1>
    <h1 v-else>
      <slot name="heading" />
    </h1>
    <p v-if="message">{{ message }}</p>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: .7em;
  font-size: 1.875rem;
  line-height: 1.4;
}

.main-text {
  width: 720px;
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>