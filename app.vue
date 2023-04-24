<template>
  <section>
    <header>
      <MainNav />
      <div class="subnav-wrapper">
        <SubNav />
      </div>
      <TheBanner class="banner"/>
    </header>
  </section>
</template>

<style lang="scss" scoped>
header {
  position: relative;
}

.sub-nav {
  width: 100%;
  z-index: 1;
}

.main-nav {
  width: 100%;
  z-index: 9999;
}

.sub-nav {
  position: sticky;
  top: 0;
}


@media screen and (min-width: 1000px) {
}
</style>
