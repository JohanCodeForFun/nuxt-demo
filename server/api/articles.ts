export default defineEventHandler(async (event) => {
  const blogArticles = [
    { id: 1, title: "Blogg artikel ett"},
    { id: 2, title: "Blogg artikel två"},
    { id: 3, title: "Blogg artikel tre"},
    { id: 4, title: "Blogg artikel fyra"},
    { id: 5, title: "Blogg artikel fem"},
  ]

  return blogArticles;
})