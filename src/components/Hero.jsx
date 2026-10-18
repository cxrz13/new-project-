import { Button, Typography } from '@mui/material'
import { restaurant } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86vh] items-center overflow-hidden bg-naan-ink"
    >
      <img
        src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2000&q=80"
        alt="Indian thali with naan, curry, and rice"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-amber-200">
          Indian restaurant
        </p>
        <Typography
          variant="h1"
          className="max-w-2xl text-6xl leading-none text-white md:text-8xl"
          sx={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {restaurant.name}
        </Typography>
        <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
          {restaurant.tagline} Come for the tandoor, stay for the bread still
          warm from the oven.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            href="#menu"
            variant="contained"
            color="secondary"
            size="large"
            className="rounded-full px-8"
          >
            See the kitchen
          </Button>
          <Button
            href="#location"
            variant="outlined"
            size="large"
            className="rounded-full border-white px-8 text-white"
            sx={{ borderColor: 'white', color: 'white' }}
          >
            Find the table
          </Button>
        </div>
      </div>
    </section>
  )
}
