// *** YOUR ANSWER BELOW ***
function countdown(n){
  str = "The world is going to end in: ";

  while (n >= 0){
    str += `${n}, `;
    n--;
  }
  return str;
}
countdown(10);
