const flashData = $('.flash-data').data('flashdata');
console.log(flashData);
if (flashData == 'welcome') {
    swal({
        title: "Semangat Datang!",
        text: "NEO | Winteq Parts Center",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        type: "info"
    }).catch(swal.noop)
}
if (flashData == 'addcart') {
    swal(
        swal("Yeayy!", "Komponen yang kamu butuhkan sekarang ada di-Troli!", "success")
    );
}
if (flashData == 'updatecart') {
    swal(
        swal("Yeayy!", "Komponen di-Troli kamu sudah ter-Update!", "success")
    );
}
if (flashData == 'outStock') {
    swal(
        swal("Maaf!", "Stok kami tidak cukup!", "error")
    );
}
if (flashData == 'verifyUser') {
    swal(
        swal("Berhasil", "User telah diverifikasi", "success")
    );
}
if (flashData == 'emptyCart') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Yahh, Troli kamu kosong!!</br> Cari part lagi kuy"

    }, {
        type: 'danger',
        timer: 1000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}
if (flashData == 'updatedPart') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Data Part berhasil di-update."

    }, {
        type: 'success',
        timer: 1000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}
if (flashData == 'errorCheckout') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

    }, {
        type: 'danger',
        timer: 8000,
        placement: {
            from: 'top',
            align: 'left'
        }
    });
}
if (flashData == 'addFav') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Part Favorit berhasil ditambahkan."

    }, {
        type: 'success',
        timer: 1000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}
if (flashData == 'register') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Pendaftaran kamu telah berhasil, data kamu akan segera kami verifikasi."

    }, {
        type: 'info',
        timer: 1000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}
if (flashData == 'alreadyRegister') {
    $.notify({
        icon: "nc-icon nc-app",
        message: "Kamu sudah terdaftar di system kami, silahkan login."

    }, {
        type: 'info',
        timer: 1000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}
// Profile 
if (flashData == 'updateProfile') {
    swal(
        swal("Yeayy!", "Profil kamu berhasil di-Update!", "success")
    );
}