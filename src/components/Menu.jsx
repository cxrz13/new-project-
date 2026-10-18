import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { menuHighlights } from '../data/content'

export default function Menu() {
  return (
    <section id="menu" className="bg-[#2a1713] py-20 text-[#F7F0E4] md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
          From the kitchen
        </p>
        <Typography
          variant="h2"
          className="mt-3 text-4xl md:text-5xl"
          sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#F7F0E4' }}
        >
          A few plates to start with.
        </Typography>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {menuHighlights.map((dish) => (
            <Card
              key={dish.name}
              className="overflow-hidden bg-[#3a221c] text-[#F7F0E4] shadow-none"
              sx={{ backgroundColor: '#3a221c', color: '#F7F0E4' }}
            >
              <CardMedia
                component="img"
                height="220"
                image={dish.image}
                alt={dish.name}
                className="h-56 w-full object-cover"
              />
              <CardContent>
                <Typography
                  variant="h3"
                  className="text-2xl"
                  sx={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {dish.name}
                </Typography>
                <p className="mt-3 text-sm leading-6 text-amber-50/80">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
