<script setup>
const { data } = useAsyncData(() => {
  return $fetch('/api/articles');
})

// let data = ref([]);

// async function fetchData() {
//   data.value = await $fetch('/api/articles');
// }

// fetchData();

</script>

<template>
  <div>
    <h3>Blogg artiklar</h3>
    <ul>
      <li v-for="article in data" :key="article.id">id: {{ article.id }}: Title: {{article.title}}.</li>
    </ul>
  </div>
</template>