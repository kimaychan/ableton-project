<template>
  <section>
    <header>
      <MainNav />
      <div class="subnav-wrapper">
        <SubNav />
      </div>
      <TheBanner />
    </header>
  </section>
</template>

<style lang="scss" scoped>
header {
  position: relative;
}
.subnav-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
}
</style>
