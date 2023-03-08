import {
	HiOutlineViewGrid,
	HiOutlineDocumentSearch
} from 'react-icons/hi'

import {MdOutlinePersonPin,MdSettings} from 'react-icons/md'

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'approvals',
		label: 'Approvals',
		path: '/approvals',
		icon: <HiOutlineDocumentSearch />
	},
	
]

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'my-clients',
		label: 'My Clients',
		path: '/my-clients',
		icon: <MdOutlinePersonPin />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <MdSettings />
	},
]