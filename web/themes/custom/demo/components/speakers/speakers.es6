(function (Drupal, once) {
  Drupal.behaviors.speakersInit = {
    attach: function attach(context, settings) {
      once('speakersInit', '.speakers', context).forEach(function (e) {
        const wrapper = document.querySelector('.speakers__popup');
        const popupPhoto = wrapper.querySelector('.speakers__photo');
        const popupName = wrapper.querySelector('.speakers__name');
        const popupDesignation = wrapper.querySelector('.speakers__designation');
        const popupOrganization = wrapper.querySelector('.speakers__organization');
        const popupBio = wrapper.querySelector('.speakers__bio');
        const wrapperContent = document.querySelector('.speakers__popup--content');
        const button = document.getElementById('close');
        const speakersCard = document.querySelectorAll('.speakers__card');

        function toggleOpen() {
          wrapper.style.display = 'none';
        }
        button.addEventListener('click', toggleOpen);

        speakersCard.forEach(function (e) {
          const name = e.querySelector('.speakers__name');
          const photo = e.querySelector('.speakers__photo');
          const designation = e.querySelector('.speakers__designation');
          const organization = e.querySelector('.speakers__organization');
          const bio = e.querySelector('.speakers__bio');
          e.addEventListener('click', () => {
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
