import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = form.querySelector("[name='email']");
const message = form.querySelector("[name='message']");


email.addEventListener("input", throttle(hadleFormData, 500));
message.addEventListener("input", throttle(hadleFormData, 500));
form.addEventListener("submit", hadleSubmitForm);

const formData = {};

function hadleFormData(e) {
    const inputValue = e.target.value;
    const keyName = e.target.getAttribute("name");

    if (inputValue.length === 0) { 
    delete formData[keyName];
    } else { 
    formData[keyName] = inputValue;
    }

    if (Object.keys(formData).length === 0) { 
        localStorage.removeItem('feedback-form-state');
        return
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
   
}

function checkLocalData() { 
    const localData = localStorage.getItem("feedback-form-state");
    if (localData === null) return;
    const objectData = JSON.parse(localData);
    if (objectData) {
    email.value = objectData.email;
    message.value = objectData.message;
  }
}

checkLocalData()

function hadleSubmitForm(e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}