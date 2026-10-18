import { Typography } from '@mui/material'

export default function Story() {
  return (
    <section id="story" className="bg-naan-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
            alt="Warm restaurant dining room"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-naan-maroon">
            Our story
          </p>
          <Typography
            variant="h2"
            className="mt-3 text-4xl md:text-5xl"
            sx={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Built around the tandoor.
          </Typography>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            Naan is a neighborhood Indian restaurant where the bread is the
            headline. We mill, rest, and slap dough against a roaring clay oven
            all night, then pair it with regional curries, charcoal kebabs, and
            bright chutneys.
          </p>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            The room is low-lit and unhurried. Come with friends, order too many
            plates, and tear into something still blistered from the fire.
          </p>
        </div>
      </div>
    </section>
  )
}
