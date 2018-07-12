jQuery = $;

let url = "https://reqres.in/api/users";
let rows_per_page, total_rows;

function getPage(num) {

    $.get(url + "?page=" + num, function(res) {            
        $("#tbody").empty();
        for (let i = 0; i < res.data.length; i++) {
            row = res.data[i];
            rowHTML = "\
                <tr>\
                    <td>" + row["id"] + "</td>\
                    <td>" + row["first_name"] + "</td>\
                    <td>" + row["last_name"] + "</td>\
                    <td><img src='" + row["avatar"] + "'/></td>\
                </tr>\
            ";

            $("#tbody").append(rowHTML);
        }

        $("#pagination li").removeClass("active");
        $("#pagination li:eq(" + (num - 1) + ")").addClass("active");
    });

}

$(document).ready(function() {

    $.get(url, function(res) {
        rows_per_page = res.per_page;
        total_pages = res.total_pages;
        for (let x = 1;  x <= total_pages; x++) {
            $('#pagination').append('<li><a href="javascript:;" onclick="getPage('+x+');">'+x+'</a></li>');
        }
        $("#tbody").empty();
        for (let i = 0; i < res.data.length; i++) {
            row = res.data[i];
            rowHTML = "\
                <tr>\
                    <td>" + row["id"] + "</td>\
                    <td>" + row["first_name"] + "</td>\
                    <td>" + row["last_name"] + "</td>\
                    <td><img src='" + row["avatar"] + "'/></td>\
                </tr>\
            ";

            $("#tbody").append(rowHTML);
        }
    });

});