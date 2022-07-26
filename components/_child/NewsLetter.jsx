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
						className="shadow border rounded w-9/12 py-3 px-3
                    text-slate-500 focus:outline-none focus:shadow-outline ml-2 placeholder:text-xs placeholder:text-center placeholder-slate-400 bg-[#ffd6ff] "
					/>
				</div>
				<button className=" bg-[#1b96d9]  rounded-lg text-white text-center hover:bg-[#148ac9] px-20 py-3 ">
					Subscribe
				</button>
			</div>
		</section>
	);
}

export default NewsLetter