import hyRequest from "..";

export function getCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}