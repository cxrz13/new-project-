import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { restaurant } from '../data/content'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="border-b border-amber-900/10 bg-[#7A1E1E]/95 backdrop-blur"
    >
      <Toolbar className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Typography
          component="a"
          href="#top"
          className="font-display text-3xl tracking-wide text-[#F7F0E4] no-underline"
          sx={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {restaurant.name}
        </Typography>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#F7F0E4]/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#location"
            variant="contained"
            color="secondary"
            className="rounded-full px-5"
          >
            Visit us
          </Button>
        </nav>
        <Button href="#location" color="inherit" className="md:hidden">
          Location
        </Button>
      </Toolbar>
    </AppBar>
  )
}
