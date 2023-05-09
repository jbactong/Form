const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'loading': appendLoading(label,placeholder)
                    break
        case 'commission': appendCommission(label,placeholder)
                    break
        case 'player': appendPlayer(label,placeholder)
                    break
    }
}

const appendLoading = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class','form-control mt-1')
    el.setAttribute('placeholder',placeholder)

    document.querySelector("#elements").append(el)
}

const appendCommission = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class','mt-1')
    el.setAttribute('placeholder',placeholder)

    document.querySelector("#elements").append(el)
}

const appendPlayer = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class','mt-1')
    el.setAttribute('placeholder',placeholder)
    
    document.querySelector("#elements").append(el)
}