import { fetchItems, getHtml } from './lib/scraper.js'

async function go(url) {
  const html = await getHtml(url)
  const item = await fetchItems(html)
  console.log(item)
  return { name: item.title, price: item.price, rating: item.rating }
}

export { go }
