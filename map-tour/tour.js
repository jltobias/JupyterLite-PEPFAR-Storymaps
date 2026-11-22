/* Source-linked public history. Coordinates are city centers or country anchors,
   never patient locations or inferred service-site addresses. */
const stops = [
  {
    id: "los-angeles-1981", date: "June 5, 1981", year: 1981,
    title: "The first official report", short: "Los Angeles",
    place: "Los Angeles, United States", coordinates: [34.0522, -118.2437], zoom: 8,
    category: "context",
    text: "CDC published a report describing five young men in Los Angeles with a rare pneumonia. It became the first official reporting of what would later be known as the AIDS epidemic. The global response that eventually led to PEPFAR grew from this period of uncertainty and community action.",
    locationNote: "Pin: Los Angeles city center, not a patient or clinical address.",
    sourceName: "HIV.gov timeline · 1981",
    sourceUrl: "https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline/"
  },
  {
    id: "vancouver-1996", date: "1996", year: 1996,
    title: "Treatment changes the outlook", short: "Vancouver",
    place: "Vancouver, Canada", coordinates: [49.2827, -123.1207], zoom: 8,
    category: "context",
    text: "At the 11th International AIDS Conference in Vancouver, evidence for highly active antiretroviral therapy helped usher in a new treatment era. Making these medicines accessible across very different health systems would become a defining global challenge.",
    locationNote: "Pin: Vancouver city center, not the conference venue.",
    sourceName: "HIV.gov timeline · 1996",
    sourceUrl: "https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline/"
  },
  {
    id: "washington-2003", date: "January 28, 2003", year: 2003,
    title: "PEPFAR is announced", short: "Washington",
    place: "Washington, D.C., United States", coordinates: [38.8951, -77.0364], zoom: 9,
    category: "pepfar",
    text: "President George W. Bush announced the President's Emergency Plan for AIDS Relief in the State of the Union address. The plan brought a major new U.S. commitment to HIV prevention, treatment, and care, built with country and community partners.",
    locationNote: "Pin: central Washington, D.C.; it represents the national announcement.",
    sourceName: "HIV.gov timeline · 2003",
    sourceUrl: "https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline/"
  },
  {
    id: "uganda-2004", date: "April 2004", year: 2004,
    title: "Treatment begins to scale", short: "Uganda",
    place: "Uganda · country-level stop", coordinates: [0.3476, 32.5825], zoom: 7,
    category: "pepfar",
    text: "Uganda became the first country to provide PEPFAR-supported antiretroviral therapy. The beginning of treatment scale-up here shows how a global commitment became access to medicines through national systems and local partners.",
    locationNote: "Pin: Kampala as a country anchor. The source does not identify a single treatment site.",
    sourceName: "CDC MMWR · Uganda ART scale-up",
    sourceUrl: "https://www.cdc.gov/mmwr/volumes/72/wr/mm7204a2.htm"
  },
  {
    id: "durban-2004", date: "2004", year: 2004,
    title: "Care takes root in Durban", short: "Durban",
    place: "Durban, South Africa", coordinates: [-29.8587, 31.0218], zoom: 9,
    category: "pepfar",
    text: "St. Mary's Hospital, on the outskirts of Durban, began providing antiretroviral treatment in 2004 as a PEPFAR sub-partner. Its story illustrates how the response depended on existing hospitals, public clinics, and community care.",
    locationNote: "Pin: Durban city center, not the hospital's address.",
    sourceName: "CDC archive · St. Mary's Hospital",
    sourceUrl: "https://archive.cdc.gov/www_cdc_gov/globalhealth/countries/southafrica/partners/stmary.htm"
  },
  {
    id: "kampala-2008", date: "June 2008", year: 2008,
    title: "Implementers meet in Uganda", short: "Kampala",
    place: "Kampala, Uganda", coordinates: [0.355, 32.59], zoom: 9,
    category: "pepfar",
    text: "The Ugandan government hosted the International HIV/AIDS Implementers Meeting, with PEPFAR among its cosponsors. The meeting brought practice and evidence together in a country already central to the treatment scale-up story.",
    locationNote: "Pin: Kampala city center, not a meeting venue.",
    sourceName: "HIV.gov timeline · 2008",
    sourceUrl: "https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline/"
  },
  {
    id: "lesotho-2016", date: "June 2016", year: 2016,
    title: "Lesotho adopts Test and Start", short: "Lesotho",
    place: "Lesotho · country-level stop", coordinates: [-29.3167, 27.4833], zoom: 8,
    category: "pepfar",
    text: "Lesotho implemented a nationwide policy to offer antiretroviral therapy to all people diagnosed with HIV, regardless of disease stage. The Ministry of Health, PEPFAR, and implementing partners worked together on the Test and Start response.",
    locationNote: "Pin: Maseru as a country anchor; the policy was nationwide.",
    sourceName: "CDC MMWR · Lesotho Test and Start",
    sourceUrl: "https://www.cdc.gov/mmwr/volumes/66/wr/mm6630a4.htm"
  },
  {
    id: "durban-2017", date: "October 2017", year: 2017,
    title: "Young women tell their stories", short: "KwaZulu-Natal",
    place: "KwaZulu-Natal, South Africa", coordinates: [-29.875, 31.04], zoom: 8,
    category: "pepfar",
    text: "Through a PEPFAR-supported DREAMS partnership, Community Media Trust trained young women to research and produce stories for the television series Siyayinqoba. This stop gives the tour a community voice alongside policy and treatment milestones.",
    locationNote: "Pin: Durban area as a regional anchor. The work spanned eThekwini and uMgungundlovu districts.",
    sourceName: "CDC archive · Siyayinqoba",
    sourceUrl: "https://archive.cdc.gov/www_cdc_gov/globalhealth/stories/siyayinqoba_provides_platform_for_young_women.html"
  },
  {
    id: "washington-2023", date: "May 2023", year: 2023,
    title: "Twenty years of PEPFAR", short: "20 years",
    place: "Washington, D.C., United States", coordinates: [38.906, -77.04], zoom: 8,
    category: "pepfar",
    text: "CDC's twenty-year retrospective highlighted PEPFAR's global treatment and prevention partnerships, along with voices from the frontlines. The anniversary is a chance to look at both the scale of the response and the people whose work sustained it.",
    locationNote: "Pin: central Washington, D.C., representing the U.S. program; this is not a specific anniversary event site.",
    sourceName: "CDC archive · 20 years of impact",
    sourceUrl: "https://archive.cdc.gov/www_cdc_gov/globalhealth/newsletter/2023/may-16-2023.html"
  },
  {
    id: "botswana-2025", date: "2025", year: 2025,
    title: "A milestone for mothers and infants", short: "Botswana",
    place: "Botswana · country-level stop", coordinates: [-24.6282, 25.9231], zoom: 7,
    category: "pepfar",
    text: "Botswana became the first country to receive Gold Tier certification for eliminating mother-to-child HIV transmission. CDC describes this as the result of sustained national leadership, community engagement, and partnerships that include PEPFAR support.",
    locationNote: "Pin: Gaborone as a country anchor; the achievement is national.",
    sourceName: "CDC · Botswana Gold Tier story",
    sourceUrl: "https://www.cdc.gov/global-hiv-tb/php/success-stories/a-global-first-botswana-achieves-gold-tier-status-protecting-mothers-and-infants.html"
  }
];

const $ = (id) => document.getElementById(id);
const timeline = $("timeline");
const timelineButtons = [];
const markers = [];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeIndex = 0;
let map;

function markerIcon(index, active) {
  const stop = stops[index];
  const classes = ["tour-marker", stop.category === "context" ? "context" : "", active ? "active" : ""].filter(Boolean).join(" ");
  const size = active ? 42 : 32;
  return L.divIcon({
    className: "",
    html: '<span class="' + classes + '" aria-hidden="true">' + (index + 1) + "</span>",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

function selectStop(index, updateHash = true) {
  if (index < 0 || index >= stops.length) return;
  activeIndex = index;
  const stop = stops[index];
  $("stop-count").textContent = "STOP " + String(index + 1).padStart(2, "0") + " / " + String(stops.length).padStart(2, "0");
  $("stop-type").textContent = stop.category === "context" ? "HIV response context" : "PEPFAR history";
  $("stop-type").classList.toggle("is-pepfar", stop.category === "pepfar");
  $("stop-date").textContent = stop.date;
  $("stop-title").textContent = stop.title;
  $("stop-place").textContent = stop.place;
  $("stop-text").textContent = stop.text;
  $("stop-location-note").textContent = stop.locationNote;
  $("stop-source").textContent = "Read " + stop.sourceName + " ↗";
  $("stop-source").href = stop.sourceUrl;
  $("previous").disabled = index === 0;
  $("next").disabled = index === stops.length - 1;
  $("progress").style.setProperty("--progress", ((index + 1) / stops.length * 100) + "%");
  timelineButtons.forEach((button, buttonIndex) => {
    if (buttonIndex === index) {
      button.setAttribute("aria-current", "step");
      if (updateHash) button.scrollIntoView({block: "nearest", inline: "nearest", behavior: reducedMotion ? "auto" : "smooth"});
    } else {
      button.removeAttribute("aria-current");
    }
  });
  if (map) {
    markers.forEach((marker, markerIndex) => marker.setIcon(markerIcon(markerIndex, markerIndex === index)));
    if (reducedMotion) map.setView(stop.coordinates, stop.zoom);
    else map.flyTo(stop.coordinates, stop.zoom, {duration: 1.1});
  }
  if (updateHash) history.replaceState(null, "", "#stop=" + stop.id);
}

stops.forEach((stop, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = stop.year + " · " + stop.short;
  button.setAttribute("aria-label", "Stop " + (index + 1) + ": " + stop.title + ", " + stop.place);
  button.addEventListener("click", () => selectStop(index));
  timeline.appendChild(button);
  timelineButtons.push(button);
});

$("previous").addEventListener("click", () => selectStop(activeIndex - 1));
$("next").addEventListener("click", () => selectStop(activeIndex + 1));
timeline.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  event.preventDefault();
  const next = Math.max(0, Math.min(stops.length - 1, activeIndex + (event.key === "ArrowRight" ? 1 : -1)));
  selectStop(next);
  timelineButtons[next].focus();
});
window.addEventListener("hashchange", () => {
  const id = decodeURIComponent(location.hash.replace(/^#stop=/, ""));
  const index = stops.findIndex((stop) => stop.id === id);
  if (index >= 0) selectStop(index, false);
});

try {
  if (!window.L) throw new Error("Leaflet unavailable");
  map = L.map("map", {scrollWheelZoom: false, zoomControl: true, worldCopyJump: true}).setView([12, 10], 2);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 11,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
  stops.forEach((stop, index) => {
    const marker = L.marker(stop.coordinates, {
      icon: markerIcon(index, false),
      title: stop.title + " — " + stop.place,
      alt: "Stop " + (index + 1) + ": " + stop.title,
      keyboard: true
    }).addTo(map);
    marker.on("click", () => selectStop(index));
    markers.push(marker);
  });
} catch (error) {
  $("map-fallback").hidden = false;
  console.warn("Map could not initialize:", error);
}

const requestedId = decodeURIComponent(location.hash.replace(/^#stop=/, ""));
const requestedIndex = stops.findIndex((stop) => stop.id === requestedId);
selectStop(requestedIndex >= 0 ? requestedIndex : 0, false);
