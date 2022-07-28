import React from 'react'

const NewsLetter = () => {
  return (
		<section className="bg-[#aab3c3] mt-20 justify-center">
			<div className="container mx-auto md:px-20 py-16 px-4 text-center">
				<h1 className="uppercase text-3xl font-humane tracking-widest text-[#0077b6] font-bold  u">
					Subscribe To Our Newsletter
				</h1>

				<div className="py-4 justify-center ml-6">
					<input
						type="text"
						name=""
						id=""
						placeholder="enter your email address"
						className="shadow border mb-2 w-full inline-block px-16 py-2.5 rounded-full
                    text-slate-500 focus:outline-none focus:shadow-outline placeholder:sm:text-xs placeholder:text-center placeholder-slate-400 bg-[#ffd6ff] "
					/>
				</div>
				<div className="justify-center">
					<button className=" bg-[#1b96d9]  rounded-full text-white text-center hover:bg-[#148ac9]  w-full inline-block px-16 py-2.5 transition duration-150 ease-in-out">
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
}

export default NewsLetter