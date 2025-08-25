const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.init({
    publicKey: "0gbnq-kWUHBkde8ry",
  });
  emailjs.sendForm("service_g51vgih", "template_ial10ii", contactForm)
    .then((response) => {
      showAlert("success");
    })
    .catch((error) => {
      showAlert("error");
    });
  form.reset();
});

function showAlert(type) {
  const alert = document.createElement("div");

  if (type === "success") {
    alert.innerHTML = `
    <div role="alert" id="alert" class="bg-zinc-100 dark:bg-zinc-950 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-zinc-900 transform hover:scale-105 fixed bottom-10 right-8 z-[9999] h-10 Inter-Thight font-normal align-middle top-24 left-1/2 -translate-x-1/2 text-nowrap md:-translate-x-0 md:left-auto md:top-auto md:bottom-10 md:right-8 Inter-Thight alert w-64">
        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-5 w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
           <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
        <p class="font-semibold">E-mail enviado com Sucesso.</p>
    </div>`;
  } else {
    alert.innerHTML = `
    <div role="alert" class="bg-zinc-100 dark:bg-zinc-950 border-l-4 border-red-500 dark:border-red-600 text-red-600 dark:text-red-200 p-2 rounded-lg flex items-center transition duration-300 ease-in-out transform fixed top-24 left-1/2 -translate-x-1/2 text-nowrap md:-translate-x-0 md:left-auto md:top-auto md:bottom-10 md:right-8 z-[9999] h-10 Inter-Thight font-normal align-middle alert">
        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-5 w-5 flex-shrink-0 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
        <p class="font-semibold">Erro ao enviar o E-mail.</p>
    </div>
    `;
  }
  document.body.appendChild(alert);
}
