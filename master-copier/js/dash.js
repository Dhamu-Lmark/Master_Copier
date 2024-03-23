let toggle = document.querySelector('.toggle');
let toggle1 = document.querySelector('.toggle1');
let navigation = document.querySelector('.navigation-2');
let main = document.querySelector('.main');
let mininav = document.querySelector('.mininav'); // Select the mininav element

toggle.onclick = function () {
    toggleNavigation();
}

toggle1.onclick = function () {
    toggleNavigation();
}

function toggleNavigation() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    mininav.classList.toggle('active'); // Toggle the 'active' class for mininav
}
        // let toggle = document.querySelector('.toggle');
        // let navigation = document.querySelector('.navigation-2');
        // let main = document.querySelector('.main');

        // toggle.onclick = function () {
        //     navigation.classList.toggle('active');
        //     main.classList.toggle('active')
        // }

        // let list = document.querySelectorAll('.navigation-2 ul li');
        // function activeLink() {
        //     list.forEach((item) =>
        //         item.classList.remove('hovered'));
        //     this.classList.add('hovered');
        // }
        // list.forEach((item) =>
        //     item.addEventListener('mouseover', activeLink))

        var dropdownMenu = document.getElementById('dropdown-menu');
        var dropMenu = document.getElementById('drop-menu');


        function toggleDropdown(event) {
            event.stopPropagation();
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
            dropMenu.style.display = 'none';
        }

        function toggleDropdown1(event) {
            event.stopPropagation();
            dropMenu.style.display = dropMenu.style.display === 'none' ? 'block' : 'none';
            dropdownMenu.style.display = 'none';
        }
        document.addEventListener('click', function (event) {
            if ((dropMenu.style.display === 'block' || dropdownMenu.style.display === 'block') &&
                !dropMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropMenu.style.display = 'none';
                dropdownMenu.style.display = 'none';
            }
        });

        // Fetch Data from JSON and Populate Table
        fetch('account.json')
            .then(response => response.json())
            .then(data => {
                const accountData = document.getElementById('accountData');
                // Iterate over each account object in the JSON data
                data.forEach(account => {
                    const row = document.createElement('tr');
                    // Add each account detail to a table row
                    row.innerHTML = `
                        <td>${account.Account}</td>
                        <td>${account.MT}</td>
                        <td>${account.Balance}</td>
                        <td>${account.Equity}</td>
                        <td>${account['Equity %']}</td>
                        <td>${account['Open Trades (Lots)']}</td>
                        <td>${account.Pending}</td>
                        <td>${account.Day}</td>
                        <td>${account.Week}</td>
                        <td>${account.Month}</td>
                        <td>${account.Total}</td>
                    `;
                    accountData.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching account data:', error));


function showAccounts() {
    hideAll();
    document.getElementById("Accounts").style.display = "block";
}

function showTrades() {
    hideAll();
    document.getElementById("Trades").style.display = "block";
}

function showAnalysis() {
    hideAll();
    document.getElementById("Analysis").style.display = "block";
}

function showHistory() {
    hideAll();
    document.getElementById("History").style.display = "block";
}

function hideAll() {
    document.getElementById("Accounts").style.display = "none";
    document.getElementById("Trades").style.display = "none";
    document.getElementById("Analysis").style.display = "none";
    document.getElementById("History").style.display = "none";
}

