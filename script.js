// Show and hide menu
function OpenNav(){
    document.getElementById("Nav").style.width = "100%";
    }
    function CloseNav(){
    document.getElementById("Nav").style.width = "0%";
    }

    // url

    function url() {
        location.href="https://www.hay8833.com/?inviteCode=3128320";
    }

    // ==========================================
    window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-128px";
            }
        }

    // When the user clicks on the button, scroll to the top of the document
    function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }