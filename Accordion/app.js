const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((header) => {
  header.addEventListener("click", (event) => {
    header.classList.toggle("active");
  });
});
