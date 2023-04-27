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
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: .7em;
}

.main-text {
  width: 66.66667vw;
}
</style>