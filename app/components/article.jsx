export default function Article({ title, paragraphs }) {
	return (
		<>
			<h1 className="text-5xl text-center py-8 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
				{title}
			</h1>
			{paragraphs.map((paragraph) => {
				return (
					<p className="pb-2 px-16 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left" >
						{paragraph}
					</p>
				)
			})}
		</>
	)
}