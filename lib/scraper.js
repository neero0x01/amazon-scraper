import cherio from 'cherio'
import axios from 'axios'

const getHtml = async (url) => {
  const { data: html } = await axios.get(url)
  return html
}

const fetchTitle = async (html) => {
  const $ = await cherio.load(html)
  const titles = $('h2 a.a-link-normal.a-text-normal').text()
  return titles.split(',')[0]
}

const fetchPrice = async (html) => {
  const $ = await cherio.load(html)
  const prices = $('span.a-price:nth-of-type(1) span.a-offscreen').text()
  return prices.split('.')[0]
}

const fetchRating = async (html) => {
  const $ = await cherio.load(html)
  const ratings = $('div.a-row.a-size-small span:nth-of-type(1)').text()
  return [...ratings.split(',')[0]].slice(0, 12).join('')
}

const fetchItems = async (html) => ({
  title: await fetchTitle(html),
  rating: await fetchRating(html),
  price: await fetchPrice(html),
})

export { getHtml, fetchItems }
