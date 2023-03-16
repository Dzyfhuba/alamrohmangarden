export interface ServiceInterface {
  id: number,
  slug: string,
  title: string,
  content?: string,
  images?: string[],
  tags: string[],
}