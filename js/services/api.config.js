// https://api.github.com/search/repositories?q=java&page=0&per_page=30&sort=stars&order=desc

// api接口管理

export const host = {
  github: {
    dev: 'https://api.github.com',
    prod: 'https://api.prod.github.com'
  }
}

export const api = {
  popular: {
    search: `/search/repositories`, // ?q=java&page=0&per_page=30&sort=stars&order=desc
  },
  trending: {

  }
}