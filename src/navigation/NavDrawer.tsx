import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Logout from "@mui/icons-material/Logout"

export default function TemporaryDrawer() {
	const [open, setOpen] = React.useState(false)

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen)
	}

	const handleMenuItemClick = (menuSelection: string) => {
		if (menuSelection === "Logout") {
			localStorage.clear()
			window.location.reload()
		} else if (menuSelection === "Settings") {
			alert("No Settings Yet")
		}
	}

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{["Settings", "Logout"].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton onClick={() => handleMenuItemClick(text)}>
							<ListItemIcon>
								<Logout />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div>
			<Button onClick={toggleDrawer(true)}>Open User Menu</Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	)
}
