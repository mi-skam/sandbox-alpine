document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    toggleMenu() {
      this.open = !this.open;
    },
  }));

  Alpine.store("currentUser", {
    name: "plumps",
    posts: ["p1, p2"],
  });
});
