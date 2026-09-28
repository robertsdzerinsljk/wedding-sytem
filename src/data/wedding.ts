export type MealOption = {
  id: string;
  title: string;
  image: string;
};

export type TimelineItem = {
  title: string;
  note: string;
  time: string;
  side: "left" | "right";
  icon: "rings" | "toast" | "dinner" | "music";
};

export const weddingDateIso = "2027-06-18T00:00:00+03:00";
export const weddingDateLabel = "Piektdien, 18. jūnijā";
export const weddingVenue = {
  name: "Niedras",
  address: "Bikstu pagasts, Dobeles novads",
  wazeUrl: "https://waze.com/ul?ll=56.640816,22.997366&navigate=yes",
};

export const mealOptions: MealOption[] = [
  {
    id: "option-1",
    title: "Liellopa fileja",
    image: "/images/meal-option-1.png",
  },
  {
    id: "option-2",
    title: "Zivs pamatēdiens",
    image: "/images/meal-option-2.png",
  },
  {
    id: "option-3",
    title: "Veģetārs",
    image: "/images/meal-option-3.png",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Ceremonija",
    note: "mūsu “jā”",
    time: "16:00",
    side: "left",
    icon: "rings",
  },
  {
    title: "Dzirkstošais",
    note: "apsveikumi un foto",
    time: "17:00",
    side: "right",
    icon: "toast",
  },
  {
    title: "Vakariņas",
    note: "vakariņas un runas",
    time: "18:00",
    side: "left",
    icon: "dinner",
  },
  {
    title: "Dejas",
    note: "mūzika un svinības",
    time: "21:00",
    side: "right",
    icon: "music",
  },
];

export const informationItems = [
  {
    title: "Lūgumi",
    body: "Šeit vari uzrakstīt īpašus lūgumus viesiem — piemēram, par ziediem, telefonu lietošanu ceremonijā vai citām jums svarīgām detaļām.",
    open: true,
  },
  {
    title: "Noteikumi",
    body: "Vieta praktiskiem noteikumiem, bērnu jautājumam, +1 informācijai vai citām detaļām.",
  },
  {
    title: "Dress code",
    body: "Norādi stilu, krāsu gammu vai vienkārši pievieno dažus vizuālus piemērus.",
  },
  {
    title: "Dāvanas",
    body: "Īss un elegants formulējums par dāvanu vēlmēm.",
  },
  {
    title: "Transports & autostāvvieta",
    body: "Shuttle, taksometru, parkinga un nokļūšanas informācija.",
  },
];

export const tableSpots = [
  { label: "1", x: "17%", y: "28%" },
  { label: "2", x: "42%", y: "24%" },
  { label: "3", x: "69%", y: "30%" },
  { label: "4", x: "29%", y: "66%", active: true },
  { label: "5", x: "56%", y: "69%" },
  { label: "6", x: "82%", y: "64%" },
];
