export {}
import * as fs from 'fs'
import og from 'open-graph-scraper'

const recent = 'https://paper-trader.davjhan.com/'
const projects = [
	'https://guess-the-year.davjhan.com/',
	'https://postanote.app'
]
const customMetaTags = [{
	property: 'davjhan-title', // meta tag name/property attribute
	fieldName: 'davjhanTitle'
}, {
	property: 'github', // meta tag name/property attribute
	fieldName: 'github'
}, {
	property: 'date', // meta tag name/property attribute
	fieldName: 'date'
}]

async function getData(url: string) {
	try {
		const data = await og({ url, customMetaTags })

		return {
			title: data.result.davjhanTitle || data.result.ogTitle,
			description: data.result.ogDescription,
			image: {
				url: data.result.ogImage.url,
				width: data.result.width,
				height: data.result.height
			},
			github: data.result.github,
			date: data.result.date,
			url
		}
	} catch (e) {
		console.log(`e`, e)
	}
}

async function main() {
	const projectData = await Promise.all(projects.map(getData))
	const recentData = await getData(recent)
	const data = {
		recent: recentData,
		projects: projectData
	}
	console.log(`data`, data)
	fs.writeFile('static/directory.json', JSON.stringify(data), err => {
		if (err) {
			console.error(err)
			return
		}
		//file written successfully
	})
}

main()