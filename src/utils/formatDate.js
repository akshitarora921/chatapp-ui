const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function formatDate(date) {
  const _date = new Date(date);
  const dateVal =
    _date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate();
  const month =
  monthNames[_date.getMonth()]
  return `${dateVal} ${month}`;
}