import Image from 'next/image'

type MenuItemProps = {
	iconPath: string
	label: string
	activeLinearGradient: string
	onClick?: () => void
	active?: boolean
	shortcut?: string
}

export default function MenuItem({ iconPath, label, activeLinearGradient, onClick, active = false, shortcut }: MenuItemProps) {
	return (
		<button className="w-full h-fit cursor-pointer group" onClick={onClick}>
			<div
				className={`w-full h-fit flex justify-start items-center gap-5 py-3 px-5 rounded-lg bg-linear-to-l from-50% ${active ? `shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] ${activeLinearGradient}` : 'bg-transparent'}`}>
				<Image src={iconPath} alt={label} width={24} height={24} preload={false} />
				<p className={`base-2 font-semibold grow text-left ${active ? 'text-neutral-1' : 'text-neutral-3/75 group-hover:text-neutral-3'}`}>{label}</p>
				{shortcut && (
					<div className="w-fit h-fit bg-[#404446] px-2 py-1 rounded-md">
						<p className="caption-1 text-neutral-3 font-semibold">{shortcut}</p>
					</div>
				)}
			</div>
		</button>
	)
}
