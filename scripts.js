// document.addEventListener("DOMContentLoaded", () => {
//     const registerForm = document.getElementById("registerForm");
//     const message = document.getElementById("message");
  
//     registerForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
  
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
  
//       try {
//         const response = await fetch(
//           "http://localhost:8090/trenverde/api/usuarios/registrar",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               username,
//               password,
//               roles: [{ idRol: 1 }], // Ajusta el ID del rol según sea necesario
//             }),
//           }
//         );
  
//         if (response.ok) {
//           const newUser = await response.json();
//           message.textContent = `Usuario ${newUser.username} registrado correctamente.`;
//           message.style.color = "green";
//         } else {
//           const errorText = await response.text();
//           message.textContent = `Error al registrar el usuario: ${errorText}`;
//           message.style.color = "red";
//         }
//       } catch (error) {
//         message.textContent = "Error de conexión con el servidor.";
//         message.style.color = "red";
//       }
//     });
//   });