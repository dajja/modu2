const view = {};
// let dataUsername = '';
// view.dataUser = (dataUser) => {
//     dataUsername = dataUser;
// }
let productList = {
    listSale: [
        {
            id: 1,
            name: "Nam An - Cơm Gà Hội An",
            image: "./jsdata/imagesale/banner2.jpg",
            category: "Cơm",
            response: "4.7",
            time: "20 phút",
            meter: "2 km",
            sale: "Only on Grab",
        },
        {
            id: 2,
            name: "Cơm Thố Anh Nguyễn - Chùa Láng",
            image: "./jsdata/imagesale/banner3.jpg",
            category: "Business Order, Cơm, Tạp Dề Bạc",
            response: "4.4",
            time: "20 phút",
            meter: "1,8 km",
            sale: "Ưu đãi đến 60K",
        },
        {
            id: 3,
            name: "Oisshi - Cơm Bò Quốc Dân Nhật Bản",
            image: "./jsdata/imagesale/banner4.jpg",
            category: "Bún - Phở - Cháo, Bún - Phở - Mì - Hủ Tiếu",
            response: "4.7",
            time: "25 phút",
            meter: "2 km",
            sale: "Deal trưa đến 0Đ",
        },
        {
            id: 4,
            name: "Cơm Gà Nam An - Láng Hạ",
            image: "./jsdata/imagesale/banner5.jpg",
            category: "Cơm, Tạp Dề Vàng",
            response: "4.7",
            time: "20 phút",
            meter: "1,8 km",
            sale: "Grab Ngon Rẻ - Deal Cuối Tuần",
        },
        {
            id: 5,
            name: "Mehsiya - Cơm Ngon Nhật Bản",
            image: "./jsdata/imagesale/banner6.jpg",
            category: "Cơm",
            response: "4.5",
            time: "20 phút",
            meter: "0,4 km",
            sale: "Ưu đãi đến 30K",
        },
        {
            id: 6,
            name: "Comi ChefHome - Ẩm Thực Trung Hoa Phong Vị Việt",
            image: "./jsdata/imagesale/banner7.jpg",
            category: "Cơm, Tạp Dề Vàng",
            response: "4.4",
            time: "20 phút",
            meter: "1,6 km",
            sale: "Deal trưa 0Đ",
        },
        {
            id: 7,
            name: "Mỳ Trộn Indomie Gấu Bé",
            image: "./jsdata/imagesale/banner8.jpg",
            category: "Bún - Phở - Cháo, Tạp Dề Vàng",
            response: "4.6",
            time: "20 phút",
            meter: "1,8 km",
            sale: "Deal trưa đến 0Đ",
        },
        {
            id: 8,
            name: "Starbucks Coffee - TTTM Vincom Metropolis",
            image: "./jsdata/imagesale/banner9.jpg",
            category: "Cà Phê - Trà - Sinh Tố - Nước ép",
            response: "4.5",
            time: "15 phút",
            meter: "0,3 km",
            sale: "Combo Breakfast độc quyền Starbucks - Grabfood",
        },
    ],
    listfood: [
        {
            name: "Mì Ý",
            image: "./photolistan/photo1.jpeg",
        },
        {
            name: "Pizza",
            image: "./photolistan/photo2.jpg",
        },
        {
            name: "Cơm tấm",
            image: "./photolistan/photo3.jpeg",
        },
        {
            name: "Cơm",
            image: "./photolistan/photo4.jpg",
        },
        {
            name: "Gà Rán - Burger",
            image: "./photolistan/photo5.jpg",
        },
        {
            name: "Gà",
            image: "./photolistan/photo6.jpg",
        },
        {
            name: "Hiso Party",
            image: "./photolistan/photo7.jpeg",
        },
        {
            name: "Thịt",
            image: "./photolistan/photo8.jpeg",
        },
        {
            name: "Salad",
            image: "./photolistan/photo9.jpg",
        },
        {
            name: "Bánh Mì",
            image: './photolistan/photo10.jpeg',
        },
        {
            name: "Trà sữa",
            image: "./photolistan/photo11.jpeg",
        },
        {
            name: "Cháo",
            image: "./photolistan/photo12.jpeg",
        },
        {
            name: "Đồ uống lạnh",
            image: "./photolistan/photo13.jpeg",
        },
    ],
    listBanhMi: [
        {
            id: 1,
            name: "Bacon, Egg & Cheese Croissant Bun",
            image: "./anhOStrabucks/sandwich/banhmi1.webp",
            category: "Dòng sản phẩm mang dấu ấn riêng của Starbucks với lớp vỏ bánh nghìn lớp cùng hình dạng nón quen thuộc với trứng, phô mai và thịt xông khói.",
            priceHT: "93.000",
            priceTT: 93000,
        },
        {
            id: 2,
            name: "Chicken Fanitas Panini",
            image: "./anhOStrabucks/sandwich/banhmi2.webp",
            category: "Món bánh kẹp phổ biến của Mexico với thịt gà được nướng mềm cùng ớt chuông, hành tây tạo nên vị ngọt bùi và lớp phô mai thơm ngậy.",
            priceHT: "70.000",
            priceTT: 70000,
        },
        {
            id: 3,
            name: "Figaro Club Panini",
            image: "./anhOStrabucks/sandwich/banhmi3.webp",
            category: "Chiếc bánh mì nướng nổi tiếng đến từ nước Ý với sự kết hợp phá cách giữa thịt gà, sốt mayonaise và thật nhiều loại rau để bữa ăn thêm tươi mát.",
            priceHT: "80.000",
            priceTT: 80000,
        },
        {
            id: 4,
            name: "Chiecken Apple Slaw Whole Wheat Sandwich",
            image: "./anhOStrabucks/sandwich/banhmi4.webp",
            category: "Được làm từ bánh mỳ nguyên cám rất tốt cho sức khỏe, với phần nhân là sự kết hợp tuyệt vời giữa gà và salad táo, mang lại cảm giác tươi mát và cân bằng cho một bữa ăn bận rộn.",
            priceHT: "85.000",
            priceTT: 85000,
        },
        {
            id: 5,
            name: "Bacon & Cheese Ciabatta",
            image: "./anhOStrabucks/sandwich/banhmi5.webp",
            category: "Dòng sản phẩm Ciabatta đã trở lại mùa lễ hội này, với những hương vị đặc trưng hấp dẫn đến từ bacon và phô mai thơm ngậy.",
            priceHT: "85.000",
            priceTT: 85000,
        },
    ],
    listBanhSung: [
        {
            id: 1,
            name: "Ham & Cheese Croissant",
            image: "./anhOStrabucks/savoury/banhsungbo1.webp",
            category: "Sự kết hợp cổ điển giữa bánh sừng bò nổi tiếng thế giới kèm thịt nguội và phô mai.",
            priceHT: "75.000",
            priceTT: 75000,
        },
    ],
    listCaPhe: [
        {
            id: 1,
            name: "Hot Caffè Latte",
            image: "./anhOStrabucks/Espresso & Coffee/caphe1.webp",
            category: "Sữa được đánh nóng với shot Espresso đậm đà, đây là thức uống phổ biến nhất của chúng tôi.",
            priceHT: "90.000",
            priceTT: 90000,
        },
        {
            id: 2,
            name: "Iced Caffè Latte",
            image: "./anhOStrabucks/Espresso & Coffee/caphe2.webp",
            category: "Shot Espresso đậm đà được hoàn thiện trọn vẹn với món sữa lạnh, đây là thức uống phổ biến nhất của chúng tôi.",
            priceHT: "90.000",
            priceTT: 90000,
        },
        {
            id: 3,
            name: "Hot Flat White",
            image: "./anhOStrabucks/Espresso & Coffee/caphe3.webp",
            category: "Shot Espresso trích xuất theo phương pháp Ristretto đậm đà kết hợp cùng sữa đánh nóng.",
            priceHT: "95.000",
            priceTT: 95000,
        },
        {
            id: 4,
            name: "Iced Flat White",
            image: "./anhOStrabucks/Espresso & Coffee/caphe4.webp",
            category: "Shot Espresso trích xuất theo phương pháp Ristretto đậm đà kết hợp cùng sữa lạnh.",
            priceHT: "95.000",
            priceTT: 95000,
        },
        {
            id: 5,
            name: "Iced Caffè Mocha",
            image: "./anhOStrabucks/Espresso & Coffee/caphe5.webp",
            category: "Cà phê Espresso và hương vị sô cô la đậm đà, ngọt đắng kết hợp với sữa tươi lạnh và phủ lớp kem mịn màng trên bề mặt.",
            priceHT: "95.000",
            priceTT: 95000,
        },
        {
            id: 6,
            name: "Iced Caffè  Americano",
            image: "./anhOStrabucks/Espresso & Coffee/caphe6.webp",
            category: "Sự kết hợp cổ điển giữa bánh sừng bò nổi tiếng thế giới kèm thịt nguội và phô mai.",
            priceHT: "75.000",
            priceTT: 75000,
        },
    ],
    listComTho: [
        {
            id: 1,
            name: "Cơm thố đặc biệt",
            image: "./anhComtho/comtho/comtho1.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "78.000",
            priceTT: 78000,
        },
        {
            id: 2,
            name: "Cơm thố ốp la",
            image: "./anhComtho/comtho/comtho2.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "40.000",
            priceTT: 40000,
        },
        {
            id: 3,
            name: "Cơm thố bò",
            image: "./anhComtho/comtho/comtho3.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "58.000",
            priceTT: 58000,
        },
        {
            id: 4,
            name: "Cơm thố gà",
            image: "./anhComtho/comtho/comtho4.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "53.000",
            priceTT: 53000,
        },
        {
            id: 5,
            name: "Cơm thố xá xíu",
            image: "./anhComtho/comtho/comtho5.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "58.000",
            priceTT: 58000,
        },
        {
            id: 6,
            name: "Cơm thố gà quay",
            image: "./anhComtho/comtho/comtho6.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "53.000",
            priceTT: 53000,
        },
        {
            id: 7,
            name: "Cơm thố gà nướng",
            image: "./anhComtho/comtho/comtho7.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "53.000",
            priceTT: 53000,
        },
        {
            id: 8,
            name: "Cơm thố Dương Châu",
            image: "./anhComtho/comtho/comtho8.webp",
            category: "Giá trên đã gồm 5000đ tiền hộp.",
            priceHT: "40.000",
            priceTT: 40000,
        },
    ],
    listBonusFRice: [
        {
            id: 1,
            name: "Cơm thố thêm",
            image: "./anhComtho/monthem/monthem1.webp",
            category: "",
            priceHT: "28.000",
            priceTT: 28000,
        },
        {
            id: 2,
            name: "Đĩa thịt xá xíu",
            image: "./anhComtho/monthem/monthem2.webp",
            category: "",
            priceHT: "56.000",
            priceTT: 56000,
        },
        {
            id: 3,
            name: "Đĩa thịt gà nướng",
            image: "./anhComtho/monthem/monthem3.webp",
            category: "",
            priceHT: "56.000",
            priceTT: 56000,
        },
    ]
}

view.saleCode = () => {
    let listSaleProduct = "";
    for (let i = 0; i < productList.listSale.length; i++) {
        listSaleProduct += `
        <div id="" class="sale-product saleProductEvent">
            <div class="saleTag">
                <img src="${productList.listSale[i].image}" alt="">
                <div class="saleTagFirst"> Promo </div>
                <div class="saleTagLast"></div>
            </div>
            <h6 class="saleName">${productList.listSale[i].name}</h6>
            <div class="infoSale">${productList.listSale[i].category}</div>
            <div class="infoSale-3">
                <div class="infoSale-3-1">
                    <div class="star-response"> <img src="./jsdata/imagesale/icon-star.svg" alt=""> ${productList.listSale[i].response} </div>
                </div>
                <div class="infoSale-3-2">
                    <div class="time-response"> <img src="./jsdata/imagesale/icon-clock.svg" alt=""> </div>
                    <div> ${productList.listSale[i].time} </div>
                    <div> &nbsp; • &nbsp;</div>
                    <div> ${productList.listSale[i].meter} </div>
                </div>
        </div>
            <div class="saleDiscount">
                <div class="discountText"> <img src="./jsdata/imagesale/icon-promo-tag.svg" alt=""> 🔥 ${productList.listSale[i].sale} </div>
            </div>
        </div>
        `
    } 
    document.getElementById("saleProduct").innerHTML = listSaleProduct;
}
view.menuFood = () => {
    let menuFood1 = "";
    for (let j = 0; j < productList.listfood.length; j++) {
        menuFood1 += `
        <div class="listChung">
            <img class="imgFood" src="${productList.listfood[j].image}" alt="">
            <div class="nameFood"> ${productList.listfood[j].name} </div>
        </div>
        `
    }
    document.getElementById("listFood").innerHTML = menuFood1;
}
view.readMore = () => {
    let stickToReadMore = document.getElementById("stick-toReadMore");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("btn-readMore");
    btnText.addEventListener ("click",()=>{{
        if (stickToReadMore.style.display == "none") {
            btnText.innerHTML = "Read More";
            stickToReadMore.style.display = "inline";
            moreText.style.display = "none";
        } else {
            btnText.innerHTML = "Read Less";
            stickToReadMore.style.display = "none";
            moreText.style.display = "inline";
        }
    }})
}

view.listSandwiches = () => {
    let listSandwich = "";
    for (let i = 0; i < productList.listBanhMi.length; i++) {
        listSandwich += `
        <div class="aItemWrapper">
            <div style="width: 100%;"></div>
            <div class="aItemInfo">
                <div class="wherePhoto">
                    <img src="${productList.listBanhMi[i].image}" class="aItemPhoto" alt="">
                </div>
                <div  class="aItemDescriptionAll">
                    <div class="aItemDescription">  
                        <div style="margin: 0 -5px;"> 
                            <h3 class="aItemName"> ${productList.listBanhMi[i].name} </h3>
                        </div>
                        <h6 class="aItemDescription-1"> ${productList.listBanhMi[i].category} </h6>
                    </div>
                    <div style="display: flex; align-items: flex-end;">  
                        <div class="aItemPrice"> ${productList.listBanhMi[i].priceHT} </div>
                        <div class="amount" id="amount">  </div>
                        <div class="btn-buy"> 
                            <button> <i class="fa-solid fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listInAItem").innerHTML = listSandwich;
}
view.listSavouries = () => {
    let listSavoury = "";
    for (let i = 0; i < productList.listBanhSung.length; i++) {
        listSavoury += `
        <div class="aItemWrapper">
            <div style="width: 100%;"></div>
            <div class="aItemInfo">
                <div class="wherePhoto">
                    <img src="${productList.listBanhSung[i].image}" class="aItemPhoto" alt="">
                </div>
                <div  class="aItemDescriptionAll">
                    <div class="aItemDescription">  
                        <div style="margin: 0 -5px;"> 
                            <h3 class="aItemName"> ${productList.listBanhSung[i].name} </h3>
                        </div>
                        <h6 class="aItemDescription-1"> ${productList.listBanhSung[i].category} </h6>
                    </div>
                    <div style="display: flex; align-items: flex-end;">  
                        <div class="aItemPrice"> ${productList.listBanhSung[i].priceHT} </div>
                        <div class="amount" id="amount">  </div>
                        <div class="btn-buy"> 
                            <button> <i class="fa-solid fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listInAItem1").innerHTML = listSavoury;
}
view.listCoffeess = () => {
    let listCoffee = "";
    for (let i = 0; i < productList.listCaPhe.length; i++) {
        listCoffee += `
        <div class="aItemWrapper">
            <div style="width: 100%;"></div>
            <div class="aItemInfo">
                <div class="wherePhoto">
                    <img src="${productList.listCaPhe[i].image}" class="aItemPhoto" alt="">
                </div>
                <div  class="aItemDescriptionAll">
                    <div class="aItemDescription">  
                        <div style="margin: 0 -5px;"> 
                            <h3 class="aItemName"> ${productList.listCaPhe[i].name} </h3>
                        </div>
                        <h6 class="aItemDescription-1"> ${productList.listCaPhe[i].category} </h6>
                    </div>
                    <div style="display: flex; align-items: flex-end;">  
                        <div class="aItemPrice"> ${productList.listCaPhe[i].priceHT} </div>
                        <div class="amount" id="amount">  </div>
                        <div class="btn-buy"> 
                            <button> <i class="fa-solid fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listInAItem2").innerHTML = listCoffee;
}
view.Rices= () => {
    let listRice = "";
    for (let i = 0; i < productList.listComTho.length; i++) {
        listRice += `
        <div class="aItemWrapper">
            <div style="width: 100%;"></div>
            <div class="aItemInfo">
                <div class="wherePhoto">
                    <img src="${productList.listComTho[i].image}" class="aItemPhoto" alt="">
                </div>
                <div  class="aItemDescriptionAll">
                    <div class="aItemDescription">  
                        <div style="margin: 0 -5px;"> 
                            <h3 class="aItemName"> ${productList.listComTho[i].name} </h3>
                        </div>
                        <h6 class="aItemDescription-1"> ${productList.listComTho[i].category} </h6>
                    </div>
                    <div style="display: flex; align-items: flex-end;">  
                        <div class="aItemPrice"> ${productList.listComTho[i].priceHT} </div>
                        <div class="amount" id="amount">  </div>
                        <div class="btn-buy"> 
                            <button> <i class="fa-solid fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listInAItem3").innerHTML = listRice;
}
view.BonusFood= () => {
    let listBonus = "";
    for (let i = 0; i < productList.listBonusFRice.length; i++) {
        listBonus += `
        <div class="aItemWrapper">
            <div style="width: 100%;"></div>
            <div class="aItemInfo">
                <div class="wherePhoto">
                    <img src="${productList.listBonusFRice[i].image}" class="aItemPhoto" alt="">
                </div>
                <div  class="aItemDescriptionAll">
                    <div class="aItemDescription">  
                        <div style="margin: 0 -5px;"> 
                            <h3 class="aItemName"> ${productList.listBonusFRice[i].name} </h3>
                        </div>
                        <h6 class="aItemDescription-1"> ${productList.listBonusFRice[i].category} </h6>
                    </div>
                    <div style="display: flex; align-items: flex-end;">  
                        <div class="aItemPrice"> ${productList.listBonusFRice[i].priceHT} </div>
                        <div class="amount" id="amount">  </div>
                        <div class="btn-buy"> 
                            <button> <i class="fa-solid fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listInAItem4").innerHTML = listBonus;
}
view.chatMess = () => {
    let chatIcon = document.getElementById("chat-icon");
    let chatPage = document.getElementById("chat-container");
    chatIcon.addEventListener("click", ()=> {
        if (chatPage.style.display == "none") {
            chatPage.style.display = "inline";
            chatIcon.classList.remove("fa-message");
            chatIcon.classList.add("fa-x");
        } else {
            chatPage.style.display = "none";
            chatIcon.classList.add("fa-message");
            chatIcon.classList.remove("fa-x");
        }
    })
}

view.setScreenActive = (screen) => {
    switch (screen) {
        case "registerPage":
            let chad = document.getElementById("chad");
            chad.innerHTML = component.registerPage;
            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault();
                // let a = registerForm.firstname.value;
                // console.log(a);
                const data = {
                    Firstname: registerForm.firstname.value,
                    Lastname: registerForm.lastname.value,
                    Email: registerForm.email.value,
                    Password: registerForm.password.value,
                    Confirmpassword: registerForm.confirmpassword.value
                }
                controller.register(data);
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
            let redirectLogin = document.getElementById("redirectLogin");
            redirectLogin.addEventListener("click", () => {
                view.setScreenActive("loginPage");
            })
            break;
        case "loginPage":
            document.getElementById("chad").innerHTML = component.loginPage;
            let loginForm = document.getElementById("loginForm");
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = {
                    Email: loginForm.email.value,
                    Password: loginForm.password.value,
                }
                controller.login(data);
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
            let redirectRegister = document.getElementById("redirectRegister");
            redirectRegister.addEventListener("click", () => {
                view.setScreenActive("registerPage");
            })
            break;
        case "mainWeb":
            document.getElementById("chad").innerHTML = component.mainWeb;
            view.saleCode();
            view.menuFood();
            view.readMore();
            view.scrollToTop();
            view.chatMess();
            view.Rices();
            view.BonusFood();
            view.listSandwiches();
            view.listSavouries();
            view.listCoffeess();
            // let saleProductEvent =  document.getElementsByClassName("saleProductEvent");
            // for (let i = 0; i < saleProductEvent.length; i++) {
            //     console.log(saleProductEvent[i]);
            //     saleProductEvent[i].addEventListener("click", (e) => {
            //        let test = e.target
            //        console.log(test);
            //        let link = `<img src="./jsdata/imagesale/banner9.jpg" alt="">` 
            //        let link1 = `<img src="./jsdata/imagesale/banner3.jpg" alt="">`
            //         if (link) {
            //             view.setScreenActive("itemCoffee");
            //         }  else if (link1) {
            //             view.setScreenActive("itemRice");
            //         }  
            //     })
            // }

            // header mo an hien hinh bg
            var webHead = document.querySelector(".web-head");
            window.onscroll = () => {
                var currentTop = window.pageYOffset;
                if (currentTop > 0) {
                    webHead.classList.add("active");
                } else {
                    webHead.classList.remove("active");
                }
            }
            
            // slide anh o title
            let backgroundImg = document.getElementById('backgroundImg');
            let count = 0;
            let showBanner = () => {
                count++;
                backgroundImg.style.backgroundImage = `url(../image/anh${count}.jpg)`;
                if (count == 4) {
                    count = 0;
                }
            }
            setInterval(showBanner, 4000);

            // chat
            let send = document.getElementById("send");
            send.addEventListener("click", (e) => {
                e.preventDefault();
                let valueInput = document.getElementById("input-form").valueInput.value;
                document.getElementById("input-form").valueInput.value = "";
                let checkMessage = {
                    message: {
                        owner: firebase.auth().currentUser.email,
                        content: valueInput,
                    }
                }
                controller.checkMessage(checkMessage);
                model.getListMessage();
            });

            // login/register
            let LoginReg = document.getElementById("LoginReg");
            LoginReg.addEventListener("click", (e) => {
                e.preventDefault();
                view.setScreenActive("loginPage"); 
            });

            let buyingCart = document.getElementById("buyingCart");
            buyingCart.addEventListener("click", (e) => {
                e.preventDefault();
                view.setScreenActive("bill");
            })

            // mua hang
            let buttonBuy = document.querySelectorAll(".btn-buy");
            let Buyed = document.querySelectorAll(".amount");
            for (let i = 0;i < buttonBuy.length; i++)  {
                let count = 0;
                buttonBuy[i].onclick = () =>{
                    count++;
                    Buyed[i].innerHTML = `${count} X`;
                }}

            break;
        case "bill" :
            document.getElementById("chad").innerHTML = component.bill;
            break;
    }

}
view.scrollToTop =() => {
    let scrollTop = document.getElementById("scrollTop");
    scrollTop.addEventListener ("click", () => {
            window.scrollTo(0, 0);
    })
}
view.renderListChat = (listChat) => {
    let result = '';
    console.log("firebase.auth().currentUser", firebase.auth().currentUser);
    // console.log(listChat);
    for (let i = 0; i < listChat.length; i++) {
        if (firebase.auth().currentUser.email == listChat[i].message.owner) {
            result += ` 
            <div class="message me" id="me">
            <div class="content">   
                ${listChat[i].message.content}
            </div>
            <div class="content">
                ${listChat[i].message.createAt}
            </div>
            </div>`
        }
        else {
            result += ` <div class="message owner" id="me">
            <div class="content">
                ${listChat[i].message.owner}
            </div>
            <div class="content">
                ${listChat[i].message.content}
            
            </div>
            <div class="content">
                ${listChat[i].message.createAt}
            
            </div>
            </div>`
        }
    }
    document.getElementById("listChat").innerHTML = result;
}