
// visitor counter start

function incrementCounter() {
    let currentCount = parseInt(localStorage.getItem('visitorCount')) || 0;
    currentCount++;
    document.getElementById("counter").innerText = currentCount;
    localStorage.setItem('visitorCount', currentCount);
}

window.onload = function () {
    incrementCounter();
};
// visitor counter end

// jQuery work start


$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".sd-navbar a").toggle();
        $(".icon-fire").hide();

        $(".sd-navbar").css({
            "height": "150px",
            "background-color": "#ebe4d6",
            // " transition": "height 0.8s ease"
          });
    });
});

// faq section
$(document).ready(function(){
    $('.question').click(function(){
      // Hide all answers
      $('.answer').not($(this).next('.answer')).slideUp();
      // Toggle answer of clicked question
      $(this).next('.answer').slideToggle();
    });
  });

// faq section End

// all products buttons


// jQuery work End