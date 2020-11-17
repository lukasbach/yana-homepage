export interface Release {
  id: string,
  url: string,
  tagName: string,
  name: string,
  created: string,
  published: string,
  latest?: boolean,
  assets: Array<{
    id: string,
    url: string,
    downloadUrl: string,
    name: string,
    label: string,
    size: number
  }>
}