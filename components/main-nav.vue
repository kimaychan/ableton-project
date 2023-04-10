<template>
  <nav>
    <div class="left-area">
      <a href="javascript:;">[LOGO]</a>
      <ul>
        <li>
          <nuxt-link to="#">Live</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Push</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Note</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Link</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Shop</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Packs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Help</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">More +</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right-area">
      <ul>
        <li>
          <nuxt-link to="#">Try Live for Free</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Log in or register</nuxt-link>
        </li>
      </ul>      
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  border-bottom: 2px solid #eee;
  ul {
    display: flex;
    li {
      &:not(:first-child) {
        margin: 0 15px;
      }
    }
  }
}
.left-area {
  display: flex;
}

a {
  font-size: 1.25rem;
  line-height: 30px;
}
</style>