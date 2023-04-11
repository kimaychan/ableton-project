<template>
  <section>
    <header>
      <div class="mainnav-wrapper">
        <MainNav />
      </div>
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
.mainnav-wrapper {
  position: absolute;
  width: 100%;
  top: 0;
}
.subnav-wrapper {
  width: 100%;
  position: sticky;
  top: 70px;
}
</style>
