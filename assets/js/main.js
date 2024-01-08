import team from "../../data/team.json";

const mainContentEl = document.querySelector("#main-content");
const profileContainer = document.querySelector("#profile-container");

function displayInternsDetails(jsonData) {
  jsonData.map((element) => {
    const divEl = document.createElement("div");

    divEl.innerHTML = `<div class="bg-[#a7abb2] h-[200px] flex items-center gap-x-7 px-5 py-5 w-[550px] rounded-md">
        <img src="${
          element.github
        }.png" class="w-[150px] h-[150px] object-cover rounded-full" alt="${element.name}'s Image">

        <div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Name: </p>
            <p class="text-[#384252">${element.name}</p>
          </div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Gender: </p>
            <p class="text-[#384252">${
              element.gender === "M" ? "Male" : "Female"
            }</p>
          </div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Position: </p>
            <p class="text-[#384252">Intern Full-Stack Engineer</p>
          </div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Country: </p>
            <p class="text-[#384252">${
              element.country === "IN"
                ? "India 🇮🇳"
                : element.country === "SL"
                ? "Sri Lanka 🇱🇰"
                : ""
            }</p>
          </div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Marital Status: </p>
            <p class="text-[#384252">${element.marital === true ? "Married" : "Unmarried"}</p>
          </div>

          <div class="flex items-center gap-x-3">
            <p class="font-semibold text-[#232d3f]">Social Links: </p>
            <div class="flex items-center gap-x-3">
              <a href="${element.linkedIn}" class="text-[#232D3F] text-xl hover:transition 500 hover:-translate-y-2" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="${element.github}" class="text-[#232D3F] text-xl hover:transition 500 hover:-translate-y-2" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="${element.instagram}" class="text-[#232D3F] text-xl hover:transition 500 hover:-translate-y-2" target="_blank" title="Instagram"><i class="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>`;

    profileContainer.append(divEl);
    mainContentEl.append(profileContainer);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayInternsDetails(team);
});
