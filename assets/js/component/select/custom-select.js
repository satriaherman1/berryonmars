const customSelectField = document.querySelectorAll('.custom-select-field')

const optionListClick = (opt, index) => {
    const currentSelect = customSelectField[index].querySelector('select')
    currentSelect.value = opt.textContent
}
customSelectField.forEach((field , index) => {
    const customSelect = field.querySelector('.custom-select')
    const customSelectList = field.querySelector('.custom-select-list')

    const opt = customSelect.querySelectorAll('option')
    opt.forEach((el) => {
        if(!el.disabled){
            customSelectList.innerHTML += `<li class="custom-option-list" onclick="optionListClick(this , ${index})">${el.value}</li>`
        }
    })

})

