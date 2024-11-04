import React from 'react'

function Footer() {
    const list = [
        "About", 
        "Careers",
        "Brand Center", 
        "Blogs",

        "Discord Server",
        "Twiitter",
        "Facebook",
        "Contact Us",

        "Privacy Policy",
        "Licensing",
        "Terms & Conditions",
        "People",

        "iOS",
        "MacOS",
        "Android",
        "Windows",
    ]
  return (
    <footer className="bg-blue-300 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {
                        list.slice(0, 4).map((val, ind) => 
                            <li key={ind} className="mb-4">
                                <a href="#" className=" hover:underline">{val}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {
                        list.slice(4, 8).map((val, ind) =>
                            <li key={ind} className="mb-4">
                                <a href="#" className="hover:underline">{val}</a>
                            </li>
                         )
                    }
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {
                        list.slice(8, 12).map((val, ind) =>
                            <li key={ind} className="mb-4">
                                <a href="#" className="hover:underline">{val}</a>
                            </li>
                         )
                    }
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {
                        list.slice(12, 16).map((val, ind) => 
                            <li key={ind} className="mb-4">
                                <a href="#" className="hover:underline">{val}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 bg-blue-200 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 text-center w-full">© 2023 <a>Flowbite™</a>. All Rights Reserved.</span>
        </div>
        </div>
    </footer>
  )
}
export default Footer