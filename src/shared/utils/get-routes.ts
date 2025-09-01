export const getRoutes = (locale?: string) => {
  return {
    home: () => (locale ? `/${locale}` : "/"),
    about: () => (locale ? `/${locale}/about` : "/about"),
    services: () => (locale ? `/${locale}/services` : "/services"),
    contact: () => (locale ? `/${locale}/contact` : "/contact"),
    user: {
      profile: () => (locale ? `/${locale}/user/profile` : "/user/profile"),
      order: () => (locale ? `/${locale}/user/order` : "/user/order"),
      fanSupport: () => (locale ? `/${locale}/user/fan-support` : "/user/fan-support"),
      donate: () => (locale ? `/${locale}/user/donate` : "/user/donate"),
      tasks: () => (locale ? `/${locale}/user/tasks` : "/user/tasks"),
      myInformation: () => (locale ? `/${locale}/user/my-information` : "/user/my-information"),
      support: () => (locale ? `/${locale}/user/support` : "/user/support"),
    },
    news: () => (locale ? `/${locale}/news` : `/news`),
    newsArticle: (id: number) => (locale ? `/${locale}/news/${id}` : `/news/${id}`),
  }
}
