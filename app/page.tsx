'use client'

import Image from 'next/image'
import MenuItem from '@/components/MenuItem'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
	const [activeMenuItem, setActiveMenuItem] = useState<string>('Search')

	// TODO: move the following two code blocks to the left nav menu component in the future
	// This will override the default browser behavior with the custom search shortcut(CMD/CTRL + f)
	const handleSearchShortcutKeyPress = useCallback((event: KeyboardEvent) => {
		if ((event.metaKey || event.ctrlKey) && event.key === 'f') {
			event.preventDefault()
			setActiveMenuItem('Search')
		}
	}, [])

	// Listen to the keydown event for the search shortcut
	useEffect(() => {
		document.addEventListener('keydown', handleSearchShortcutKeyPress)

		return () => document.removeEventListener('keydown', handleSearchShortcutKeyPress)
	}, [handleSearchShortcutKeyPress])

	return (
		<div className="w-full h-full flex bg-[#141718]">
			{/*Sidebar*/}
			<div className="w-1/5 h-full flex flex-col">
				{/*	Logo*/}
				<div className="w-full h-fit flex justify-between items-center px-6 py-10">
					<div className="w-fit h-fit flex justify-start items-center gap-2">
						<Image src="/images/logo-light.svg" alt="Light logo" width={194} height={48} preload={true} />
					</div>
					<button className="cursor-pointer">
						<Image src="/icons/collapse-icon.svg" alt="Collapse" width={24} height={24} preload={false} className="hover:bg-neutral-1" />
					</button>
				</div>

				{/*	Main menus*/}
				<div className="w-full h-fit p-4">
					<MenuItem
						iconPath="/icons/chat-icon.svg"
						label="Chats"
						activeLinearGradient="from-[#323337] to-[#464F6F50]"
						active={activeMenuItem === 'Chats'}
						onClick={() => setActiveMenuItem('Chats')}
					/>
					<MenuItem
						iconPath="/icons/search-icon.svg"
						label="Search"
						shortcut="⌘ F"
						activeLinearGradient="from-[#32373596] to-[#466F6D50]"
						active={activeMenuItem === 'Search'}
						onClick={() => setActiveMenuItem('Search')}
					/>
					<MenuItem
						iconPath="/icons/bank-card-checkout-icon.svg"
						label="Manage subscription"
						activeLinearGradient="from-[#302C3980] to-[#51466F90]"
						active={activeMenuItem === 'Manage subscription'}
						onClick={() => setActiveMenuItem('Manage subscription')}
					/>
					<MenuItem
						iconPath="/icons/barcode-icon.svg"
						label="Updates & FAQ"
						activeLinearGradient="from-[#373332] to-[#6F4E4650]"
						active={activeMenuItem === 'Updates & FAQ'}
						onClick={() => setActiveMenuItem('Updates & FAQ')}
					/>
					<MenuItem
						iconPath="/icons/settings-icon.svg"
						label="Settings"
						activeLinearGradient="from-[#302C3980] to-[#4A466F50]"
						active={activeMenuItem === 'Settings'}
						onClick={() => setActiveMenuItem('Settings')}
					/>
				</div>
			</div>
			<div className="w-4/5 h-full py-6 pr-6">
				<div className="w-full h-full bg-[#FEFEFE] rounded-xl p-4"></div>
			</div>
		</div>
	)
}
