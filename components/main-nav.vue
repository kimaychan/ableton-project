<script lang="ts" setup>

const isNavExpanded = ref(false)

</script>

<template>
  <nav :class="{ 'expanded': isNavExpanded }">
    <div class="wrapper">
      <span href="javascript:;" class="logo-container">
        <main-nav-logo :color="isNavExpanded ? 'white' : 'black'" />
      </span>
      <button class="menu" @click="isNavExpanded = !isNavExpanded">Menu</button>
      <div class="links">
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
        <ul class="secondary-nav-links">
          <li>
            <nuxt-link to="#" class="active">Try Live for Free</nuxt-link>
          </li>
          <li class="login-link">
            <nuxt-link to="#">Log in or register</nuxt-link>
          </li>
        </ul>
      </div>      
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  border-bottom: 2px solid #eee;
  transition: height .12s ease-in;
}

@media screen and (max-width: 999px) {
  .links, .secondary-nav-links {
    ul {
      li {
        padding: 1.25rem;
      }
    }
  }

  a, button {
    font-size: 18px;
    line-height: 1;
    display: block;
    &.neutral {
      color: $neutral;
    }
    &.active {
      color: blue;
    }
  }
  
  button.menu {
    padding: 0;
    border: 0;
    background: none;
    height: 27px;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
  }
  
  nav {
    padding: 1.25rem 0;
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
    margin: 0 1.25rem;
  }
  
  .logo-container, button.menu {
    display: inline-block;
    vertical-align: middle;
  }
  
  nav {
    &.expanded {
      padding-bottom: 0;
      background-color: blue;
      button {
        color: white;
      }
      
      .links {
        height: inherit;
      }
      .links, .secondary-nav-links {
        background-color: blue;
        ul {
          margin-top: 1rem;
          li {
            a {
              color: white;  
            }
          }
        }
      }
    }
    &:not(.expanded) {
      .links {
        height: 0;
        overflow: hidden;
      }
    }
  }
  
  ul, li {
    height: inherit;
  }
  
}

@media screen and (min-width: 1000px) {
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 2.5rem 1.25rem 0;
    background: white;
    ul {
      li {
        display: inline-block;
        vertical-align: middle;
        padding: 0px;
        &:not(:first-child) {
          margin: 0 15px;
        }
      }
    }
  }
  .wrapper {
    display: flex;
    width: 100%;
  }
  button.menu {
    display: none;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    background-color: white;
  }
  .logo-container {
    margin: 0 1.25rem 0 2.5rem;
  }
}
</style>