const component = {};
component.registerPage = `
<div class="register-container">
    <form id="registerForm" class="register-form">
        <div class="registerLogin"><h1>Register</h1></div>
        <div>
            <input class="register-input" type="text" placeholder="Firstname" name="firstname">
            <div class="error" id="firstname"></div>
        </div>
        <div>
            <input class="register-input" type="text" placeholder="Lastname" name="lastname">
            <div class="error" id="lastname"></div>
        </div>
        <div>
            <input class="register-input" type="text" placeholder="Email" name="email">
            <div class="error" id="email"></div>
        </div>
        <div>
            <input class="register-input" type="text" placeholder="Password" name="password">
            <div class="error" id="password"></div>
        </div>
        <div>
            <input class="register-input" type="text" placeholder="Confirm password" name="confirmpassword">
            <div class="error" id="confirmpassword"></div>
        </div>
        <div class="tx"> ban da co tai khoan?<a id="redirectLogin"> Login </a></div>
        <button class="buttonRegister" type="submit">Register</button>
    </form>
</div>
`
component.loginPage = `
<div class="login-container">
        <form id="loginForm" class="login-form">
            <div class="registerLogin"><h1>Login</h1></div>
            <div>
                <input class="login-input" type="text" placeholder="Email" name="email">
                <div class="error" id="email"></div>
            </div>
            <div>
                <input class="login-input" type="text" placeholder="Password" name="password">
                <div class="error" id="password"></div>
            </div>
            <div class="tx"> ban chua co tai khoan?<a id="redirectRegister"> Register </a></div>
            <button class="buttonLogin" type="submit">Login</button>
        </form>
    </div>
`
component.mainWeb = `
<div class="web-container">
    <div class="web-head" id="web-head">
        <a class="logoMain"> <img src="./image/logo2.png " alt=""> </a>
        <div style="flex: 1 1 0%"></div>
        <div class="margin-button">
            <div class="margin-but" id="buyingCart"> <a class="cart" role="button"> <i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="margin-but" id="LoginReg"> <a class="loginWrap" role="button"> Đăng nhập/đăng kí</a></div>
        </div>
    </div>
    <div class="contentWrapper">
        <div class="backgroundImg" id="backgroundImg" >
        </div>
        <div class="backgroundImgBorder"></div>
    </div>
    <div class="productShop">
        <div class="saleCode">
            <h1 class="titleSaleCode"> Mã khuyến mãi GrabFood </h1>
            <div class="saleProduct" id="saleProduct"></div>
            <button type="button" class="btn-seeMore"> <span>See all promotions </span> </button> 
            
        </div>
    </div>
    <div class="listText">
        <h1>There's something for everyone! </h1>
    </div>
    <div class="listFood" id="listFood"> </div>
    <div class="page-layout-content">
        <div class="contentInAItem">
            <div class="stick-under" style="margin-top:40px;margin-bottom: 0px;"></div>
            <div class="menuInAItem">
                <div class="sectionContainer">
                    <div class="sandwich">
                        <h2 class="aNameInAItem"> Sandwiches </h2>
                        <div class="listInAItem" id="listInAItem"> </div>
                    </div>
                    <div class="savouries">
                        <h2 class="aNameInAItem"> Savouries </h2>
                        <div class="listInAItem" id="listInAItem1"> </div>
                    </div>
                    <div class="coffee">
                        <h2 class="aNameInAItem"> Espresso & Coffee </h2>
                        <div class="listInAItem" id="listInAItem2"> </div>
                    </div>
                    <div class="comtho">
                        <h2 class="aNameInAItem"> Cơm thố </h2>
                        <div class="listInAItem" id="listInAItem3"> </div>
                    </div>
                    <div class="savouries">
                        <h2 class="aNameInAItem"> Món thêm </h2>
                        <div class="listInAItem" id="listInAItem4"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nearFooter">
        <h3 class="lastcontent-1"> Tại sao nên lựa chọn GrabFood? </h3>
        <ul class="tick-icon">
            <li>
                <span class="lastcontent-1-main"> Nhanh nhất </span>
                <span> - </span>
                <span> GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường. </span>
            </li>
            <li>
                <span class="lastcontent-1-main"> Dễ dàng nhất </span>
                <span> - </span>
                <span> Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn. </span>
            </li>
            <li>
                <span class="lastcontent-1-main"> Đáp ứng mọi nhu cầu </span>
                <span> - </span>
                <span> Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn. </span>
            </li>
            <li>
                <span class="lastcontent-1-main"> Thanh toán dễ dàng </span>
                <span> - </span>
                <span> Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa. </span>
            </li>
            <li>
                <span class="lastcontent-1-main"> Nhiều quà tặng hơn </span>
                <span> - </span>
                <span> Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn. </span>
            </li>
        </ul>
        <h3 style="font-size: 38px; font-weight: 540; margin:20px 0;"> Các câu hỏi thường gặp </h3>
        <h4 style="font-size: 24px;margin: 16px 0;"> Grabfood là gì </h4>
        <p style="line-height: 24px; margin-bottom: 25px">GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.</p>
        <div id="more" class="more">
            <div class="stick-under" id="stick-toReadMore" style="display: none;"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> Làm thế nào để đặt đồ ăn tại Việt Nam </h4>
            <p>Sau đây là cách đơn giản nhất để đặt đồ ăn qua GrabFood khi bạn ở Việt Nam:</p>
            <ol class="tick-icon">
                <li>
                    <span class="lastcontent-1-main"> Tìm kiếm nhà hàng hoặc món ăn yêu thích </span>
                    <span> - </span>
                    <span> Nhập địa chỉ của bạn vào trang chủ. Xem các Nhà hàng và điểm ăn uống gần chỗ bạn trong danh sách của GrabFood. Chọn nhà hàng yêu thích, duyệt hết thực đơn và chọn món ăn bạn muốn đặt. </span>
                </li>
                <li>
                    <span class="lastcontent-1-main"> Kiểm tra & Thanh toán </span>
                    <span> - </span>
                    <span> Sau khi chắc chắn rằng bạn đã đặt đầy đủ các món theo nhu cầu, hãy nhấp vào tab “ORDER NOW” (ĐẶT MÓN NGAY) và nhập địa chỉ giao đồ ăn cuối cùng. Chọn phương thức thanh toán phù hợp nhất với bạn và thanh toán. </span>
                </li>
                <li>
                    <span class="lastcontent-1-main"> Giao hàng </span>
                    <span> - </span>
                    <span> GrabFood đã thiết kế một hành trình phục vụ khách hàng liền mạch để bạn có thể thưởng thức món ăn một cách trọn vẹn. Chúng tôi sẽ gửi cho bạn email và tin nhắn SMS tức thời xác nhận đơn đặt hàng của bạn và thời gian giao hàng dự kiến. Sau đó chúng tôi sẽ giao ngay đồ ăn cho bạn. </span>
                </li>
            </ol>
            <div class="stick-under"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không? </h4>
            <p style="line-height: 22px";>Chúng tôi chỉ biết một điều duy nhất, đó là "đồ ăn", vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).</p>
            <div class="stick-under" ></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> GrabFood có chấp nhận tiền mặt không? </h4>
            <p style="line-height: 22px";>Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.</p>
            <div class="stick-under"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> Tôi có thể thanh toán trực tuyến trên GrabFood cho đơn hàng của mình không? </h4>
            <p style="line-height: 22px";>GrabFood ko chấp nhận nhiều hình thức thanh toán cho các đơn đặt đồ ăn trực tuyến, bao gồm cả thanh toán trực tuyến tại Việt Nam bằng thẻ tín dụng, thẻ ghi nợ, PayPal hoặc trả tiền lúc nhận hàng. Hãy nhớ sử dụng <a style="text-decoration:none;" href="#">Moca</a> để tích điểm thưởng mà bạn có thể sử dụng để được giảm giá cho đơn hàng tiếp theo và cho các dịch vụ khác của Grab nhé.</p>
            <div class="stick-under"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> Tôi có thể đặt đồ ăn trên GrabFood cho người khác không? </h4>
            <p style="line-height: 22px";>Tất nhiên rồi, hãy chăm sóc những người thân yêu của mình bằng cách gửi những món ăn mà họ yêu thích đến tận nhà. Bạn chỉ cần cập nhật địa chỉ giao hàng và tên người nhận trước khi đặt đơn hàng của bạn.</p>
            <div class="stick-under"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> GrabFood có chấp nhận tiền mặt không? </h4>
            <p style="line-height: 22px";>Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.</p>
            <div class="stick-under"></div>
            <h4 style="font-size: 24px;margin: 16px 0;"> Những nhà hàng nào được liệt kê trong GrabFood? </h4>
            <p style="line-height: 22px; margin-bottom:30px";>Chúng tôi có gì trên GrabFood? Chúng tôi tự hào có nhiều nhà hàng và món ăn nhất so với bất kỳ ứng dụng giao đồ ăn nào ở Việt Nam. Bạn có thể lựa chọn trong số hàng nghìn nhà hàng trên GrabFood Việt Nam. Bạn có thể đặt đồ ăn trực tuyến từ tất cả các điểm ăn uống yêu thích của Burger King, Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza, Pizza Hut, Subway!</p>
        </div>
        <button type="button"  id="btn-readMore" class="btn-readMore"> <span> Read more </span></button>
    </div>
    <div class="nearestFooter">
        <div class="nearestFooter-introAll">
            <div class="nearestFooter-intro1">
            <img class="imgIntro" src="./jsdata/imagesale/bottom-food-options.svg" alt="">
            <div style="line-height: 40px;font-size:28px;"> Curated restaurants </div>
            <div style="margin-bottom: 30px"> From small bites to big meals, we won't limit your appetite. Go ahead and order all you want. </div>
            </div>
            <div class="nearestFooter-intro2">
                <img class="imgIntro" src="./jsdata/imagesale/ilus-cool-features-app.svg" alt="">
                <div style="line-height: 40px;font-size:28px;"> More cool features available on the app </div>
                <div style="margin-bottom: 30px"> Download Grab app to use other payment methods and enjoy seamless communication with your driver. </div>
                <div style="display:flex;flex-warp:warp">
                    <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com" style="margin:0 10px;">
                        <img src="./jsdata/imagesale/logo-playstore.svg" alt="">
                    </a>
                    <a href="https://apps.apple.com/app/id647268330?af_prt=food.grab.com&c=direct&is_retargeting=true&l=vi&pid=other_websites" style="margin:0 10px;">
                        <img src="./jsdata/imagesale/logo-appstore.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <a>  <img class="logoMain2" src="./jsdata/imagesale/logo-grabfood-white2.svg" alt=""> </a>
        <div class="stick-under"></div>
        <div class="footer-list">
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Về Grabfood </a></div>
                <div class="footer-col-a"><a href="#"> Về Grab</a></div>
                <div class="footer-col-a"><a href="#"> Blog</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Mở quán trên Grabfood </a></div>
                <div class="footer-col-a"><a href="#"> Trở thành tài xế Grab</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Trung tâm hỗ trợ</a></div>
                <div class="footer-col-a"><a href="#"> Câu hỏi thường gặp</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Liên hệ chúng tôi </a> </div>
                <div class="footer-col-a">
                    <span class="fb"> <a href="#"> <i class="fa-brands fa-facebook"></i> </a></span>
                    <span class="ins"> <a href="#"> <i class="fa-brands fa-instagram"></i> </a></span>
                    <span class="tw"> <a href="#"> <i class="fa-brands fa-twitter"></i> </a></span>
                </div>
            </div>
        </div>
        <div class="endweb">© 2022 Grab</div>
    </div>
</div>
<div class="chat-container" id="chat-container" style="display: none;">
    <div class="chat-head">
        <div class="title"> Feedbacks </div>
    </div>
    <div class="chat-body"> Messages here </div>
    <div class="list-chat" id="listChat">
                    <div class="message me" id="me">
                    </div>    
                </div>
    <form class="chat-input" id="input-form">
        <div class="input-write">
            <input type="text" id="txtInput" placeholder="Write here" name="valueInput" autofocus>
        </div>
        <button class="send" id="send"> <i class="fa-solid fa-paper-plane"></i> </button>
    </form>
</div>
<div class="chat-icon" id="chat-icon">
    <i class="fa-solid fa-message"></i>
</div>
<div class="scrollTop" id="scrollTop"> <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>
`
component.bill=`
<div class="web-container">
    <div class="web-head" id="web-head" style="background-color: #00b14f;">
        <a class="logoMain"> <img src="./image/logo3.svg " alt="" style="width:320px;height:50px"> </a>
        <div style="flex: 1 1 0%"></div>
        <div class="margin-button">
            <div class="margin-but"> <a class="cart" role="button"> <i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="margin-but" id="LoginReg"> <a class="loginWrap" href=""> Đăng nhập/đăng kí</a></div>
        </div>
    </div>
    <div class="modal-body" style="padding: 0 100px;">
        <div class="cart-row">
            <span class="cart-item cart-header cart-column">Sản Phẩm</span>
            <span class="cart-price cart-header cart-column">Giá</span>
            <span class="cart-quantity cart-header cart-column">Số Lượng</span>
        </div>
        <div class="cart-items">
            <div class="cart-row">
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="" width="100" height="100">
            <span class="cart-item-title"></span>
        </div>
        <span class="cart-price cart-column"></span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
        </div>
    </div>
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="" width="100" height="100">
            <span class="cart-item-title"></span>
        </div>
                            <span class="cart-price cart-column"></span>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" type="number" value="2">
                                <button class="btn btn-danger" type="button">Xóa</button>
                            </div>
                        </div>
                        <div class="cart-total">
                            <strong class="cart-total-title">Tổng Cộng:</strong>
                            <span class="cart-total-price"></span>
                        </div>
                    </div>
                    </div>
                    <div class="footer" style="padding-top: 15px;">
        <a>  <img style="margin-left: 60px;" class="logoMain2" src="./jsdata/imagesale/logo-grabfood-white2.svg" alt=""> </a>
        <div class="stick-under"></div>
        <div class="footer-list">
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Về Grabfood </a></div>
                <div class="footer-col-a"><a href="#"> Về Grab</a></div>
                <div class="footer-col-a"><a href="#"> Blog</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Mở quán trên Grabfood </a></div>
                <div class="footer-col-a"><a href="#"> Trở thành tài xế Grab</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Trung tâm hỗ trợ</a></div>
                <div class="footer-col-a"><a href="#"> Câu hỏi thường gặp</a></div>
            </div>
            <div class="footer-col">
                <div class="footer-col-a"><a href="#"> Liên hệ chúng tôi </a> </div>
                <div class="footer-col-a">
                    <span class="fb"> <a href="#"> <i class="fa-brands fa-facebook"></i> </a></span>
                    <span class="ins"> <a href="#"> <i class="fa-brands fa-instagram"></i> </a></span>
                    <span class="tw"> <a href="#"> <i class="fa-brands fa-twitter"></i> </a></span>
                </div>
            </div>
        </div>
        <div class="endweb">© 2022 Grab</div>
    </div>
</div>
`