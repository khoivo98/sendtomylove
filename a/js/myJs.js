const textConfig = {
    text1: "Hế lu bẹp Thanhhh!",
    text2: "Anh có một số điều muốn nói nè. Nhớ xem cho hết nhá ^^",
    text5: "Không nha :33",
    text6: "Ờ. Đúng vậy  ",
    text7: "Haha. Cute thế này cơ mà :> Tui biết làm sao giờ...mỗi lần nhớ bạn tui đem ra ngắm à...2 tuần nay mơ bạn tới 5 lần rồi đấy  :(",
    text8: "Ááá..nhìn em điêu chưa kìa.a biết a sai rồi,a ko biện minh điều gì cả :(  ,mọi thứ a làm là có lí do,chỉ là quá khứ của a đã đỗ vỡ 2 lần rồi, có cơ hội a sẽ chia sẻ nhiều hơn :(",
    text9: "Eo,người iu tui đó,iu tui nhiều lắm đó, tui cũng yêu em nhiều lắm đấy ^^ muốn được gặp em lắm, muốn ôm em vào lòng lắm đó, muốn nói với em nhiều điều lắm :(",
    text10: "Thực ra, anh yêu em lắm, chắc là anh nhát, ko dám thể hiện tình cảm của anh :((",
    text11: "Chắc giờ em ghét anh lắm nhỉ, nhưng mà a thấy mỗi ngày a càng yêu em nhiều hơn :(( cho a cơ hội tán em lần nữa nhé ^^ , đồng ý thì rep insta a nhá <3",
    text12: "Hì...a biết bây giờ a có những sai lầm, em hãy cho a cơ hội để yêu em thêm lần nữa nhá, đồng ý thì rep insta a nhá <3 ^^",
};

$(document).ready(function() {
    // process bar
    setTimeout(function() {

        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);
    $(".bg1").hide();
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: "<h2 style='color:white'>" + textConfig.text1 + "</h2>",
            text: textConfig.text2,
            imageUrl: "img/cuteCat.jpg",
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: "Custom image",
        }).then(function() {
            $(".content").show(200);
        });
    }

    // switch button position
    function switchButton() {
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        var audio = new Audio("sound/Swish1.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function() {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });


    // show popup
    $("#yes").click(function() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text7,
            imageUrl: "img/4.jpg",
            imageWidth: 300,
            imageHeight: 300,
            confirmButtonText: 'Tiếp',
            background: '#FF3333 url("img/nen-tt.jpg")',
            imageAlt: "Custom image",
        }).then((result) => {
            Swal.fire({
                title: textConfig.text8,
                imageUrl: "img/2.jpg",
                imageWidth: 300,
                imageHeight: 300,
                confirmButtonText: 'Nữa',
                background: '#FAF0E6 url("img/input-bg.jpg")',
                imageAlt: "Custom image",
            }).then((result) => {
                Swal.fire({
                    title: textConfig.text9,
                    imageUrl: "img/6.jpg",
                    imageWidth: 300,
                    imageHeight: 300,
                    confirmButtonText: 'Ayzzaaa',
                    background: '#FAF0E6 url("img/nen3.jpg")',
                    imageAlt: "Custom image",
                }).then((result) => {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },

                    })

                    swalWithBootstrapButtons.fire({
                        title: textConfig.text10,
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'A muốn gì?',
                        cancelButtonText: 'Thì sao?',
                        background: '#FAF0E6 url("img/nen4.jpg")',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: textConfig.text11,
                                confirmButtonText: 'Dạ',
                            })

                        } else if (
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            Swal.fire({
                                    title: textConfig.text12,
                                    confirmButtonText: 'Dạ ^^'
                                }

                            )

                        }
                    })
                })
            })
        });
    });
});