import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { Button, Paper, Typography } from '@mui/material'
import { restaurant } from '../data/content'

export default function Location() {
  const { location, hours, phone } = restaurant
  const fullAddress = `${location.street}, ${location.city}, ${location.state} ${location.zip}`

  return (
    <section id="location" className="bg-naan-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm uppercase tracking-[0.24em] text-naan-maroon">
          Location
        </p>
        <Typography
          variant="h2"
          className="mt-3 text-4xl md:text-5xl"
          sx={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Find us in the Mission.
        </Typography>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Paper className="rounded-3xl p-8 shadow-md" elevation={0}>
            <div className="flex items-start gap-4">
              <PlaceOutlinedIcon color="primary" />
              <div>
                <h3 className="text-xl font-medium">{restaurant.name}</h3>
                <p className="mt-2 text-stone-700">{location.street}</p>
                <p className="text-stone-700">
                  {location.city}, {location.state} {location.zip}
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  {location.neighborhood}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <AccessTimeOutlinedIcon color="primary" />
              <div className="w-full">
                <h3 className="text-xl font-medium">Hours</h3>
                <ul className="mt-3 space-y-2">
                  {hours.map((row) => (
                    <li
                      key={row.days}
                      className="flex justify-between gap-6 text-stone-700"
                    >
                      <span>{row.days}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <PhoneOutlinedIcon color="primary" />
              <div>
                <h3 className="text-xl font-medium">Reservations</h3>
                <p className="mt-2 text-stone-700">{phone}</p>
              </div>
            </div>

            <Button
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              className="mt-8 rounded-full px-6"
            >
              Open in Google Maps
            </Button>
          </Paper>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <iframe
              title={`Map of ${restaurant.name} at ${fullAddress}`}
              src="https://maps.google.com/maps?q=Mission%20District%20San%20Francisco&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
