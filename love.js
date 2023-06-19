document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crud-form');
    const numberInput=document.getElementById('number-input')
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const genreInput =document.getElementById('genre-input')
    const table = document.getElementById('records-table');
  
    let records = [];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const number=numberInput.value
      const title =titleInput.value;
      const author=authorInput.value
      const genre=genreInput.value
      createRecord(number,title, author,genre);
    });
  
    function createRecord(number, title,author,genre) {
      const record = {
        id: Date.now(),
        number:number,
        title: title,
        author:author,
        genre:genre
      };
      records.push(record);
      renderTable();
      clearForm();
    };
  
    function deleteRecord(id) {
      records = records.filter(record => record.id !== id);
      renderTable();
    }
  
    function updateRecord(newNumber,id, newTitle,newAuthor,newGenre) {
      const record = records.find(record => record.id === id);
      if (record) {
        record.number = newNumber;
        record.title = newTitle;
        record.author = newAuthor;
        record.genre=newGenre;
      }
      renderTable();
    }
    
  
    function renderTable() {
      table.innerHTML = `
        <tr>
        <th>No.</th>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Actions</th>
      
        </tr>
      `;
      records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = 
        ` <td>${record.number}</td>
          <td>${record.id}</td>
          <td>${record.title}</td>
          <td>${record.author}</td>
          <td>${record.genre}</td>
          <td>
            <button class="delete-button">Delete</button>
            <button class="update-button">Update</button>
          </td>
        `;
        const deleteButton = row.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
          deleteRecord(record.id);
        });
        const updateButton = row.querySelector('.update-button');
        updateButton.addEventListener('click', function() {
          const newNumber =prompt('Enter a new number:',record.number);
          const newTitle = prompt('Enter a new name:', record.title);
          const newAuthor= prompt('Enter a new age:', record.author);
          const newGenre=prompt('Enter a new country:',record.genre)
          updateRecord(record.id,newNumber, newTitle, newAuthor, newGenre);
        });
        table.appendChild(row);
      });
    }
  
    function clearForm() {
      numberInput.value=''
      titleInput.value = '';
      authorInput.value = '';
      genreInput.value='';
    }
  
    // Initial rendering
    renderTable();
  });
  let translations = {
    en: {
      title: "Welcome",
      greeting: "Hello!",
      description: "This is a multilingual website example."
    },
    fr: {
      title: "Bienvenue",
      greeting: "Bonjour !",
      description: "Voici un exemple de site web multilingue."
    }
  };
  
  // Function to handle language switching
  function changeLanguage() {
    let selectedLanguage = document.getElementById("language-select").value;
  
    // Update text content based on the selected language
    document.getElementById("title").textContent = translations[selectedLanguage].title;
    document.getElementById("greeting").textContent = translations[selectedLanguage].greeting;
    document.getElementById("description").textContent = translations[selectedLanguage].description;
  }
  
  // Initialize language on page load
  changeLanguage();
  function changLanguage() {
    var selectedLanguage = document.getElementById("language-selec").value;
  
    // Update content based on the selected language
    if (selectedLanguage === "f") {
      document.getElementById("titl").textContent = "Rêves";
      document.getElementById("poem").innerHTML = `Accroche-toi aux rêves<br>
                                                    Car si les rêves meurent<br>
                                                    La vie est un oiseau aux ailes brisées<br>
                                                    Qui ne peut pas voler.<br>
                                                    Accroche-toi aux rêves<br>
                                                    Car quand les rêves partent<br>
                                                    La vie est un champ stérile<br>
                                                    Gelé avec de la neige.<br>`;
      document.getElementById("author").textContent = "Écrit par : Joseph Owino";
    } else if(selectedLanguage === "e"){
      // Default to English if selected language is not recognized or is English
      document.getElementById("titl").textContent = "Dreams";
      document.getElementById("poem").innerHTML = `Hold fast to dreams<br>
                                                    For if dreams die<br>
                                                    Life is a broken-winged bird<br>
                                                    That cannot fly.<br>
                                                    Hold fast to dreams<br>
                                                    For when dreams go<br>
                                                    Life is a barren field<br>
                                                    Frozen with snow.<br>`;
      document.getElementById("author").textContent = "Written By: Joseph Owino";
    }
     else{
      document.getElementById("titl").textContent = "Ndoto";
      document.getElementById("poem").innerHTML = `Shikamana na ndoto<br>
      Kwa sababu ikiwa ndoto zitakufa<br>
      Maisha ni ndege mwenye mabawa yaliyovunjika<br>
      Ambaye hawezi kuruka.<br>
      Shikamana na ndoto<br>
      Kwa sababu ndoto zikienda zote<br>
      Maisha ni shamba lisilo na rutuba<br>
      Lililofunikwa na theluji.<br>`;
      document.getElementById("author").textContent = "Written By: Joseph Owino";
     }
  }
  changLanguage()
  function chngeLanguage() {
    var selectedLanguage = document.getElementById("language-selct").value;
  
    // Update content based on the selected language
    if (selectedLanguage === "fr") {
      document.getElementById("tit").textContent = "Un Livre";
      document.getElementById("poe").innerHTML = `Il n'y a pas de frégate comme un livre<br>
                                                    Pour nous emmener loin,<br>
                                                    Ni de destriers comme une page<br>
                                                    De poésie bondissante.<br>
                                                    Les plus pauvres peuvent entreprendre cette traversée<br>
                                                    Sans oppression de péage ;<br>
                                                    Que le chariot est frugal<br>
                                                    Qui porte une âme humaine !<br>`;
      document.getElementById("autho").textContent = "Écrit par : Gorge B";
    } else {
      // Default to English if selected language is not recognized or is English
      document.getElementById("tit").textContent = "A Book";
      document.getElementById("poe").innerHTML = `There is no frigate like a book<br>
                                                    To take us lands away,<br>
                                                    Nor any coursers like a page<br>
                                                    Of prancing poetry.<br>
                                                    This traverse may the poorest take<br>
                                                    Without oppress of toll;<br>
                                                    How frugal is the chariot<br>
                                                    That bears a human soul!<br>`;
      document.getElementById("autho").textContent = "Written By: Gorge B";
    }
  }
  changLanguage()
  function changelanguage() {
    var selectedLanguage = document.getElementById("language-slect").value;
  
    // Update content based on the selected language
    if (selectedLanguage === "fr") {
      document.getElementById("ttle").textContent = "Le Voyage Acharné de l'Éducation";
      document.getElementById("em").innerHTML = `La fille d'Akoth, Shantel,<br>
                                                    Excellente au secondaire sans une seule dentelle.<br>
                                                    Elle se prépare maintenant à rejoindre l'université,<br>
                                                    Où elle étudiera avec ferveur et avidité.<br>
                                                    Elle a travaillé dur pour en arriver là,<br>
                                                    Et son succès ne connaît aucune limite ni aucun âge.<br>
                                                    Elle est prête à s'envoler comme un aigle en plein vol,<br>
                                                    Son avenir est brillant, tel un phare de lumière.<br>
                                                    Le cœur d'Akoth est empli de fierté,<br>
                                                    Car les réalisations de sa fille ne peuvent être niées.<br>
                                                    Il sait qu'avec son dévouement et sa passion,<br>
                                                    Elle atteindra tous ses objectifs et laissera une impression durable.<br>
                                                    Les yeux de Shantel brillent d'anticipation,<br>
                                                    Alors qu'elle entre dans une nouvelle phase de l'éducation.<br>
                                                    La tête haute et l'esprit indompté,<br>
                                                    Elle s'épanouira à l'université et laissera une trace non dite.<br>`;
      document.getElementById("auth").textContent = "Écrit par : Collins Gachomo";
    } else {
      // Default to English if selected language is not recognized or is English
      document.getElementById("ttle").textContent = "The Sweat Journey Of Education";
      document.getElementById("em").innerHTML = `Akoth's daughter Shantel,<br>
                                                    Excels in secondary without a single dentel.<br>
                                                    She's now off to join university,<br>
                                                    Where she'll study with fervor and avidity.<br>
                                                    She's worked hard to get to this stage,<br>
                                                    And her success knows no boundary or age.<br>
                                                    She's ready to soar like an eagle in flight,<br>
                                                    Her future is bright, like a beacon of light.<br>
                                                    Akoth's heart swells with pride,<br>
                                                    For his daughter's achievements can't be denied.<br>
                                                    He knows that with her dedication and passion,<br>
                                                    She'll achieve all her goals and make a lasting impression.<br>
                                                    Shantel's eyes gleam with anticipation,<br>
                                                    As she steps into a new phase of education.<br>
                                                    With her head held high and her spirit unbroken,<br>
                                                    She'll thrive in university and leave a trail unspoken.<br>`;
      document.getElementById("auth").textContent = "Written By: Collins Gachomo";
    }
  }
 
  changelanguage()
  const reviewsContainer = document.getElementById('reviews');

// Function to add a new review
const addReview = (name, review) => {
  // Create the review container
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('testimonial');

  // Create the name element
  const nameElement = document.createElement('h2');
  nameElement.textContent = name;

  // Create the review element
  const reviewElement = document.createElement('p');
  reviewElement.textContent = review;

  // Append the name and review elements to the review container
  reviewContainer.appendChild(nameElement);
  reviewContainer.appendChild(reviewElement);

  // Append the review container to the reviews container
  reviewsContainer.appendChild(reviewContainer);
};

// Function to handle the form submission
const submitReview = (event) => {
  event.preventDefault();

  // Get the input values
  const nameInput = document.getElementById('name-input');
  const reviewInput = document.getElementById('review-input');
  const name = nameInput.value;
  const review = reviewInput.value;

  // Validate inputs
  if (name.trim() === '' || review.trim() === '') {
    alert('Please enter both your name and review.');
    return;
  }

  // Add the review to the reviews section
  addReview(name, review);

  // Clear the form inputs
  nameInput.value = '';
  reviewInput.value = '';
};

// Add event listener for form submission
const form = document.getElementById('new-review-form');
form.addEventListener('submit', submitReview);
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
  
  
  