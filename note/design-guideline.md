# How I made this project?

## Design Guideline

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
