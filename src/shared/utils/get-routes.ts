export const getRoutes = (locale?: string) => {
  const getRoute = (path: string) => {
    return locale ? `/${locale}${path}` : path
  }

  return {
    home: () => getRoute("/"),
    cart: () => getRoute("/cart"),
    ecosystem: () => getRoute("/ecosystem"),
    game: () => getRoute("/game"),
    howItWorks: () => getRoute("/how-it-works"),
    partners: () => getRoute("/partners"),
    auth: {
      login: () => getRoute("/auth"),
      signup: () => getRoute("/auth/sign-up"),
      forgot: () => getRoute("/auth/forgot"),
      restore: () => getRoute("/auth/restore"),
    },
    user: {
      profile: () => getRoute("/user/profile"),
      order: () => getRoute("/user/order"),
      fanSupport: () => getRoute("/user/fan-support"),
      donate: () => getRoute("/user/donate"),
      tasks: () => getRoute("/user/tasks"),
      myInformation: () => getRoute("/user/my-information"),
      support: () => getRoute("/user/support"),
    },
    news: {
      all: () => getRoute("/news"),
      single: (id: string) => getRoute(`/news/${id}`),
    },
    newsArticle: (id: number) => (locale ? `/${locale}/news/${id}` : `/news/${id}`),
  }
}
