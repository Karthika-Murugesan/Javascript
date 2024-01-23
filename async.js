async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                //console.log(response)
                response("Example for async/Await");
            }, 1000)
        }
    );
    console.log(await promise);
}
asAw()