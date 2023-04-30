<script lang="ts" setup>
const isNavExpanded = ref(false)
</script>

<template>
  <nav :class="['main-nav', { 'expanded': isNavExpanded }]">
    <div class="menu-controller">
      <span href="javascript:;" class="logo-container">
        <main-nav-logo class="logo-svg" />
      </span>
      <button class="menu" @click="isNavExpanded = !isNavExpanded">Menu</button>
    </div>
    <div class="wrapper">
      <div class="links">
        <ul class="primary-links">
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
          <li class="expand-more">
            <nuxt-link to="#" class="neutral" @click="isNavExpanded = !isNavExpanded">
              More <span v-if="isNavExpanded">-</span><span v-else>+</span>
            </nuxt-link>
          </li>
        </ul>
        <ul>
          <li>
            <nuxt-link to="#" class="active">Try Live for Free</nuxt-link>
          </li>
          <li class="login-link">
            <nuxt-link to="#">Log in or register</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="more-info">
        <h3>More on Ableton.com:</h3>
        <ul class="links">
          <li><nuxt-link to="#">Blog</nuxt-link></li>
          <li><nuxt-link to="#">Ableton for the Classroom</nuxt-link></li>
          <li><nuxt-link to="#">Ableton for Colleges and Universities</nuxt-link></li>
          <li><nuxt-link to="#">Certified Training</nuxt-link></li>
          <li><nuxt-link to="#" class="neutral">About Ableton</nuxt-link></li>
          <li><nuxt-link to="#">Jobs</nuxt-link></li>
          <li><nuxt-link to="#">Apprenticeships</nuxt-link></li>
        </ul>
        <h3>More from Ableton.com:</h3>
        <ul class="main-nav-group-links">
          <li>
            <nuxt-link to="#">
              <div>
                <h4>Loop</h4>
                <p>Watch Talks, Performances, and
                  Features from Ableton's Summit for
                  Music Makers
                </p>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <div>
                <h4>Learning Music</h4>
                <p>Learn the fundamentals of music making right in your browser
                </p>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <div>
                <h4>Learning Synths</h4>
                <p>Get started with synthesis using a web-
                  based synth and accompanying 
                  lessons.</p>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <div>
                <h4>Making Music</h4>
                <p>Some tips from 74 Creative Strategies
                  for Electronic Producers.
                </p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>     
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  height: 65px;
  border-bottom: 2px solid #eee;
}

a, button {
  font-size: 1rem;
  line-height: 1.5;
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

a {
  line-height: 1.5;
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

.logo-container {
  display: block;
  height: 28px;
  margin-right: 1.25rem;
}

.logo-container, button.menu {
  display: inline-block;
  vertical-align: middle;
}

.wrapper {
  overflow: hidden;
  transition: transform .25s ease-in-out;
  width: 100%;
  background-color: blue;
  height: fit-content;
}

.menu-controller {
  position: absolute;
  top: 1.25rem;
  left: 20px;
  z-index: 9999;
  button {
    transition: color .1s ease;
  }
}

@media screen and (max-width: 999px) {
  .more-info {
    padding: {
      left: 1.25rem;
      top: .625rem;
    }
    a:not(.neutral), h3 {
      color: white;
    }

    h3 {
      margin-bottom: 20px;
      &:not(:first-of-type) {
        margin-top: 20px;
      }
    }
    .links {
      > * {
        margin-bottom: 1em;
      }
      a {
        font-size: 12px;
      }
    }
  }

  .expand-more {
    display: none;
  }

  .main-nav-group-links {
    display: flex;
    a {
      font-size: .875rem;
    }
  }
  .links {
    ul {
      margin-top: 1rem;
      li {
        padding: 1.25rem;
        a {
          color: white;  
        }
      }
    }
  }
  .links {
    width: 100%;
  }
  .wrapper {
    position: absolute;
    top: 0;
    z-index: 999;
  }
  nav {
    &.expanded {
      padding-bottom: 0;
      button {
        color: white;
      }
      .logo-svg {
        fill: white;
      }
      .wrapper {
        padding: 30px 0;
        transform: translateY(0);
      }
    }
    &:not(.expanded) {
      .wrapper {
        transform: translateY(-110%);
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
    ul {
      li {
        display: inline-block;
        vertical-align: middle;
        padding: 0px;
        margin: {
          top: 0;
          bottom: 1.25rem;
          left: 0;
          right: 15px;
        };
      }
    }
    &:not(.expanded) {
      .more-info {
        display:none;
      }
    }
  }
  .wrapper {
    display: flex;
    width: 100%;
    padding: 1.25rem 2.5rem 0 0;
    background-color: white;
    flex-direction: column;
    position: static;
  }
  .main-nav {
    height: auto;
  }
  button.menu {
    display: none;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  }
  .primary-links {
    margin-left: 6.5rem;
    li {
      margin-bottom: 1.25rem;
    }
  }
  .menu-controller {
    left: 2.25rem;
  }
  .more-info {
    padding: 1.2rem 2.5rem 2.5rem;
    h3 {
      font-size: 1.8rem;
      padding-bottom: 0.3em;
    }
    ul:first-of-type {
      max-width: 1105px;
    }
  }
}

.main-nav-group-links {
  padding-top: 0.3em;
  >* {
    max-width: 25%;
    margin: 0;
    padding-right: 20px;
    font-size: 1.25rem;
    &:not(:first-child) {
      padding-left: 20px;
    }
  }
}
</style>