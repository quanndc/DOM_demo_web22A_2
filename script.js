let container = document.getElementById('container');
let body = document.body;
body.style = "font-family: Maven Pro";

//navbar

function buildNavbar(){
    let navbar = document.createElement('div')
    navbar.className = "navbar";
    /**@type {CSSStyleDeclaration}*/
    let navBarStyle = {
        width: "100%",
        height: "80px",
        display: "flex"
    };
    Object.assign(navbar.style, navBarStyle);

    let leftNavbar = document.createElement('div');
    
    /**@type {CSSStyleDeclaration}*/
    let leftNavbarStyle = {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    Object.assign(leftNavbar.style, leftNavbarStyle);
    navbar.appendChild(leftNavbar);

    let rightNavbar = document.createElement('div');
    
    /**@type {CSSStyleDeclaration}*/
    let rightNavbarStyle = {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    Object.assign(rightNavbar.style, rightNavbarStyle);
    navbar.appendChild(rightNavbar);

    let navBarLogo = document.createElement('img');
    navBarLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png";
    /**@type {CSSStyleDeclaration}*/
    let navBarLogoStyle = {
        width: "35%",
        height: "auto",
    }
    Object.assign(navBarLogo.style, navBarLogoStyle);

    let signIn = document.createElement('div');
    signIn.innerHTML = "Đăng nhập";
    /**@type {CSSStyleDeclaration}*/
    let signInStyle = {
        width: "50%",
        height: "35%",
        fontSize: "25px",
        fontWeight: "500",
    }

    Object.assign(signIn.style, signInStyle);


    let leftNavbarContent = document.createElement('div');
    /**@type {CSSStyleDeclaration}*/
    let leftNavbarContentStyle = {
        width: "50%",
        height: "80%",
        display: "flex",
        columnGap: "10px",
        alignItems: "center"
    }
    Object.assign(leftNavbarContent.style, leftNavbarContentStyle);
    leftNavbar.appendChild(leftNavbarContent);
    leftNavbarContent.appendChild(navBarLogo);
    leftNavbarContent.appendChild(signIn);


    let rightNavbarContent = document.createElement('div');
    /**@type {CSSStyleDeclaration}*/
    let rightNavbarContentStyle = {
        width: "50%",
        height: "45%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "16px",
    }
    Object.assign(rightNavbarContent.style, rightNavbarContentStyle);


    let helpCenter = document.createElement('a');
    helpCenter.href = "https://help.shopee.vn/portal";
    helpCenter.innerHTML = "Bạn cần giúp đỡ?";
    /**@type {CSSStyleDeclaration}*/
    let helpCenterStyle = {
        textDecoration: "none",
        color: "#ee4d2d",
    }
    Object.assign(helpCenter.style, helpCenterStyle);

    rightNavbarContent.appendChild(helpCenter);
    rightNavbar.appendChild(rightNavbarContent);
    return navbar;
}



function buildMainBody(){
    let main = document.createElement('div')
    main.className = "main";
    /**@type {CSSStyleDeclaration}*/
    let mainStyle = {
        width: "100%",
        height: "600px",
        display: "flex",
        backgroundColor: "#ee4d2d"
    };
    Object.assign(main.style, mainStyle);

    return main;
}


container.appendChild(buildNavbar());
container.appendChild(buildMainBody());
