<template>
  <nav>
    <div class="left-area">
      <span href="javascript:;" class="logo-container">
        <img src="/logo.svg" class="logo" alt="logo">
      </span>
      <ul class="main-nav-links">
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
          <nuxt-link to="#" class="neutral">More +</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right-area">
      <ul class="secondary-nav-links">
        <li>
          <nuxt-link to="#" class="active">Try Live for Free</nuxt-link>
        </li>
        <li class="login-link">
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
  background: white;
  ul {
    display: flex;
    align-items: center;
    li:not(:first-child) {
      margin: 0 15px;
    }
  }
}
.left-area {
  display: flex;
}

a {
  font-size: 18px;
  line-height: 1.5;
  &.neutral {
    color: $neutral;
  }
  &.active {
    color: blue;
  }
}

.main-nav-links {
  a {
    font-weight: 500;
  }
}

.secondary-nav-links {
  a {
    font-weight: 400;
  }
}

.login-link {
  a {
    font-size: 14px;
  }
}

.logo {
  height: 28px;
}

.logo-container {
  display: block;
  height: 28px;
  margin-right: 35px;
}
</style>