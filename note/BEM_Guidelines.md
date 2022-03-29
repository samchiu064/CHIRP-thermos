# Working with BEM and Bootstrap 5

## Bootstrap 5 Layout Key Concepts

### Containers

- Fundamental building block of Bootstrap (HTML Wrappers in bootstrap).
- Prerequisite to use grid system.
- Used to contain, pad and sometimes center the content within them.
- Three different containers available (.container, .container-fluid, .container-{breakpoint}).

### Grid System (Container, Row and Col)

- Used to layout and align content.
- Six responsive breakpoints available for grid entities (container, row and col), based on **min-width** media queries.
- **Rows** are wrappers for columns, built with flexblox. Also can be used to modify groups of cols at the row level.
- **Cols** are wrappers for contents, built with block. Column classes indicate the number of template columns to span. (from 0 to 12).
- **Gutters** are the gaps between cols, created by horizontal _padding_.

## BEM Key Concepts

### Block

- Don't use HTML wrapper blocks for positioning purpose.
- To position a block relative to other blocks, use a **mix**.
- To position HTML elements inside a block, use **an additional block element**.

### Element

- A composite part of a block that can't be used separately from it.
- The element name describes its purpose ("What is this?" — item, text, etc.), not its state ("What type, or what does it look like?" — red, big, etc.).

### CSS

#### Selectors

- **Don't use tag and ID selectors.** Use class selectors to define the styles of blocks and elements.
- **Don't combine tags and classes in a selector.**
- **Minimize nested selectors** as it will increase code coupling and make reuse impossible.
- **Don't use combined selectors** (such as .button.button_theme_blue) as it's more difficult to redefine new styles with mixes.
- **Name the selectors as fully and accurately as possible** for the BEM entity it represent
  - Make the names of CSS selectors as informative and clear as possible.
  - Solve the problem of name collisions.
  - Independently define styles for blocks and their optional elements.

#### Modifier

- Used to set **the appearance, state, and behavior for blocks**.
- It can't be used alone, it should change the appearance, behavior, or state of the entity, not replace it
- A block's design is changed by setting or removing a modifier

### Mixes

- Allows to **combine the behavior and styles of multiple entities without duplicating code.**
- Used to apply identical formatting to different HTML elements.
- Principles
  - Single responsibility principle:
    - Every CSS implementation must have a single responsibility.
  - Open/closed principle
    - Any HTML element on a page should be **open for extension by modifiers, but closed for changes.**
    - **Changing an existing CSS implementation** or **Modification by context** (depens on it's location) violates the principle.
  - DRY
    - Each BEM entity must have a single, unambiguous representation within the system. (Default style like .button)
    - The DRY principle only applies to functionally similar components of a page but in different formatting.
  - Composition instead of inheritance
    - Combining existing CSS classes instead of defining a new one based on a parent or base class keeps the code uncoupled and flexible.
