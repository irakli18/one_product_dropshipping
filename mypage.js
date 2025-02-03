document.addEventListener("DOMContentLoaded", () => {
  const inputNumber = document.querySelector(".quantity-selector input");
  let numElement = document.getElementById("oldprice");
  let numElementOther = document.getElementById("newprice");
  let oldNumber = parseInt(numElement.innerText);
  let newNumber = parseInt(numElementOther.innerText);

  const addValue = () => {
    inputNumber.value = Number(inputNumber.value) + 1;
    numElement.innerText = oldNumber * inputNumber.value;
    numElementOther.innerText = newNumber * inputNumber.value;
  };

  const subtractValue = () => {
    if (Number(inputNumber.value) > 1) {
      inputNumber.value = Number(inputNumber.value) - 1;
      numElement.innerText = oldNumber * inputNumber.value;
      numElementOther.innerText = newNumber * inputNumber.value;
    }
  };

  // Attach functions to buttons
  document.querySelector(".increment").addEventListener("click", addValue);
  document.querySelector(".decrement").addEventListener("click", subtractValue);
  // document.querySelector(".prices #oldprice").textContent = oldNumber.value;

  const containers = document.querySelectorAll('.container');

  containers.forEach((container) => {
    const btn = container.querySelector('.collapsible-btn');
    const content = container.querySelector('.collapsible-content');

    btn.addEventListener('click', () => {
      // Close all other collapsibles immediately
      containers.forEach((otherContainer) => {
        const otherContent = otherContainer.querySelector('.collapsible-content');
        if (otherContent !== content) {
          otherContent.classList.add('no-transition'); // Remove animation
          otherContent.style.maxHeight = null; // Collapse immediately
          setTimeout(() => otherContent.classList.remove('no-transition'), 50); // Re-enable animation for next opening
        }
      });

      // Toggle the current collapsible
      const isCollapsed = content.style.maxHeight;
      if (isCollapsed) {
        content.style.maxHeight = null; // Collapse
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`; // Expand
      }
    });
  });

  const mainImage = document.getElementById("mainpic");
  const smallImages = document.querySelectorAll("#others img");

  smallImages.forEach((smallImg) => {
    smallImg.addEventListener("click", () => {
      mainImage.src = smallImg.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length === 0) {
      return;
  }

  faqItems.forEach(item => {
      item.addEventListener("click", () => {
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
              }
          });
          item.classList.toggle("active");
      });
  });
});

// Function to toggle popup visibility while closing others
function togglePopup(popupId) {
  const popups = document.querySelectorAll(".popup"); // Get all popups
  const popup = document.getElementById(popupId);

  popups.forEach(p => {
      if (p.id !== popupId) {
          p.classList.remove("active");
      }
  });

  popup.classList.toggle("active");

  // Close popup when clicking outside
  document.addEventListener("click", function closePopup(event) {
      if (!popup.contains(event.target) && event.target.id !== "search" && event.target.id !== "bag") {
          popup.classList.remove("active");
          document.removeEventListener("click", closePopup); // Remove event listener after closing
      }
  });
}