export const formatNumber = phone => {
  let number;
  phone[0] === '+' ? (number = phone.slice(1, phone.length)) : (number = phone);
  const countryCode = number.slice(0, 2);
  const areaCode = number.slice(2, 5);
  const firstPart = number.slice(5, 8);
  const secondPart = number.slice(8, 10);
  const thirdPart = number.slice(10);

  return `+${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${thirdPart}`;
};
