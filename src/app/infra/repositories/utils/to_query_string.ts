// eslint-disable-next-line @typescript-eslint/ban-types
export const toQueryString = (query: object) => {
  if (!query) {
    return ""
  }

  return Object.entries(query)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&")
}
