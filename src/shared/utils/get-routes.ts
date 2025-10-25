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
    clubs: {
      all: () => getRoute("/clubs"),
      single: (id: string) => getRoute(`/clubs/${id}`),
    },
    products: {
      single: (id: string) => getRoute(`/products/${id}`),
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
      single: (id: number) => getRoute(`/news/${id}`),
    },
    game: () => getRoute("/game"),
    ecosystem: () => getRoute("/ecosystem"),
    howItWorks: () => getRoute("/how-it-works"),
    partners: () => getRoute("/partners"),
    about: () => getRoute("/about"),
    contact: () => getRoute("/contact"),
  }
}
