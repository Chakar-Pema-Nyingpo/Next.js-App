// import Article from "./components/article"

// const articles = [
// 	{
// 		articleTitle: 'Sherab says "Good Morning, Free Money For Everyone!"',
// 		articleParagraphs: [
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
// 			"Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
// 			"Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales."
// 		]
// 	},
// 	{
// 		articleTitle: "Scientists say water falling from sky is normal",
// 		articleParagraphs: [
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
// 			"Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
// 			"Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales."

// 		]
// 	},
// 	{
// 		articleTitle: "Eggs come from certain animals",
// 		articleParagraphs: [
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
// 			"Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
// 			"Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales."

// 		]
// 	}
// ]

// export default function Home() {
// 	return (
// 		<>
// 			{articles.map((article) => {
// 				return (
// 					<Article
// 						title={article.articleTitle}
// 						paragraphs={article.articleParagraphs}
// 					/>
// 				)
// 			})}
// 		</>
// 	)
// }

// import quotes from "./components/quote"

// async function getData() {
// 	const res = await fetch(' https://animechan.xyz/api/random ')

// 	if (!res.ok) {
// 		throw new Error('Failed to fetch data')
// 	}

// 	return res.json()
// }

// export default async function Home() {
// 	const data = await getData()
// 	console.log(data)
// 	return (
// 		<>
// 			< quotes
// 				anime= {data.anime}
// 				character= {data.character}
// 				quote= {data.quote}

// 			/>
// 		</>
// 	)
// }

// "use client"

// import { useState } from "react"

// export default function Home() {
// 	const [quotes, setQuotes] = useState([])
// 	const [text, setText] = useState("Hello")

// 	return (
// 		<div className="mx-auto w-fit mt-80">
// 			<div className="text-4xl text-red-500 text-center">
// 			{quotes.map((quotes) => {
// 				return 
// 					<p class>
// 						{quotes}

// 					</p>
// 			})}
// 			</div>
// 			<div className="text 8xl-green-500 text-center mt-12">
// 				{text}
// 			</div>
// 			<input
// 			className="text-2xl text-black mt-12"
// 			type="text"
// 			onChange={(event) => setText(event.target.value)}

// 			/>
// 			<button

// 			className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-5"
// 			onClick={() => {
// 				const newQuotes = quotes.concat([text])
// 				setQuotes(newQuotes)
// 				setText("")
// 			}}
// 			>

// 			Save text
// 			</button>
// 		</div>
// 	)
// }

"use client"

import { useState } from "react"

export default function Home() {
	const [quotes, setQuotes] = useState([])
	const [text, setText] = useState("")

	return (
		<div className="mx-auto w-fit mt-80">
		<div> 
			Bucketlist
			
		</div>
		<button
				className="text-2xl ml-80 font-bold border-4 px-2 border-gray-200 bg-gray-400 hover:bg-gray-600 text-black"
				onClick={() => {
					const newQuotes = quotes.concat([text])
					setQuotes(newQuotes)
					setText("")
				}}
			>
				Remove
			</button>

			<div className="text-2l text-red-500 text-left">
				{quotes.map((quote) => {
					return (
						<p class>
							{quote}
						</p>
					)
				})}
			</div>
			<div className="text-8xl text-green-500 text-center mt-12">
				{text}
			</div>
			<input
				className="text-2xl text-black mt-12"
				type="text"
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				className="text-2xl ml-8 font-bold border-4 px-2 border-gray-200 bg-gray-400 hover:bg-gray-600 text-black"
				onClick={() => {
					const newQuotes = quotes.concat([text])
					setQuotes(newQuotes)
					setText("")
				}}
			>
				Save Text
			</button>
		</div>
	)
}