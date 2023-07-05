import hyRequest from '..'

export function getCityAll() {
  return hyRequest.get({
    url:"/city/all"
  })
}

export function getDetailInfos(houseId) {
  return hyRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}

export function getFavorData() {
  return hyRequest.get({
    url: '/favor/list'
  })
}

export function getHotSuggests() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getHouseList(currentPage) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
  
}