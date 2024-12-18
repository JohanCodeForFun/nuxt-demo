<script setup>
const { data } = useAsyncData(() => {
  return $fetch('/api/products');
})</script>

<template>
  <h3>Produkter</h3>
  <p>Det här är en sida för produkter</p>
  <ul>
      <li v-for="article in data" :key="article.id">id: {{ article.id }}: Title: {{article.title}}.</li>
    </ul>
</template>