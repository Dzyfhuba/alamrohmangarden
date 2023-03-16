export const host = process.env.NEXT_PUBLIC_BACKEND_HOST || 'http://localhost:3333'

export const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Alam Rohman Garden'

export const routeName: {
  path: string,
  title: string,
}[] = [
  {
    path: '/admin/services',
    title: 'Admin Services'
  },
  {
    path: '/admin/articles',
    title: 'Admin Articles'
  },
  {
    path: '/admin/about',
    title: 'Admin About'
  },
]