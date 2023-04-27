<template>
  <section class="wrapper">
    <header>
      <MainNav />
      <div class="subnav-wrapper">
        <SubNav />
      </div>
      <TheBanner class="banner"/>
    </header>
    <section class="main-content">
      <main-text-content class="page-text" message="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.">
        <template #heading>
          We make <span class="active">Live</span>, <span class="active">Push</span> and <span class="active">Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
        </template>
      </main-text-content>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.sub-nav {
  width: 100%;
  z-index: 1;
}

header {
  position: relative;
  margin-bottom: 8.33333vw;
}

.subnav-wrapper {
  position: sticky;
  top: 0;
  z-index: 4;
}

.main-nav {
  width: 100%;
}

span.active {
  color: blue;
}

.main-content {
  // display: flex;
  // justify-content: center;
  .page-text {
    margin: {
      left: auto;
      right: auto;
      bottom: 8.33333vw;
    }
  }
}
</style>
