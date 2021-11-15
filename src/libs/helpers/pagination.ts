const getRange = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(null)
    .map((v, i) => i + start)
}

const pagination = (currentPage: number, pageCount: number) => {
  if (pageCount === 0 || pageCount < currentPage)
    return []

  let delta
  if (pageCount <= 9)
    delta = 9

  else
    delta = currentPage > 6 && currentPage < pageCount - 5 ? 4 : 6

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  }

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1
    range.end += 1
  }

  let pages: any[]
      = currentPage > delta
        ? getRange(
          Math.min(range.start, pageCount - delta),
          Math.min(range.end, pageCount),
        )
        : getRange(1, Math.min(pageCount, delta + 1))

  const withDots = (value: number, pair: any[]) =>
    pages.length + 1 !== pageCount ? pair : [value]

  if (pages[0] !== 1)
    pages = withDots(1, [1, '...']).concat(pages)

  if (pages[pages.length - 1] < pageCount)
    pages = pages.concat(withDots(pageCount, ['...', pageCount]))

  return pages
}

export default pagination
