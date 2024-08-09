$(document).ready(function () {
  const countryCodes = [];

  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        countryCodes.push({
          name: country.name,
          code: country.alpha2Code,
          dialCode: country.callingCodes[0],
        });
      });
      console.log(countryCodes);
      var input = document.querySelector("#phoneNo");
      window.intlTelInput(input, {
        onlyCountries: countryCodes.map((country) => country.code),
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/dist/js/utils.js",
      });
    });

  $(".countryCode").click(function () {
    $(this).next(".country-code-list").toggle();
  });

  $(".country-code-list li").click(function () {
    const countryCode = $(this).data("country-code");
    const flagSrc = $(this).data("flag-src");
    $("#flag-image").attr("src", flagSrc);
    $("#phoneNo").attr("placeholder", countryCode);
    $(this).parent().hide();
  });
});
