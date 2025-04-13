
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("main .section");

  // Mostra apenas a primeira seção no carregamento
  sections.forEach((section, index) => {
      section.style.display = index === 0 ? "block" : "none";
  });

  // Função de navegação entre seções
  navLinks.forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();

          const targetId = link.getAttribute("href").substring(1);
          sections.forEach(section => {
              section.style.display = section.id === targetId ? "block" : "none";
          });

          navLinks.forEach(nav => nav.classList.remove("active"));
          link.classList.add("active");
      });
  });

  // Formulário de comentários
  const form = document.getElementById("contato-form");
  form.addEventListener("submit", e => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome && mensagem) {
          alert("Obrigado pelo seu comentário!");
          form.reset();
      } else {
          alert("Por favor, preencha todos os campos.");
      }
  });
});
