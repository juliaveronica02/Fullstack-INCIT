import React, {useState} from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <>
            {/* Card code block start */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{/* card 1 */}
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
				<div className="flex items-start justify-between">
                        <div className="flex items-center mb-2 lg:mb-0 mr-10">
                            <div className="bg-cover mr-3">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAqCAMAAAC+9zSRAAAAolBMVEX////sHSUjHyAAAADrAAAgHB3Ix8fsGSIbFhdZV1gIAABdW1zR0dHt7e0UDhCzs7NKSUnz8/Pi4uKqqqrBwcHrAA9GRERPTk6Eg4NpaGienp7sDhrX19f87exubW2UlJQrKCn53dzznZ17e3sxLy/tODv2t7f4y8rsKSvuUFHwfn7vcXH50tH75uQ5NzjuY2XsQkTzraz1wMDzlJTyiorvXV11EceCAAAED0lEQVRYhe2Xa5OqOBCGIx0k3IKAgIJ3R0eP6DjOmf//1zZX5LpntrZmq7Zq3i9CgnnSSae7g9CPfvTdOr62Grbvy++nLjHGp2Ot4fWME1x+O/dXMhpZCb68l9vrtXz8KnDBGg6qN5pnNlOWpukks1frcfW/sWvrnnRiz2dB+Bxzur8B122ee3mIenVhGKYiwUKFxd+sU9X/QglxVtHCm+YuG8qZ+XpKQAiBdRRFi/gGFGCmqYS9zTzf98cz9o8+7vLt/ilALVn381kt9YwahhPIZ38GJoVc/dkwDQOm6iuHPc/FYw6mSSL1Tej2ck+JZY26YNZmFfhacSGoVhcMU42PNjUumhD14gF78J6IjY86KrGwrU1Ozrwh2Ylv1rQ2ugAbjtvlBqyd8PaUGCSrMaYR6miJBWZ3KOrGJjvxi+Xxyp0GV9qfV1ztaD7jmibfdcOg656lbUg6VfJ6TipscSoP3Fzt0m0uYgMb4GuuXtGQcwkz70vcrTDYKsIL1mt8D89iMvhdfhI7Nau0wXSPlF81uDf5eWOd+3UXW1sc0E6C8Ru6SNsTNMBdCIM1d6FahTvl0t6aHw5ppyCf6IGZF+MP9CEnULypL4I2FxG1rw3uihpko+xmzbMeL66rVOuLf6PtCOMjw6v1fh/kukRuoeAqb43BoFSw9pSDKWS5h4a11PvKt/OqN5y/Pwa5YoNXda6/Ah01EDIF2CAOQBYPBEmENGeERQ466KNcZYYuV7iOzQCSO12nwKyNdXeYgmkYmj3k2k/ua938v+OKEDFRXL62/ngPBG4VOd4A1Wiwe7HhEySW5F78mctdtrJX+U80oSak1aqO9y/gEAne93Gf+8tS8PZr+ytCw77JFfGRbmrbGcVzEGToCZQNf7Ya/rwb5PIWJ1fciiQC5LwxuJ9ysJOjrvT5fUNHdn45fvfH8ysyhafO8dPCjHRt4y5PmpORquLVRzte4XCIaxORAdpcPh0nRg3lA1HzC/G5w+URyVl3ufx40ZYTjZULtqXyUVnPRyOVj07P4RpcfowETnCf7YI7Qw2NoTsXpL25aOXfYneqeXTe5rL0B2I5W1y5zn4jMItJd5OEqjdOrXqjqNcbebPeYOWTrjc413l2SL9aNCjcFQB1NVxfFYUMnO06h+U7UI7S5PL0SG12nOr1LLRqBq1/WE/yvEOqepXH/4obsSNDic+4tNoUhiXQd3q5pGtZg/XzjdXP9CVYLBZesDcBJjq9BbJ+9mQPUAdcX1TVkOYeK6oDm5XR6WAyFPcFXFyO5fV63T5+Hxr3BW9uu0x2NmFiF4Zc53kUZ7zDFR2sx1VdzK+83H3htwUjWy96kXKpC4wP9ftR+cnM/tf3o3Aw81Z6tCHb439wH/zRj/7v+gsHb0wXdYx6NgAAAABJRU5ErkJggg==" alt className="h-full w-full overflow-hidden shadow" />
                            </div>
                        </div>
                        <div className="cursor-pointer relative" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A1A1AA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                            {show && (
                                <ul className="dark:bg-gray-800 rounded z-40 py-1 w-32 -ml-24 left-0 mt-8  absolute  top-0">
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <p className="pt-4 text-sm leading-4 text-gray-600"><strong>DBS Bank</strong></p>
                    <p className="text-xs font-medium leading-3 pt-3">DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.</p>
					</div>
					{/* card 2 */}
					<div className="bg-white dark:bg-gray-800 rounded shadow p-6">
				<div className="flex items-start justify-between">
                        <div className="flex items-center mb-2 lg:mb-0 mr-10">
                            <div className="w-16 h-14 bg-cover mr-3">
                                <img src="https://proudfoot.com/wp-content/uploads/2020/01/logo-dark.webp" alt className="h-full w-full overflow-hidden shadow" />
                            </div>
                        </div>
                        <div className="cursor-pointer relative" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A1A1AA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                            {show && (
                                <ul className="dark:bg-gray-800 rounded z-40 py-1 w-32 -ml-24 left-0 mt-8  absolute  top-0">
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <p className="pt-4 text-sm leading-4 text-gray-600"><strong>Proudfoot</strong></p>
                    <p className="text-xs font-medium leading-3 pt-3">Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.</p>
					</div>
					{/* card 3 */}
					<div className="bg-white dark:bg-gray-800 rounded shadow p-6">
				<div className="flex items-start justify-between">
                        <div className="flex items-center mb-2 lg:mb-0 mr-10">
                            <div className="bg-cover mr-3">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipMzPC_86-dm45r1qWiwIZRHhD82SEpCbkXdVDoI=s680-w680-h510" alt className="h-full w-full" />
                            </div>
                        </div>
                        <div className="cursor-pointer relative" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A1A1AA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                            {show && (
                                <ul className="dark:bg-gray-800 rounded z-40 py-1 w-32 -ml-24 left-0 mt-8  absolute  top-0">
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <p className="pt-4 text-sm leading-4 text-gray-600"><strong>RMI</strong></p>
                    <p className="text-xs font-medium leading-3 pt-3">RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.</p>
					</div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;