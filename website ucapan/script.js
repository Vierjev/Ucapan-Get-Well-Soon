musik = "music/ten thousand.mp3";
foto = "img/enay4.jpg";
background = "img/enay3.jpg";
noWhatsapp = "6282135277298";

async function popUp() {

    await swalo.fire({ title: "Semoga Bahagia Setiap Hari Enay CANTIKA", imageUrl: "img/sticker1.gif" });
    await swalo.fire({ title: "Jangan lupa di jaga kesehatannya (Di atur juga yah pola makan nya ya, boleh makan pedes tapi di batasi)", imageUrl: "img/sticker3.gif" });
    await swalo.fire({ title: "Dan Semoga Kita Bisa Selalu Melengkapi Satu Sama Lain Hehehe", imageUrl: "img/sticker4.gif" });

    kirimPesan();


} DekaTutorial(musik, foto, background, noWhatsapp);
