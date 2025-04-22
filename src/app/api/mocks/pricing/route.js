const route = [
  {
    title:'Free',
    price: '0',
    currency: '$',
    description:'gratuit',
    id:2123,
  },
  {
    title:'Gold',
    price: '100',
    currency: '$',
    description:'pentru profesionisti',
    id:2123123,
  },
  {
    title:'Enterprise',
    price: '1000',
    currency: '$',
    description:'pentru profesionisti',
    id:2123123123213,
  },
]

export async function GET() {
  return Response.json(route)
}
