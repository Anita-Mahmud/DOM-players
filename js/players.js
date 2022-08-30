// both are working
// with onclick
const nameList = [];

function selectPlayers(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    // const selected = {
    //     playerName: playerName
    // };
    // nameList.push(selected);
    nameList.push(playerName);
    if (nameList.length <= 5) {
        element.disabled = true;
    }
    displayPlayers();

}

function displayPlayers() {
    const nameContainer = document.getElementById('name-list');

    nameContainer.textContent = "";
    for (let i = 0; i < nameList.length; i++) {

        if (i != 5) {
            const li = document.createElement('li');
            // li.innerText = (i + 1) + " . " + " " + nameList[i].playerName;
            li.innerText = (i + 1) + " . " + " " + nameList[i];
            // li.style.marginTop = '100px';
            nameContainer.appendChild(li);

        } else {
            alert('You Have already selected 5 Players');
            break;
        }

    }

}


// with event delegate and addEventListener
// const nameList = [];
// document.getElementById('player-list').addEventListener('click', function(event) {
//     const playerName = event.target.parentNode.parentNode.children[0].innerText;
//     nameList.push(playerName);
//     if (nameList.length < 5) {
//         event.target.setAttribute('disabled', true);
//     }
//     const ol = document.getElementById('ol');
//     ol.innerHTML = '';
//     for (let i = 0; i < nameList.length; i++) {
//         if (i < 5) {

//             const li = document.createElement('li');
//             li.innerText = `${i + 1} ${nameList[i]}`;
//             ol.appendChild(li);
//         } else {
//             alert('Stop');
//             break;
//         }
//     }
// })