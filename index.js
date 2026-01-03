const colorPicker = document.getElementById('seed-color')
const schemeSelect = document.getElementById('scheme-select')
const getSchemeBtn = document.getElementById('get-scheme-btn')
const colorSwatches = document.querySelectorAll('.color-swatch')
const colorHex = document.querySelectorAll('.color-hex')
const colorColumn = document.querySelectorAll('.color-column')

getSchemeBtn.addEventListener('click', function() {   
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${schemeSelect.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.colors.length; i++){


                colorSwatches[i].style.backgroundColor = `${data.colors[i].hex.value}`
                colorHex[i].textContent = data.colors[i].hex.value
            }
        })   
})

colorColumn.forEach(function(column) {
    column.addEventListener('click', function() {
        const hexValue = column.querySelector('.color-hex').textContent
        navigator.clipboard.writeText(hexValue)
        column.classList.add('copied')
        setTimeout(() => {
            column.classList.remove('copied')
        }, 1500);
    })
})


// STEP 4: Copy to clipboard
//
// navigator.clipboard.writeText(hexValue)
//
// This returns a Promise, so you can chain .then() after it



// STEP 5 (Optional): Show "Copied!" feedback
//
// The CSS already has styles for a .copied class!
//
// After copying:
//   1. Add the class:    column.classList.add('copied')
//   2. Remove it after 1.5 seconds using setTimeout:
//      setTimeout(function() {
//          column.classList.remove('copied')
//      }, 1500)
