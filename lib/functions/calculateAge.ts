export const calculateAge = (dob: string) =>
  Math.floor((Date.now() - new Date(dob).getTime()) / 3.15576e10);
