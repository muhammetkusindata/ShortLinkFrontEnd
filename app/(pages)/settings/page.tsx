"use client"
import ProtectedPage from '@/pages/protected'
import React, { useState } from 'react'
import Profile from './(menuTabs)/Profile';
import Password from './(menuTabs)/Password';
import Plan from './(menuTabs)/Plan';
import Tools from './(menuTabs)/Tools';

type SettingsMenu = 'profile' | 'password' | 'plan' | 'tools';

const page = () => {
    const [settingsMenu, setSettingsMenu] = useState<SettingsMenu>('profile');
    const descriptions: Record<SettingsMenu, string> = {
        profile: "Change your name and email",
        password: "Change your password or recover your current one.",
        plan: "Purchase a personal subscription",
        tools: "You can create Perma links using our Chrome or Firefox extensions."
    };

    return (
        <ProtectedPage>
            <div className='w-full md:w-[85%] lg:w-[80%] 2xl:container mx-auto border-2 border-template1 rounded-lg p-4 flex gap-5 md:gap-10 flex-col lg:flex-row'>
                <div className='hidden lg:block'>
                    <ul className="menu bg-template1 text-white/75 w-56 gap-2 rounded-xl">
                        <li><button onClick={() => setSettingsMenu("profile")} className={`${settingsMenu == "profile" && "active"}`}>Profile</button></li>
                        <li><button onClick={() => setSettingsMenu("password")} className={`${settingsMenu == "password" && "active"}`}>Password</button></li>
                        <li><button onClick={() => setSettingsMenu("plan")} className={`${settingsMenu == "plan" && "active"}`}>Usage Plan</button></li>
                        <li><button onClick={() => setSettingsMenu("tools")} className={`${settingsMenu == "tools" && "active"}`}>Tools</button></li>
                    </ul>
                </div>
                <div role="tablist" className="tabs bg-template1 text-white/75 tabs-boxed flex lg:hidden justify-center">
                    <button onClick={() => setSettingsMenu("profile")} className={`tab text-white/75 ${settingsMenu == "profile" && "bg-slate-800 text-white/100"}`}>Profile</button>
                    <button onClick={() => setSettingsMenu("password")} className={`tab text-white/75 ${settingsMenu == "password" && "bg-slate-800 text-white/100"}`}>Password</button>
                    <button onClick={() => setSettingsMenu("plan")} className={`tab text-white/75 ${settingsMenu == "plan" && "bg-slate-800 text-white/100"}`}>Usage Plan</button>
                    <button onClick={() => setSettingsMenu("tools")} className={`tab text-white/75 ${settingsMenu == "tools" && "bg-slate-800 text-white/100"}`}>Tools</button>
                </div>
                <div className='w-full flex flex-col'>
                <h1 className='text-3xl font-mono capitalize'>{settingsMenu?settingsMenu:" "}</h1>
                <h2 className='py-2 text-lg font-extralight'>{descriptions[settingsMenu]}</h2>
                    {settingsMenu == "profile" && <Profile />}
                    {settingsMenu == "password" && <Password />}
                    {settingsMenu == "plan" && <Plan />}
                    {settingsMenu == "tools" && <Tools />}

                </div>

            </div>
        </ProtectedPage>
    )
}

export default page
