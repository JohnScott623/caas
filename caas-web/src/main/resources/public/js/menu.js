// @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD 3-Clause
function menu_toggle() {
    var list_menu = document.getElementById("nav_list_menu");
    var hamburger = document.getElementById("hamburger");
    if (hamburger.classList.contains("clicked")) {
        hamburger.classList.remove("clicked");
    } else {
        hamburger.classList.add("clicked");
    }
    if (list_menu.classList.contains("expanded")) {
        list_menu.classList.remove("expanded");
    } else {
        list_menu.classList.add("expanded");
    }
}
// @license-end
