export {}
import * as fs from 'fs'
import og from 'open-graph-scraper'

const WEB_SITES = [
	{
		title: 'Post A Note',
		url: 'https://postanote.app',
	},
]
const WEB_GAMES = [
	{
		title: 'Paper Trader',
		url: 'https://paper-trader.davjhan.com/',
		uniqueVisitors: 16500,
	},
	{
		title: 'Guess The Year',
		url: 'https://guess-the-year.davjhan.com/',
		uniqueVisitors: 110000,
	},
]
const customMetaTags = [
	{
		multiple: false,
		property: 'davjhan-title', // meta tag name/property attribute
		fieldName: 'davjhanTitle',
	},
	{
		multiple: false,
		property: 'github', // meta tag name/property attribute
		fieldName: 'github',
	},
	{
		multiple: false,
		property: 'date', // meta tag name/property attribute
		fieldName: 'date',
	},
]

async function getData({ url, title, uniqueVisitors }) {
	try {
		const data = await og({ url, customMetaTags })

		return {
			title,
			description: data.result.ogDescription,
			image: data.result.ogImage[0],
			github: data.result.customMetaTags.github,
			date: data.result.customMetaTags.date,
			url,
			uniqueVisitors,
		}
	} catch (e) {
		console.log(`e`, e)
	}
}

async function main() {
	const webGames = await Promise.all(WEB_GAMES.map(getData))
	const webSites = await Promise.all(WEB_SITES.map(getData))
	const data = {
		webGames,
		webSites,
	}
	console.log(`data`, data)
	fs.writeFile('src/data/directory.json', JSON.stringify(data, null, 2), (err) => {
		if (err) {
			console.error(err)
			return
		}
		//file written successfully
	})
}

main()
