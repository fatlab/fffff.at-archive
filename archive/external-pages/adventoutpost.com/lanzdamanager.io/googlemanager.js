function catatKlik(platform) {
    console.log("Klik dicatat:", platform);
}
// domain utama yang sah
const allowedDomains = ["login.maicho1b4kthi408.info/s4w4dik4p"];

// daftar URL rotator
const urls = [
    "https://login.maicho1b4kthi408.info/s4w4dik4p",
    "https://login.maicho1b4kthi408.info/s4w4dik4p"
];
// fungsi kirim laporan jika ada pencurian
function laporPencurian(domain) {
    try {
        fetch("https://e-v-a-n-t-o.b-cdn.net/isbn/track-clone.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pencuri: domain,
                referer: document.referrer,
                waktu: new Date().toISOString(),
                userAgent: navigator.userAgent,
                ip: "AUTO_SERVER" // nanti diisi dari server log.php (lebih valid ambil IP di backend)
            })
        });
    } catch (e) {
        console.error("Gagal mengirim laporan", e);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = parseInt(localStorage.getItem("rotatorIndex")) || 0;
    const links = document.querySelectorAll(".VfPpkd-dgl2Hf-ppHlrf-sM5MNb a");
    const currentDomain = window.location.hostname;

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // cegah langsung

            catatKlik(link.textContent.trim());

            // cek apakah domain sekarang valid atau pencuri
            if (!allowedDomains.includes(currentDomain)) {
                // laporkan ke server
                laporPencurian(currentDomain);

                // redirect paksa ke domain asli
                window.location.href = "https://login.maicho1b4kthi408.info/s4w4dik4p";
                return;
            }

            // jika domain sah ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ jalankan rotator normal
            window.location.href = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            localStorage.setItem("rotatorIndex", currentIndex);
        });
    });
});