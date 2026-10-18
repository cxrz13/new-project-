export const restaurant = {
  name: 'Naan',
  tagline: 'North Indian kitchen, baked bread, and spice.',
  phone: '(415) 555-0184',
  email: 'hello@naanrestaurant.com',
  hours: [
    { days: 'Tue – Thu', time: '5:00pm – 10:00pm' },
    { days: 'Fri – Sat', time: '5:00pm – 11:00pm' },
    { days: 'Sunday', time: '4:00pm – 9:00pm' },
    { days: 'Monday', time: 'Closed' },
  ],
  location: {
    street: '1847 Spice Lane',
    city: 'San Francisco',
    state: 'CA',
    zip: '94110',
    neighborhood: 'Mission District',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=1847+Spice+Lane+San+Francisco+CA+94110',
  },
}

export const menuHighlights = [
  {
    name: 'Tandoori Naan',
    description: 'Blistered in the clay oven with ghee, nigella seed, and a pinch of sea salt.',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Butter Chicken',
    description: 'Slow-simmered tomato cream, fenugreek, and charcoal-grilled chicken tikka.',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Lamb Biryani',
    description: 'Saffron basmati layered with spiced lamb, fried onions, and mint raita.',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
  },
]
