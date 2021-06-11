var input = document.querySelector("#ContactPhoneNo");
intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            success(countryCode);
        });
    },
    utilsScript: "js/utils.js"
});

$('#ContactEnquiry').change(function () {
    $('#ExpandRow').toggle();
});