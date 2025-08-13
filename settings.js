const fs = require('node:fs');

const config = {
    owner: ["5493476274029"], // tu número en formato internacional (Argentina)
    name: "- nekoBot - Simple WhatsApp bot",
    sessions: "sessions",
    sticker: {
        packname: "Hecho por",
        author: "nekoBot"
    },
    messages: {
        wait: "*( Cargando )* Por favor espera...",
        owner: "*( Denegado )* No eres el propietario del bot!",
        premium: "*( Denegado )* Esta función es solo para usuarios premium",
        group: "*( Denegado )* Esta función es solo para grupos",
    },
    database: "neko-db",
    tz: "America/Argentina/Buenos_Aires" // zona horaria correcta para Argentina
}

module.exports = config;
  fs.unwatchFile(file);
  delete require.cache[file];
});
