# How I made this project?

## Design Guideline

Desktop
h1: 36pt, 383838, medium
h2: 30pt, 383838, regular
h3:
p(description): 20pt, 383838, light
p(supplement): 20pt, 383838, light
nav: 16pt, 707070, regular
white(background): FFFFFF
gray(background): F4F4F6
black: 383838

## Components

- Store
  - StoreHeader
  - StoreFooter
  - Store
- Dashboard
  - DashboardModalCoupon
  - DashboardModalDelete
  - DashboardModalProduct
  - DashboardToastContainer
  - DashboardToastContainerMessage
  - DashboardNavbar
- shared
  - ThePagination

## Views

- Store
  - StoreHome
    - Patterns: Tiny tweaks
  - StoreProduct
  - StoreAboutUs
  - StoreCheckout
  - StoreThermos
  - StoreShoppingCart
- Dashboard
  - DashboardCoupons
  - DashboardHome
  - DashboardLogin
  - DashboardOrders
  - DashboardProducts

## Timeline

## Tools

## References

為什麼不創資料夾來放/ We only recommend considering this approach in very large apps (e.g. 100+ components), for these reasons:

- It generally takes more time to navigate through nested sub-directories, than scrolling through a single components directory.
- Name conflicts (e.g. multiple ButtonDelete.vue components) make it more difficult to quickly navigate to a specific component in a code editor.
- Refactoring becomes more difficult, because find-and-replace often isn't sufficient to update relative references to a moved component.
