"use strict";

(function (Drupal, once) {
  Drupal.behaviors.speakersInit = {
    attach: function attach(context, settings) {
      once('speakersInit', '.speakers', context).forEach(function (e) {
        var wrapper = document.querySelector('.speakers__popup');
        var popupPhoto = wrapper.querySelector('.speakers__photo');
        var popupName = wrapper.querySelector('.speakers__name');
        var popupDesignation = wrapper.querySelector('.speakers__designation');
        var popupOrganization = wrapper.querySelector('.speakers__organization');
        var popupBio = wrapper.querySelector('.speakers__bio');
        var wrapperContent = document.querySelector('.speakers__popup--content');
        var button = document.getElementById('close');
        var speakersCard = document.querySelectorAll('.speakers__card');
        function toggleOpen() {
          wrapper.style.display = 'none';
        }
        button.addEventListener('click', toggleOpen);
        speakersCard.forEach(function (e) {
          var name = e.querySelector('.speakers__name');
          var photo = e.querySelector('.speakers__photo');
          var designation = e.querySelector('.speakers__designation');
          var organization = e.querySelector('.speakers__organization');
          var bio = e.querySelector('.speakers__bio');
          e.addEventListener('click', function () {
            popupPhoto.innerHTML = '';
            popupName.innerHTML = '';
            popupDesignation.innerHTML = '';
            popupOrganization.innerHTML = '';
            popupBio.innerHTML = '';
            popupPhoto.appendChild(photo.cloneNode(true));
            popupName.appendChild(name.cloneNode(true));
            popupDesignation.appendChild(designation.cloneNode(true));
            popupOrganization.appendChild(organization.cloneNode(true));
            popupBio.appendChild(bio.cloneNode(true));
            wrapper.style.display = 'flex';
          });
        });
      });
    }
  };
})(Drupal, once);