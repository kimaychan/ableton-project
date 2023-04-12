<template>
  <div class="banner-container">
    <!-- <span class="title-container"> -->
    <h1 class="title">Ableton</h1>
    <!-- </span> -->
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  height: calc(100vh - 120px);
  background: url('/ableton-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin: 0 120px;
  position: relative;
}

.title {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: fit-content;
  width: fit-content;
  color: $neutral-variant;
  font-size: 6rem;
}

</style>
