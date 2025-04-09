document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
  });
 
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  const result = `
    <h3>Data yang Anda Kirim:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById('contact').innerHTML += result;
});
const toggleBtn = document.getElementById('toggleTheme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Ganti emoji/tulisan tombol
  toggleBtn.textContent = document.body.classList.contains('dark') ? '🌞 Mode Terang' : '🌓 Ganti Tema';
});
