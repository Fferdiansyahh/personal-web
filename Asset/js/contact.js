var contactForm = document.getElementById("contactForm")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var form = e.target;
    var formData = new FormData(form)

    var data = Object.fromEntries(formData.entries())

    console.log(data)
    console.log(data.phoneNumber)

    var link = document.createElement('a');
    link.href = `mailto:ansyah.ferdi5@gmail.com?subject=${data.subject}&body=Selamat siang. Nama saya ${data.name}.%0D%0ASilahkan hubungi saya di ${data.email} atau ${data.phoneNumber}. Skill saya adalah ${data.skill}. Berikut pesan saya : ${data.message}`

    link.click();
})
