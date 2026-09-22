// This deferred script runs immediately after the HTML is parsed, before page load.
const site = window.SITE || {};

document.querySelectorAll("[data-site]").forEach((element) => {
  const value = site[element.dataset.site];
  if (!value) return; // Keep the visible HTML fallback for an unset value.
  if (element instanceof HTMLAnchorElement) element.href = value;
  else if (element.textContent.trim() !== value) element.textContent = value;
});

// Replace brand mentions inside longer text without changing the surrounding copy.
document.querySelectorAll("[data-site-replace]").forEach((element) => {
  const key = element.dataset.siteReplace;
  const value = site[key];
  if (!value) return;
  const original = key === "BRAND" ? "AccelPro Affiliate" : "";
  const attribute = element.hasAttribute("content") ? "content" : element.hasAttribute("aria-label") ? "aria-label" : null;
  if (attribute) element.setAttribute(attribute, element.getAttribute(attribute).replace(original, value));
  else element.textContent = element.textContent.replace(original, value);
});

document.querySelectorAll("[data-site-canonical]").forEach((link) => {
  if (site.DOMAIN) link.href = site.DOMAIN.replace(/\/$/, "") + link.dataset.siteCanonical;
});

const groupLink = document.querySelector("[data-site='GROUP_LINK']");
const groupMessage = document.querySelector("[data-group-message]");
if (groupLink) {
  if (site.GROUP_LINK) {
    groupLink.target = "_blank";
    groupLink.rel = "noopener noreferrer";
  } else {
    groupLink.addEventListener("click", (event) => {
      event.preventDefault();
      if (groupMessage) {
        groupMessage.hidden = false;
        groupMessage.focus();
      }
    });
  }
}

// The portrait is supplied separately. Hide the broken image until it is added.
document.querySelectorAll(".coach-photo").forEach((photo) => {
  photo.addEventListener("error", () => {
    photo.hidden = true;
    photo.closest(".coach-visual")?.classList.add("without-photo");
  });
  if (photo.complete && photo.naturalWidth === 0) photo.dispatchEvent(new Event("error"));
});
