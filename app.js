document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.querySelector("[data-form-notice]")?.classList.add("show");
  });
});

const tabs = document.querySelectorAll("[data-filter]");
const events = document.querySelectorAll("[data-event]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const active = tab.dataset.filter || "all";
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    events.forEach((event) => {
      event.classList.toggle("is-hidden", active !== "all" && event.dataset.event !== active);
    });
  });
});
