// @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD 3-Clause
// SPDX-License-Identifier: BSD-3-Clause
$(function () {
    $("#loading_subscribe").hide();
    $("#form_subscribe").submit(function (event) {
        event.preventDefault();
        var email = $("#email").val();
        $("#input_msg").text("");
        $("#loading_subscribe").show();
        $.post("/subscribe/", {"email": email, "domain": domain}, function (val) {
            $("#loading_subscribe").hide();
            data = JSON.parse(val);
            $("#input_msg").text(data.message);
        });
    });
});
// @license-end