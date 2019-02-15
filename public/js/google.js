function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();

        if (googleUser)
          console.log('Successfully logged in with Facebook');

        $('#name').text(profile.getName());
        $('#photo').attr('src', profile.getImageUrl());
        // The ID token you need to pass to your backend:

      }
