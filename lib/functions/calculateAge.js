export const calculateAge = (dob) =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10);
