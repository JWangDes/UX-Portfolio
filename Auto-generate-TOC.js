//Auto-generate h2 for TOC
document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.querySelector("[data-toc]"); // Select the TOC container
    const headers = document.querySelectorAll("h2"); // Find all <h2> elements

    if (!tocContainer || headers.length === 0) return; // Exit if no TOC or <h2> found

    /* ===============================
       FIX: Force no bullets & no spacing
       (prevents timing/layout conflicts)
    =============================== */
    const tocStyle = document.createElement("style");
    tocStyle.textContent = `
        [data-toc] .toc-list,
        [data-toc] .toc-list li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
    `;
    document.head.appendChild(tocStyle);

    const tocList = document.createElement("ul");
    tocList.classList.add("toc-list"); // Assigns the 'toc-list' class

    headers.forEach((header) => {
        const section = header.closest("section"); // Get the closest <section> containing the <h2>
        if (!section) return; // Skip if no <section> is found

        // Generate a section ID based on the <h2> text (lowercase, hyphenated, no special characters)
        let sectionId = header.textContent
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, "") // Remove special characters
            .replace(/\s+/g, "-"); // Replace spaces with hyphens

        if (!sectionId) sectionId = `section-${Math.random().toString(36).substr(2, 5)}`; // Fallback in case the title is empty

        section.id = sectionId; // Assign the ID to the <section>

        // Create the TOC link
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${sectionId}`; // Link points to <section>, not <h2>
        link.textContent = header.textContent; // Use <h2> text for TOC link
        link.classList.add("toc-link"); // Assign 'toc-link' class for styling

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList); // Inject the <ul> inside the TOC container
});
