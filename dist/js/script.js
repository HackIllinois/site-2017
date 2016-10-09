var signUpComponent = {

  el: {
    signupForm: document.getElementById('2017-signup'),
    signupSuccess: document.getElementById('signup-success'),
    signupError: document.getElementById('signup-error')
  },

  saveEmail: function(event) {
    event.preventDefault();
    var parent = this;
    var firebaseRef = new Firebase("https://hackillinois-2017.firebaseio.com/users/emails");
    firebaseRef.push({
      email: document.getElementById('2017-signup').email.value,
    }, parent.signupErrorHandler);
    return false;
  },

  bindEventHandlers: function() {
    var parent = this;
    parent.el.signupForm.addEventListener("submit", parent.saveEmail);
  },

  signupErrorHandler: function(error) {
    var parent = this;
    if (!error) {
      parent.el.signupSuccess.classList.toggle("show");
    } else {
      parent.el.signupError.classList.toggle("show");
    }
  },

  init: function() {
    this.bindEventHandlers();
  }
};

(function() {
  signUpComponent.init();
})();
