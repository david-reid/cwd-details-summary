window.onload = function() {

    const elements = document.querySelectorAll("details");

    elements.forEach( e => {
        e.addEventListener("toggle", event => {
            if ( e.open ) {
                const others = [...elements].filter(el => el != e);
                others.forEach( o => { o.open = false });
            }
        });
    });
}
