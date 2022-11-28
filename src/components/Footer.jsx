import React from 'react'

const Footer = ({
    footerAPI: {
        titles,
        links
    }
}) => {
    return (
        <footer className="bg-theme pt-7 pb-5">
            <div className="nike-container text-slate-200">
                <div
                    className="grid grid-cols-3 max-w-2xl m-auto w-full md:max-w-none">
                    {titles.map((val, index) => (
                        <div key={index} className="grid items-center">
                            <h1 className="text-lg lg:text-base md:text-sm font-semibold uppercase">
                                {val.title}
                            </h1>
                        </div>
                    ))}
                    {links.map((navLinks, index) => (
                        <ul key={index} className="grid items-center gap-1">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-sm sm:text-xs">
                                    {link.link}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="mt-5 text-center">
                    <p className="text-sm md:text-center">
                        Copyright<sup className='text-base fon-bold'>&copy;</sup>All Reserved Rights 2022 <span className='font-semibold'>Mhmd Hussein</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer