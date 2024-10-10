//common
const fundraiserCardTemplate = (item) => `
<div>
  <h2>${item.CAPTION}</h2>
</div>
<div>
  <p>
    <span class='target-funding'>$${item.CURRENT_FUNDING}</span> 
    <span class='current-funding'>USD raised of $${
      item.TARGET_FUNDING
    } goal</span>
  </p>
  <p>ORGANIZER: ${item.ORGANIZER}</p>
  <p>CITY: ${item.CITY}</p>
  <p>${item.CATEGORY_NAME}</p>
  <p class="status-tag ${
    item.ACTIVE == 1 ? "status-active" : "status-inactive"
  }">
    ${item.ACTIVE == 1 ? "Active" : "Inactive"}
  </p>
</div>
<div class='card-button'>
  <a href="/detail.html?id=${item.FUNDRAISER_ID}">Learn more</a>
</div>
`;

function renderFundraiserData(dom, data) {
  data.forEach((item) => {
    const divDom = document.createElement("div");
    divDom.classList.add("card");
    divDom.innerHTML = fundraiserCardTemplate(item);
    dom.appendChild(divDom);
  });
}

// index page
async function fetchFundraisers() {
  console.log("fetchFundraisers method");
  const response = await fetch("/api/fundraisers");
  const fundraisers = await response.json();
  const dataDom = document.getElementById("fundraiser-list");
  renderFundraiserData(dataDom, fundraisers);
}

// search page
function clearCheckboxes() {
  document.getElementById("organizer").value = "";
  document.getElementById("city").value = "";
  document.getElementById("category").selectedIndex = 0;
  document.getElementById("fundraiser-list").innerHTML = "";
}

async function getCategories() {
  const res = await fetch(`/api/categories`);
  const list = await res.json();
  const categoryDom = document.getElementById("category");

  for (const item of list) {
    console.log(item);
    const option = document.createElement("option");
    option.value = item.CATEGORY_ID;
    option.textContent = item.NAME;
    categoryDom.appendChild(option);
  }
}

async function searchFundraisers() {
  const dataDom = document.getElementById("fundraiser-list");
  const organizer = document.getElementById("organizer").value;
  const city = document.getElementById("city").value;
  const category = document.getElementById("category").value;

  console.log("searchFundraisers method");
  if (!organizer && !city && !category) {
    alert("Please select at least one search condition.");
    return;
  }
  const res = await fetch(
    `/api/search?organizer=${organizer}&city=${city}&category=${category}`
  );
  const list = await res.json();
  dataDom.innerHTML = "";
  if (list.length === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "No fundraisers found. Please try different search criteria.";
    errorMessage.classList.add("error-message");
    dataDom.appendChild(errorMessage);
    return;
  }
  renderFundraiserData(dataDom, list);
}
