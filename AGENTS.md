# Architecture

- Use `react-helmet-async` for route-specific head metadata; static fallback meta tags in `index.html` that routes override carry `data-rh="true"` so client-side navigation replaces them instead of duplicating them.
