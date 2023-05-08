const breakpoints = [768, 992, 1280]

const breakpointsWithUnit = breakpoints.map((breakpoint) => `${breakpoint}px`)

export const breakpointsWithName = {
  miniTablet: breakpoints[0],
  tablet: breakpoints[1],
  desktop: breakpoints[2],
}
// < 767
export const forMobile = `@media (max-width: ${
  breakpointsWithName.miniTablet - 1
}px)`

export const greaterThanMobile = `@media (min-width: ${breakpointsWithName.miniTablet}px)`

// < 991
export const lessThanTablet = `@media (max-width: ${
  breakpointsWithName.tablet - 1
}px)`

export const greaterThanMiniTablet = `@media (min-width: ${breakpointsWithName.tablet}px)`

// 768 ~ 1279
export const forTablet = `@media (min-width: ${
  breakpointsWithName.miniTablet
}px) and (max-width: ${breakpointsWithName.desktop - 1}px)`

export const lessThanDesktop = `@media (max-width: ${
  breakpointsWithName.desktop - 1
}px)`

export const forDesktop = `@media (min-width: ${breakpointsWithName.desktop}px)`

export const forMiniDesktop = `@media (min-width: ${
  breakpointsWithName.tablet
}px) and (max-width: ${breakpointsWithName.desktop - 1}px)`

export default breakpointsWithUnit
