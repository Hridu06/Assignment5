const form = document.querySelector('form');
const num = document.getElementById('iits-inp');

form.addEventListener("submit", submitForm);

function submitForm(e)
{
e.preventDefault();

console.log(num.value);

if(num.value >=81 && num.value <=100)
{
inc ("iits-a_count");
}
else if(num.value >=71 && num.value <=80)
{
  inc ("iits-bp_count");
}
else if(num.value >=61 && num.value <=70)
{
  inc("iits-b_count");
}
else if(num.value >=51 && num.value <=60)
{
  inc("iits-bm_count");
}
else if(num.value >=40 && num.value <=50)
{
  inc("iits-c_count");
}
else if(num.value <=40)
{
  inc("iits-f_count");
}

num.value = '';

};
function inc (id)
{
  const element = document.getElementById(id);
  const count = parseInt(element.textContent);
  element.textContent = (count+1);

};
