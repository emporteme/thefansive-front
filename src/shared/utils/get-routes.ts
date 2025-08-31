export const getRoutes = (locale?: string) => {
  return {
    home: () => (locale ? `/${locale}` : "/"),
    cart: () => (locale ? `/${locale}/cart` : "/cart"),
    ecosystem: () => (locale ? `/${locale}/ecosystem` : "/eco-system"),
    game: () => (locale ? `/${locale}/game` : "/game"),
    howItWorks: () => (locale ? `/${locale}/how-it-works` : "/how-it-works"),
    news: () => (locale ? `/${locale}/news` : "/news"),
    partners: () => (locale ? `/${locale}/partners` : "/partners"),
    auth: {
      login: () => (locale ? `/${locale}/auth` : "/auth"),
      signup: () => (locale ? `/${locale}/auth/sign-up` : "/auth/sign-up"),
      forgot: () => (locale ? `/${locale}/auth/forgot` : "/auth/forgot"),
      restore: () => (locale ? `/${locale}/auth/restore` : "/auth/restore"),
    },
    user: {
      profile: () => (locale ? `/${locale}/user/profile` : "/user/profile"),
      order: () => (locale ? `/${locale}/user/order` : "/user/order"),
      fanSupport: () => (locale ? `/${locale}/user/fan-support` : "/user/fan-support"),
      donate: () => (locale ? `/${locale}/user/donate` : "/user/donate"),
      tasks: () => (locale ? `/${locale}/user/tasks` : "/user/tasks"),
      myInformation: () => (locale ? `/${locale}/user/my-information` : "/user/my-information"),
      support: () => (locale ? `/${locale}/user/support` : "/user/support"),
    },
  }
}
