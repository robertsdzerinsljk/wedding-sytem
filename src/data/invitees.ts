export type Invitee = {
  slug: string;
  names: string;
  greetingName: string;
  rsvpGuests: string[];
};

export const invitees: Invitee[] = [
  {
    slug: "janis-kristine",
    names: "Jānis & Kristīne",
    greetingName: "Jāni un Kristīne",
    rsvpGuests: ["Jānis", "Kristīne"],
  },
];

export const findInviteeBySlug = (slug: string | undefined) =>
  invitees.find((invitee) => invitee.slug === slug);
