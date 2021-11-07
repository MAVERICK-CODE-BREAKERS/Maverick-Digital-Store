// const Input_forms = document.querySelectorAll('.form-control');
const bankName = document.querySelector("#formFile");
const bvn = document.querySelector("#bvn");
const governmentId = document.querySelector("#GovernmentID");
const idNumber = document.querySelector("#IDNumber");
const employment = document.querySelector("#Employment");
const btn_primary = document.querySelector(".btn-primary");


btn_primary.addEventListener("click", SaveData)

function SaveData(){
  let all_data = JSON.parse(localStorage.getItem('installmentData'));

  if (all_data == null){
    all_data = []
  }

  let Datas = {
    'bankName' : bankName.value,
    'bvn' : bvn.value,
    'governmentid' : governmentId.value,
    'id_number' : idNumber.value,
    'employment_letter' : employment.value
  }

  all_data.push(Datas)
  localStorage.setItem('installmentData', JSON.stringify(all_data));
}