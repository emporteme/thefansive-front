export const getRoutes = (locale?: string) => {
  const getRoute = (path: string) => {
    return locale ? `/${locale}${path}` : path
  }

  return {
    home: () => getRoute("/"),
    cart: {
      home: () => getRoute("/cart"),
      payment: () => getRoute("/cart/payment"),
      confirmation: () => getRoute("/cart/confirmation"),
    },
    ecosystem: () => getRoute("/ecosystem"),
    clubs: {
      all: () => getRoute("/clubs"),
      single: (id: string) => getRoute(`/clubs/${id}`),
    },
    game: () => getRoute("/game"),
    howItWorks: () => getRoute("/how-it-works"),
    partners: () => getRoute("/partners"),
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
      single: (id: number) => getRoute(`/news/${id}`),
    },
  }
}
