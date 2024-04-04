const nameValidator = (name: string): string => {
  if (!name) return "Name can't be empty.";
  if (name.length < 4) return 'Too short name';
  return '';
};
export default nameValidator;
