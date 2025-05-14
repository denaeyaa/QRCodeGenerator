        function generateQRCode() {
            const qrtext = document.getElementById("qrtext").value;
            const qrcodeDiv = document.getElementById("qrcode");

            qrcodeDiv.innerHTML = "";

            if (qrtext) {
                const qrcode = new QRCode(qrcodeDiv, {
                    text: qrtext,
                    width: 130,
                    height: 130
                });
            } else {
                qrcodeDiv.innerHTML = "<p>Silakan masukkan teks terlebih dahulu.</p>";
            }
        }