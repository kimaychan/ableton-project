<template>
  <div class="sub-nav">
    <nav>
      <ul>
        <li>
          <nuxt-link to="#" class="active">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Jobs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Apprenticeships</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
a {
  font-size: 14px;
  font-weight: 600;
  &.active {
    color: $neutral;
  }
}

ul {
  display: flex;
  align-items: center;
  li:not(:last-child) {
    margin-right: 25px;
  }
}

.sub-nav {
  nav {
    padding: 1rem 1.25rem;
    position: relative;
    z-index: 0;
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      background-color: white;
      opacity: .8;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
}

@media screen and (min-width: 1000px) {

  .sub-nav {
    nav {
      padding: 20px 40px;
    }
  }
}
</style>