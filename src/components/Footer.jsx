import { restaurant } from '../data/content'

export default function Footer() {
  const { location } = restaurant

  return (
    <footer className="bg-[#1f1612] py-10 text-[#F7F0E4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-3xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          {restaurant.name}
        </p>
        <p className="text-sm text-white/70">
          {location.street}, {location.city}, {location.state} {location.zip}
        </p>
      </div>
    </footer>
  )
}
