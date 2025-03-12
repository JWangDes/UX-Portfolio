// This automatically labels img-label-number
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section"); // Find all sections
    let sectionIndex = null; // Initialize as null so we can detect the first valid section

    sections.forEach((section) => {
        let labelWrapper = section.querySelector(".img-label-wrapper");

        if (labelWrapper) {
            // If it's the first valid section, set sectionIndex to 0
            if (sectionIndex === null) {
                sectionIndex = 0;
            } else {
                sectionIndex++; // Otherwise, increment normally
            }

            let labels = section.querySelectorAll(".img-label-number");
            let itemIndex = 1; // Reset item index for each section

            labels.forEach((label) => {
                label.textContent = `${sectionIndex}.${itemIndex}`;
                itemIndex++;
            });
        }
    });
});
