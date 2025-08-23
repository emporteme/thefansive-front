export const getRoutes = (locale?: string) => {
  return {
    home: () => (locale ? `/${locale}` : "/"),
    about: () => (locale ? `/${locale}/about` : "/about"),
    services: () => (locale ? `/${locale}/services` : "/services"),
    contact: () => (locale ? `/${locale}/contact` : "/contact"),
    user: {
      profile: () => (locale ? `/${locale}/user/profile` : "/user/profile"),
    }
  }
}
