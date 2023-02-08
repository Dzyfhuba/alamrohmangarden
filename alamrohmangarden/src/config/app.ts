const app = {
  host: process.env.NEXT_PUBLIC_BACKEND_HOST || 'http://localhost:3333'
}
const host = app.host

export {
  host
}