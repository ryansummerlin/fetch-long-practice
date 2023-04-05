/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch('/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
});



/* ============================== Phase 2 ============================== */

fetch('/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})
    .then(function(res) {
        console.log(res.status);
        console.log(res.headers.get("Content-Type"));
        console.log(res.url);
        console.log(res.redirected);
    });




/* ============================== Phase 3 ============================== */

fetch('/products', {
    method: 'POST',
    body: new URLSearchParams({
        name: "Caribbean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
    }),
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})
    .then(function(res) {
        console.log(res.status);
        console.log(res.headers.get("Content-Type"));
        console.log(res.url);
        console.log(res.redirected);
    });
