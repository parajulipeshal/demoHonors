document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('advisor-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.querySelector('#name');
    var email = form.querySelector('#email');
    var note = form.querySelector('.form-note');

    if (!name.value.trim() || !email.value.trim()) {
      note.textContent = 'Please fill in your name and email before requesting a call.';
      note.style.color = 'var(--snow-orange-dark)';
      return;
    }

    note.style.color = '';
    note.textContent = "Thanks — an advisor will follow up within three business days.";
    form.reset();
  });
  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      document.documentElement.classList.toggle('nav-open');
    });
    // close nav when a link is clicked
    document.querySelectorAll('nav a').forEach(function(a){
      a.addEventListener('click', function(){
        document.documentElement.classList.remove('nav-open');
        if(navToggle) navToggle.setAttribute('aria-expanded','false');
      })
    });
    // close on escape
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        document.documentElement.classList.remove('nav-open');
        if(navToggle) navToggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // submenu toggles for mobile and keyboard
  document.querySelectorAll('.submenu-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      var submenu = btn.nextElementSibling;
      if(submenu){
        if(expanded){ submenu.style.display = 'none'; } else { submenu.style.display = 'block'; }
      }
    });
    btn.addEventListener('keydown', function(e){
      if(e.key === 'ArrowDown'){
        e.preventDefault();
        var first = btn.nextElementSibling && btn.nextElementSibling.querySelector('a');
        if(first) first.focus();
      }
    });
  });

  
});

