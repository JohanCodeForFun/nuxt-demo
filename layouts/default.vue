<script setup></script>

<template>
  <h1>Nuxt Demo</h1>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Hem</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/articles">Blog artiklar</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Produkter</NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://google.com">Google</NuxtLink>
      </li>
    </ul>
  </nav>

  <slot></slot>

  <footer>
    <br />
    <br />
    <br />
    <p>Det här är en footer</p>
  </footer>
</template>