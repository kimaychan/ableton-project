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
      <div class="products">
        <div class="bg-lemonade"></div>
        <img src="./photo-1.jpg" class="product primary" alt="A Product Photo" />
        <img src="./photo-2.jpg" class="product secondary" alt="A Product Photo" />
      </div>
      <main-text-content
        class="page-text"
        heading="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
        message="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."></main-text-content>
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

.products {
  width: 100%;
  height: 839px;
  position: relative;
  padding-bottom: 8.33333vw;
  margin-bottom: 8.33333vw;
  .bg-lemonade {
    position: absolute;
    z-index: 0;
    right: 0;
    height: 58.33333vw;
    width: 58.33333vw;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .product {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    &.primary {
      left: 8.33333vw;
      width: 41.6vw;
      height: 41.6vw;
      z-index: 2;
    }
    &.secondary {
      right: 8.33333vw;
      width: 33.33333vw;
      height: 25vw;
    }
  }
}

.bg-lemonade {
  background-color: $lemonade;
}
</style>
